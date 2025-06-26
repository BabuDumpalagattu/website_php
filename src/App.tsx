// App.tsx
import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Header from "@/components/Header";
import JobHeader from "@/components/JobHeader";

import Index from "./pages/Index";
import About from "./pages/About";
import SuccessStories from "./pages/SuccessStories";
import Contact from "./pages/Contact";
import DevOpsCourse from "./pages/DevOpsCourse";
import SQLCourse from "./pages/SQLCourse";
import PythonCourse from "./pages/PythonCourse";
import Enroll from "./pages/Enroll";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";
import AdminJobDashboard from "./pages/AdminJobDashboard";
import JobBoard from "./pages/JobBoard";
import NotFound from "./pages/NotFound";
// If needed:
// import EnrolledDetails from "./pages/EnrolledDetails";

import { Job } from "./types/job";

const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isJobHeaderRoute =
    location.pathname.startsWith("/admin") || location.pathname === "/jobs";

  return (
    <>
      {isJobHeaderRoute ? <JobHeader /> : <Header />}
      {children}
    </>
  );
};

const AppRoutes = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  const handleAddJob = (jobData: Omit<Job, "id" | "postedDate">) => {
    const newJob: Job = {
      ...jobData,
      id: Date.now().toString(),
      postedDate: "Just now",
    };
    setJobs((prev) => [newJob, ...prev]);
  };

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses/devops" element={<DevOpsCourse />} />
        <Route path="/courses/sql" element={<SQLCourse />} />
        <Route path="/courses/python" element={<PythonCourse />} />
        <Route path="/enroll" element={<Enroll />} />
        {/* Admin & Job Management */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin jobs={jobs} onAddJob={handleAddJob} />} />
        <Route path="/admin/dashboard" element={<AdminJobDashboard jobs={jobs} onAddJob={handleAddJob} />} />
        <Route path="/jobs" element={<JobBoard jobs={jobs} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
