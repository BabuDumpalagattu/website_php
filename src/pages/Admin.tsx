// src/pages/Admin.tsx
import { Job } from "@/types/job";
import JobForm from "@/components/JobForm";
import { useToast } from "@/hooks/use-toast";

interface AdminProps {
  jobs: Job[];
  onAddJob: (job: Omit<Job, 'id' | 'postedDate'>) => void;
}

const Admin = ({ jobs, onAddJob }: AdminProps) => {
  const { toast } = useToast();

  const handleJobSubmit = (jobData: Omit<Job, 'id' | 'postedDate'>) => {
    onAddJob(jobData);
    toast({
      title: "Job Posted!",
      description: "The job has been added successfully.",
    });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Post a New Job</h1>
      <JobForm onSubmit={handleJobSubmit} />
    </div>
  );
};

export default Admin;
