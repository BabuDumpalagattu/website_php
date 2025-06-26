import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign, Building, Mail, Phone } from "lucide-react";
import { Job } from "@/types/job";

interface JobModalProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
}

const convertSalaryToINR = (salary: string): string => {
  const exchangeRate = 83.5;
  const range = salary.replace(/\$/g, '').split('-').map(s => parseFloat(s.replace(/,/g, '').trim()));
  if (range.length === 2 && !isNaN(range[0]) && !isNaN(range[1])) {
    const inrMin = Math.round(range[0] * exchangeRate).toLocaleString('en-IN');
    const inrMax = Math.round(range[1] * exchangeRate).toLocaleString('en-IN');
    return `₹${inrMin} - ₹${inrMax}`;
  }
  return salary;
};

const JobModal = ({ job, isOpen, onClose }: JobModalProps) => {
  if (!job) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">{job.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-600">
              <Building className="h-5 w-5 mr-2" />
              <span className="text-lg font-medium">{job.company}</span>
            </div>
            <Badge variant={job.type === 'Full-time' ? 'default' : 'secondary'}>
              {job.type}
            </Badge>
          </div>

          {job.position && (
            <div className="text-gray-600 ml-[26px]">
              Position: {job.position}
              {job.positionsAvailable && (
                <span className="ml-2 text-sm text-gray-500">({job.positionsAvailable} openings)</span>
              )}
            </div>
          )}
          {job.experience && (
            <div className="text-gray-600 ml-[26px]">Experience: {job.experience} years</div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <DollarSign className="h-5 w-5 mr-2" />
              <span>{convertSalaryToINR(job.salary)}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="h-5 w-5 mr-2" />
              <span>Posted {job.postedDate}</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Job Description</h3>
            <p className="text-gray-700 leading-relaxed">{job.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Required Skills</h3>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill, index) => (
                <Badge key={index} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600">
                <Mail className="h-4 w-4 mr-2" />
                <span>{job.contactEmail}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="h-4 w-4 mr-2" />
                <span>{job.contactPhone}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
              Apply Now
            </Button>
            <Button variant="outline" className="flex-1">
              Save Job
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JobModal;
