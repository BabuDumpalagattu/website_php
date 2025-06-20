import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '../img/logo-blue.svg'; // adjust this path if needed
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center z-50">
            <img src={Logo} alt="Clahan Logo" className="w-30 h-10 mr-3" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>

            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                Courses <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  to="/courses/devops"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50"
                >
                  DevOps & DevSecOps
                </Link>
                <Link
                  to="/courses/python"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50"
                >
                  Python Programming
                </Link>
                <Link
                  to="/courses/sql"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50"
                >
                  SQL & Database
                </Link>
              </div>
            </div>

            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            <Link
              to="/success-stories"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Success Stories
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Login
              </Button>
            </Link>
            <Link to="/enroll">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Enroll Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40">
            <nav className="px-4 py-6 space-y-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>

              {/* Collapsible Mobile Courses */}
              <div className="space-y-2">
                <button
                  className="flex items-center justify-between w-full text-left font-medium text-gray-900 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMobileCoursesOpen(!isMobileCoursesOpen)}
                >
                  Courses
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      isMobileCoursesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isMobileCoursesOpen && (
                  <div className="space-y-2 pl-2">
                    <Link
                      to="/courses/devops"
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-gray-700 hover:text-blue-600 py-1"
                    >
                      DevOps & DevSecOps
                    </Link>
                    <Link
                      to="/courses/python"
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-gray-700 hover:text-blue-600 py-1"
                    >
                      Python Programming
                    </Link>
                    <Link
                      to="/courses/sql"
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-gray-700 hover:text-blue-600 py-1"
                    >
                      SQL & Database
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </Link>
              <Link
                to="/success-stories"
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 hover:text-blue-600 transition-colors"
              >
                Success Stories
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>

              {/* CTA Buttons (Mobile) */}
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full border-blue-600 text-blue-600">
                  Login
                </Button>
                <Link to="/enroll" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Enroll Now
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
