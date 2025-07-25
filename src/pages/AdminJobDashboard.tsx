import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Eye, Edit, Trash2, Users, Briefcase, TrendingUp } from "lucide-react";
import JobForm from "@/components/JobForm";
import { Job } from "@/types/job";
import { useToast } from "@/hooks/use-toast";

const AdminJobDashboard = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [activeTab, setActiveTab] = useState("overview");
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const { toast } = useToast();
  const [applications, setApplications] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://clahantechnologies.com/api/get_jobs.php")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const parsedJobs = data.map((job: any) => ({
            ...job,
            skills: Array.isArray(job.skills)
              ? job.skills
              : typeof job.skills === "string"
              ? (() => {
                  try {
                    const parsed = JSON.parse(job.skills);
                    return Array.isArray(parsed) ? parsed : job.skills.split(',').map((s: string) => s.trim());
                  } catch {
                    return job.skills.split(',').map((s: string) => s.trim());
                  }
                })()
              : [],
          }));
          setJobs(parsedJobs);
        }
      })
      .catch(() => toast({ title: "Failed to load jobs", variant: "destructive" }));
      fetch("https://clahantechnologies.com/api/get_applications.php")
  .then((res) => res.json())
  .then((data) => {
    if (Array.isArray(data)) {
      setApplications(data);
    }
  })
  .catch(() => toast({ title: "Failed to load applications", variant: "destructive" }));

  }, []);

  const handleJobSubmit = (submittedJob: Job) => {
    setJobs((prev) => [submittedJob, ...prev]);
    setEditingJob(null);
    setActiveTab("jobs");
    toast({ title: "Job posted successfully!" });
  };

  const handleUpdate = async (updatedJob: Job) => {
    const response = await fetch("https://clahantechnologies.com/api/update_job.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedJob),
    });
    const result = await response.json();
    if (result.success) {
      setJobs(jobs.map((job) => (job.id === updatedJob.id ? updatedJob : job)));
      setEditingJob(null);
      setActiveTab("jobs");
      toast({ title: "Job updated successfully!" });
    } else {
      toast({ title: "Failed to update job.", variant: "destructive" });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this job?")) return;

    const response = await fetch("https://clahantechnologies.com/api/delete_job.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    const result = await response.json();
    if (result.success) {
      setJobs(jobs.filter((job) => job.id !== id));
      toast({ title: "Job deleted successfully." });
    } else {
      toast({ title: "Failed to delete job.", variant: "destructive" });
    }
  };

  const stats = [
    { title: "Total Jobs", value: jobs.length.toString(), icon: Briefcase, color: "text-blue-600" },
    { title: "Applications", value: applications.length.toString(), icon: Users, color: "text-green-600" },
    { title: "Views", value: "1,234", icon: Eye, color: "text-purple-600" },
    { title: "Conversion Rate", value: "8.5%", icon: TrendingUp, color: "text-orange-600" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your job postings and applications</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="jobs">Manage Jobs</TabsTrigger>
            <TabsTrigger value="post">Post New Job</TabsTrigger>
             <TabsTrigger value="applications">Job Applications</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="jobs" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">All Job Postings</h2>
              <Button onClick={() => {
                setEditingJob(null);
                setActiveTab("post");
              }} className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Post New Job
              </Button>
            </div>
            <div className="space-y-4">
              {jobs.map((job) => (
                <Card key={job.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                          <Badge variant={job.type === 'Full-time' ? 'default' : 'secondary'}>
                            {job.type}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-2">{job.company} • {job.location}</p>
                        <p className="text-sm text-gray-500 mb-3">{job.salary}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {(job.skills || []).slice(0, 3).map((skill, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-sm text-gray-500">Posted {job.postedDate}</p>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => {
                          setEditingJob(job);
                          setActiveTab("post");
                        }}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700" onClick={() => handleDelete(job.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="post">
            <JobForm
              onSubmit={editingJob ? handleUpdate : handleJobSubmit}
              initialData={editingJob || undefined}
              isEditing={!!editingJob}
            />
          </TabsContent>
          <TabsContent value="applications" className="space-y-6">
  <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Applications</h2>

  {applications.length === 0 ? (
    <p className="text-gray-500">No applications found.</p>
  ) : (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 text-sm text-left">
        <thead className="bg-green-600 text-white">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Mobile</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Experience</th>
            <th className="px-4 py-2">Qualification</th>
            <th className="px-4 py-2">Current Salary</th>
            <th className="px-4 py-2">Expected Salary</th>
            <th className="px-4 py-2">Notice Period</th>
            <th className="px-4 py-2">Preferred Location</th>
            <th className="px-4 py-2">Job ID</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Company</th>
            <th className="px-4 py-2">Location</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Position</th>
            <th className="px-4 py-2">Openings</th>
            <th className="px-4 py-2">Salary Range</th>
            <th className="px-4 py-2">Applied At</th>
            <th className="px-4 py-2">Resume</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app, idx) => (
            <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="px-4 py-2">{app.fullName}</td>
              <td className="px-4 py-2">{app.mobile}</td>
              <td className="px-4 py-2">{app.email}</td>
              <td className="px-4 py-2">{app.experience}</td>
              <td className="px-4 py-2">{app.qualification}</td>
              <td className="px-4 py-2">{app.currentSalary}</td>
              <td className="px-4 py-2">{app.expectedSalary}</td>
              <td className="px-4 py-2">{app.noticePeriod}</td>
              <td className="px-4 py-2">{app.preferredLocation}</td>
              <td className="px-4 py-2">{app.jobId}</td>
              <td className="px-4 py-2">{app.jobTitle}</td>
              <td className="px-4 py-2">{app.company}</td>
              <td className="px-4 py-2">{app.location}</td>
              <td className="px-4 py-2">{app.type}</td>
              <td className="px-4 py-2">{app.position}</td>
              <td className="px-4 py-2">{app.openings}</td>
              <td className="px-4 py-2">{app.salary_range}</td>
              <td className="px-4 py-2">
                {/* {new Date(app.applied_date).toLocaleString("en-IN")} */}
                <p className="text-sm text-gray-600">

  {app.applied_at
    ? new Date(app.applied_at.replace(" ", "T")).toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
        timeZone: "Asia/Kolkata"
      })
    : "N/A"}
</p>

              </td>
              <td className="px-4 py-2">
           
                <p className="text-sm text-gray-600">
  <a 
    href={app.resume_url} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-blue-600 underline"
  >
    Download Resume
  </a>
</p>



              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</TabsContent>


        </Tabs>
      </div>
    </div>
  );
};

export default AdminJobDashboard;

