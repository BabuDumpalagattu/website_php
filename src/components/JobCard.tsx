import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign, Building } from "lucide-react";
import { Job } from "@/types/job";

interface JobCardProps {
  job: Job;
  onViewDetails: (job: Job) => void;
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

const JobCard = ({ job, onViewDetails }: JobCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{job.title}</h3>
            <div className="flex items-center text-gray-600 mb-1">
              <Building className="h-4 w-4 mr-1" />
              <span className="text-sm">{job.company}</span>
            </div>
            {job.position && (
              <div className="text-sm text-gray-500 italic">Position: {job.position}</div>
            )}
            {job.experience && (
              <div className="text-sm text-gray-500 italic">Experience: {job.experience} years</div>
            )}
            {job.positionsAvailable && (
              <div className="text-sm text-gray-500 italic">Openings: {job.positionsAvailable}</div>
            )}
          </div>
          <Badge variant={job.type === 'Full-time' ? 'default' : 'secondary'}>
            {job.type}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm">{job.location}</span>
        </div>

        <div className="flex items-center text-gray-600 mb-2">
          <DollarSign className="h-4 w-4 mr-2" />
          <span className="text-sm">{convertSalaryToINR(job.salary)}</span>
        </div>

        <div className="flex items-center text-gray-600 mb-3">
          <Clock className="h-4 w-4 mr-2" />
          <span className="text-sm">Posted {job.postedDate}</span>
        </div>

        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{job.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {job.skills.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {skill}
            </Badge>
          ))}
          {job.skills.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{job.skills.length - 3} more
            </Badge>
          )}
        </div>

        <Button onClick={() => onViewDetails(job)} className="w-full bg-blue-600 hover:bg-blue-700">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;