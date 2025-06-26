// src/components/JobHeader.tsx
import { Link, useLocation } from "react-router-dom";
import { Briefcase, Plus, User } from "lucide-react";

const JobHeader = () => {
  const location = useLocation();
  const isAdminPage = location.pathname.includes("/admin");
  const isJobsPage = location.pathname === "/jobs";

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Briefcase className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">JobBoard</span>
          </Link>

          <nav className="flex items-center space-x-4">
            <Link
              to="/jobs"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isJobsPage
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <User className="h-4 w-4 inline mr-1" />
              Jobs
            </Link>
            <Link
              to="/admin/jobdashboard"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isAdminPage
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Plus className="h-4 w-4 inline mr-1" />
              Admin
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default JobHeader;
