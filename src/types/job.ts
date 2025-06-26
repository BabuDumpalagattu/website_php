export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  skills: string[];
  postedDate: string;
  contactEmail: string;
  contactPhone: string;
  position?: string;       // newly added field
  experience?: string;
  positionsAvailable?: string;
     // newly added field
}
