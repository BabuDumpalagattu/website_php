
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { toast } from 'sonner';
import MessagesTable from './MessagesTable';
import EnrolledDetails from './EnrolledDetails';
import AdminJobDashboard from './AdminJobDashboard';
import { Job } from '@/types/job';
import footerLogo from '../img/adminlogo.jpg';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [showContacts, setShowContacts] = useState(false);
  const [showEnrollments, setShowEnrollments] = useState(false);
  const [showJobDashboard, setShowJobDashboard] = useState(false);
  const [contactCount, setContactCount] = useState(0);
  const [enrollmentCount, setEnrollmentCount] = useState(0);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin/login');
    }
  }, [navigate]);

  useEffect(() => {
    fetch('https://clahantechnologies.com/api/get_contacts.php')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setContactCount(data.length);
      });

    fetch('https://clahantechnologies.com/api/get_enrollments.php')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setEnrollmentCount(data.length);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('adminEmail');
    toast.success('Logged out successfully');
    navigate('/admin/login');
  };

  const adminEmail = localStorage.getItem('adminEmail');

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center mb-4">
              <img
                src={footerLogo}
                alt="Clahan Logo"
                className="h-20 w-auto object-contain mb-0"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Welcome back, {adminEmail}</p>
            </div>
          </div>
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Submissions</CardTitle>
              <CardDescription>Manage contact form submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-blue-600">{contactCount}</p>
              <p className="text-sm text-gray-600">Total submissions</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Course Enrollments</CardTitle>
              <CardDescription>Track course registrations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-600">{enrollmentCount}</p>
              <p className="text-sm text-gray-600">Active enrollments</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Success Stories</CardTitle>
              <CardDescription>Student achievements</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-purple-600">0</p>
              <p className="text-sm text-gray-600">Published stories</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Manage your platform efficiently</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button
                  onClick={() => {
                    setShowContacts(true);
                    setShowEnrollments(false);
                    setShowJobDashboard(false);
                  }}
                  className="h-20 flex flex-col bg-blue-600 hover:bg-blue-700"
                >
                  <span className="font-semibold">View Contacts</span>
                  <span className="text-sm">Manage inquiries</span>
                </Button>
                <Button
                  onClick={() => {
                    setShowEnrollments(true);
                    setShowContacts(false);
                    setShowJobDashboard(false);
                  }}
                  className="h-20 flex flex-col bg-green-600 hover:bg-green-700"
                >
                  <span className="font-semibold">Course Management</span>
                  <span className="text-sm">View Enrollments</span>
                </Button>
                <Button
                  onClick={() => {
                    setShowJobDashboard(true);
                    setShowContacts(false);
                    setShowEnrollments(false);
                  }}
                  className="h-20 flex flex-col bg-indigo-600 hover:bg-indigo-700"
                >
                  <span className="font-semibold">Job Admin</span>
                  <span className="text-sm">Manage Jobs</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tables & Sub Views */}
        {showContacts && (
          <div className="mt-10">
            <MessagesTable />
          </div>
        )}

        {showEnrollments && (
          <div className="mt-10">
            <EnrolledDetails />
          </div>
        )}

        {showJobDashboard && (
          <div className="mt-10">
            <AdminJobDashboard />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
