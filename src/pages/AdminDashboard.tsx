// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { toast } from 'sonner';

// const AdminDashboard = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
//     if (!isLoggedIn) {
//       navigate('/admin/login');
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem('isAdminLoggedIn');
//     localStorage.removeItem('adminEmail');
//     toast.success('Logged out successfully');
//     navigate('/admin/login');
//   };

//   const adminEmail = localStorage.getItem('adminEmail');

//   return (
//     <div className="min-h-screen bg-gray-50 p-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <div className="flex items-center space-x-4">
//             <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
//               <span className="text-white font-bold text-xl">C</span>
//             </div>
//             <div>
//               <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
//               <p className="text-gray-600">Welcome back, {adminEmail}</p>
//             </div>
//           </div>
//           <Button onClick={handleLogout} variant="outline">
//             Logout
//           </Button>
//         </div>

//         {/* Dashboard Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <Card>
//             <CardHeader>
//               <CardTitle>Contact Submissions</CardTitle>
//               <CardDescription>Manage contact form submissions</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <p className="text-2xl font-bold text-blue-600">0</p>
//               <p className="text-sm text-gray-600">Total submissions</p>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <CardTitle>Course Enrollments</CardTitle>
//               <CardDescription>Track course registrations</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <p className="text-2xl font-bold text-green-600">0</p>
//               <p className="text-sm text-gray-600">Active enrollments</p>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <CardTitle>Success Stories</CardTitle>
//               <CardDescription>Student achievements</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <p className="text-2xl font-bold text-purple-600">0</p>
//               <p className="text-sm text-gray-600">Published stories</p>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Quick Actions */}
//         <div className="mt-8">
//           <Card>
//             <CardHeader>
//               <CardTitle>Quick Actions</CardTitle>
//               <CardDescription>Manage your platform efficiently</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                 <Button className="h-20 flex flex-col bg-blue-600 hover:bg-blue-700">
//                   <span className="font-semibold">View Contacts</span>
//                   <span className="text-sm">Manage inquiries</span>
//                 </Button>
//                 <Button className="h-20 flex flex-col bg-green-600 hover:bg-green-700">
//                   <span className="font-semibold">Course Management</span>
//                   <span className="text-sm">Edit courses</span>
//                 </Button>
//                 <Button className="h-20 flex flex-col bg-purple-600 hover:bg-purple-700">
//                   <span className="font-semibold">Add Content</span>
//                   <span className="text-sm">Create new posts</span>
//                 </Button>
//                 <Button className="h-20 flex flex-col bg-orange-600 hover:bg-orange-700">
//                   <span className="font-semibold">Analytics</span>
//                   <span className="text-sm">View reports</span>
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import MessagesTable from './MessagesTable'; // Make sure this path is correct
import footerLogo from '../img/adminlogo.jpg';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [showContacts, setShowContacts] = useState(false); // 🔹 NEW STATE

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin/login');
    }
  }, [navigate]);
  const [contactCount, setContactCount] = useState(0); // 🔹 New state

useEffect(() => {
  fetch('http://localhost:5000/backend/api/get_contacts.php')
    .then(res => res.json())
    .then(data => {
      if (Array.isArray(data)) {
        setContactCount(data.length); // 🔹 Set the count dynamically
      }
    })
    .catch(err => {
      console.error("Error fetching contact count:", err);
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
            {/* <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div> */}
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

        {/* Dashboard Content */}
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
              <p className="text-2xl font-bold text-green-600">0</p>
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
                  onClick={() => setShowContacts(true)} // 🔹 When clicked, show table
                  className="h-20 flex flex-col bg-blue-600 hover:bg-blue-700"
                >
                  <span className="font-semibold">View Contacts</span>
                  <span className="text-sm">Manage inquiries</span>
                </Button>
                <Button className="h-20 flex flex-col bg-green-600 hover:bg-green-700">
                  <span className="font-semibold">Course Management</span>
                  <span className="text-sm">Edit courses</span>
                </Button>
                <Button className="h-20 flex flex-col bg-purple-600 hover:bg-purple-700">
                  <span className="font-semibold">Add Content</span>
                  <span className="text-sm">Create new posts</span>
                </Button>
                <Button className="h-20 flex flex-col bg-orange-600 hover:bg-orange-700">
                  <span className="font-semibold">Analytics</span>
                  <span className="text-sm">View reports</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 🔹 Conditionally render MessagesTable */}
        {showContacts && (
          <div className="mt-10">
            <MessagesTable />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
