// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { MapPin, Clock, Building, Mail, Phone, IndianRupeeIcon } from "lucide-react";
// import { Job } from "@/types/job";

// interface JobModalProps {
//   job: Job | null;
//   isOpen: boolean;
//   onClose: () => void;
// }

// const JobModal = ({ job, isOpen, onClose }: JobModalProps) => {
//   if (!job) return null;
// console.log(job.description);
//   const skillsArray =
//     Array.isArray(job.skills) && typeof job.skills[0] === "string"
//       ? job.skills
//       : [];

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
//         <DialogHeader>
//           <DialogTitle className="text-2xl font-bold text-gray-900">{job.title}</DialogTitle>
//         </DialogHeader>

//         <div className="space-y-6">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center text-gray-600">
//               <Building className="h-5 w-5 mr-2" />
//               <span className="text-lg font-medium">{job.company}</span>
//             </div>
//             <Badge variant={job.type === "Full-time" ? "default" : "secondary"}>
//               {job.type}
//             </Badge>
//           </div>

//           {(job.position || job.openings) && (
//             <div className="text-gray-600 ml-[26px]">
//               {job.position && <span>Position: {job.position}</span>}
//               {Number(job.openings) && (
//                 <span className="ml-2 text-sm text-gray-500">
//                   ({Number(job.openings)} openings)
//                 </span>
//               )}
//             </div>
//           )}

//           {job.experience && (
//             <div className="text-gray-600 ml-[26px]">
//               Experience: {job.experience} years
//             </div>
//           )}

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="flex items-center text-gray-600">
//               <MapPin className="h-5 w-5 mr-2" />
//               <span>{job.location}</span>
//             </div>
//             <div className="flex items-center text-gray-600">
//               <IndianRupeeIcon className="h-5 w-5 mr-2" />
//               <span>{job.salary.replace('-', ' – ')} LPA</span>
//             </div>
//             <div className="flex items-center text-gray-600">
//               <Clock className="h-5 w-5 mr-2" />
//               <span>Posted {job.postedDate}</span>
//             </div>
//           </div>

//           <div>
//            <h3 className="text-lg font-semibold mb-3">Job Description</h3>
// <pre className="text-gray-700 leading-relaxed whitespace-pre-wrap">
//   {job.description.replace(/\\n/g, '\n')}
// </pre>
            

//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-3">Required Skills</h3>
//             <div className="flex flex-wrap gap-2">
//               {skillsArray.length > 0 ? (
//                 skillsArray.map((skill, index) => (
//                   <Badge key={index} variant="outline">
//                     {skill}
//                   </Badge>
//                 ))
//               ) : (
//                 <span className="text-gray-500">Not specified</span>
//               )}
//             </div>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
//             <div className="space-y-2">
//               <div className="flex items-center text-gray-600">
//                 <Mail className="h-4 w-4 mr-2" />
//                 <span>{job.contactEmail || "Not provided"}</span>
//               </div>
//               <div className="flex items-center text-gray-600">
//                 <Phone className="h-4 w-4 mr-2" />
//                 <span>{job.contactPhone || "Not provided"}</span>
//               </div>
//             </div>
//           </div>

//           <div className="flex gap-3 pt-4">
//             <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
//               Apply Now
//             </Button>
//             <Button variant="outline" className="flex-1">
//               Save Job
//             </Button>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default JobModal;

// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { MapPin, Clock, Building, Mail, Phone, IndianRupeeIcon } from "lucide-react";
// import { Job } from "@/types/job";

// interface JobModalProps {
//   job: Job | null;
//   isOpen: boolean;
//   onClose: () => void;
// }

// const JobModal = ({ job, isOpen, onClose }: JobModalProps) => {
//   if (!job) return null;

//   console.log(job.description);

//   const skillsArray =
//     Array.isArray(job.skills) && typeof job.skills[0] === "string"
//       ? job.skills
//       : [];

//   // Safe replace function to avoid errors
//   const safeReplace = (
//     str: string | null | undefined,
//     pattern: RegExp | string,
//     replacement: string
//   ): string => {
//     return typeof str === "string" ? str.replace(pattern, replacement) : "";
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
//         <DialogHeader>
//           <DialogTitle className="text-2xl font-bold text-gray-900">{job.title}</DialogTitle>
//         </DialogHeader>

//         <div className="space-y-6">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center text-gray-600">
//               <Building className="h-5 w-5 mr-2" />
//               <span className="text-lg font-medium">{job.company}</span>
//             </div>
//             <Badge variant={job.type === "Full-time" ? "default" : "secondary"}>
//               {job.type}
//             </Badge>
//           </div>

//           {(job.position || job.openings) && (
//             <div className="text-gray-600 ml-[26px]">
//               {job.position && <span>Position: {job.position}</span>}
//               {Number(job.openings) && (
//                 <span className="ml-2 text-sm text-gray-500">
//                   ({Number(job.openings)} openings)
//                 </span>
//               )}
//             </div>
//           )}

//           {job.experience && (
//             <div className="text-gray-600 ml-[26px]">
//               Experience: {job.experience} years
//             </div>
//           )}

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="flex items-center text-gray-600">
//               <MapPin className="h-5 w-5 mr-2" />
//               <span>{job.location}</span>
//             </div>
//             <div className="flex items-center text-gray-600">
//               <IndianRupeeIcon className="h-5 w-5 mr-2" />
//               <span>{job.salary ? safeReplace(job.salary, '-', ' – ') + ' LPA' : "Not specified"}</span>
//             </div>
//             <div className="flex items-center text-gray-600">
//               <Clock className="h-5 w-5 mr-2" />
//               <span>Posted {job.postedDate}</span>
//             </div>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-3">Job Description</h3>
//             <pre className="text-gray-700 leading-relaxed whitespace-pre-wrap">
//               {job.description ? safeReplace(job.description, /\\n/g, '\n') : "No description provided"}
//             </pre>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-3">Required Skills</h3>
//             <div className="flex flex-wrap gap-2">
//               {skillsArray.length > 0 ? (
//                 skillsArray.map((skill, index) => (
//                   <Badge key={index} variant="outline">
//                     {skill}
//                   </Badge>
//                 ))
//               ) : (
//                 <span className="text-gray-500">Not specified</span>
//               )}
//             </div>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
//             <div className="space-y-2">
//               <div className="flex items-center text-gray-600">
//                 <Mail className="h-4 w-4 mr-2" />
//                 <span>{job.contactEmail || "Not provided"}</span>
//               </div>
//               <div className="flex items-center text-gray-600">
//                 <Phone className="h-4 w-4 mr-2" />
//                 <span>{job.contactPhone || "Not provided"}</span>
//               </div>
//             </div>
//           </div>

//           <div className="flex gap-3 pt-4">
//             <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
//               Apply Now
//             </Button>
//             <Button variant="outline" className="flex-1">
//               Save Job
//             </Button>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default JobModal;
// import React, { useState } from "react";
// import { Dialog, DialogContent } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { toast } from "sonner";
// import { Job } from "@/types/job";

// interface JobModalProps {
//   job: Job | null;
//   isOpen: boolean;
//   onClose: () => void;
// }

// const JobModal: React.FC<JobModalProps> = ({ job, isOpen, onClose }) => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     mobile: "",
//     email: "",
//     noticePeriod: "",
//     experience: "",
//     currentSalary: "",
//     expectedSalary: "",
//     qualification: "",
//     preferredLocation: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     if (!job?.id) {
//       toast.error("Job ID is missing");
//       return;
//     }

//     const payload = { ...formData, jobId: job.id };

//     try {
//       const response = await fetch("hhttps://clahantechnologies.com/api/get_jobs.php", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const data = await response.json();

//       if (data.success) {
//         toast.success("Application submitted successfully");
//         setFormData({
//           fullName: "",
//           mobile: "",
//           email: "",
//           noticePeriod: "",
//           experience: "",
//           currentSalary: "",
//           expectedSalary: "",
//           qualification: "",
//           preferredLocation: "",
//         });
//         onClose();
//       } else {
//         toast.error(data.message || "Submission failed");
//       }
//     } catch (error) {
//       toast.error("Something went wrong. Please try again.");
//     }
//   };

//   if (!job) return null;

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="max-w-4xl overflow-y-auto max-h-screen">
//         <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
//         <p className="text-gray-700 mb-2">{job.company}</p>
//         <p className="text-sm text-gray-500 mb-4">{job.location} | {job.type}</p>
//         <div className="whitespace-pre-wrap text-sm text-gray-800 mb-4">
//           {job.description}
//         </div>

//         {/* Skills */}
//         <div className="mb-4">
//           <h3 className="font-semibold mb-2">Required Skills</h3>
//           <div className="flex flex-wrap gap-2">
//             {job.skills.map((skill, idx) => (
//               <Badge key={idx} variant="outline">{skill}</Badge>
//             ))}
//           </div>
//         </div>

//         {/* Application Form */}
//         <div className="mt-6 bg-gray-50 p-4 rounded-lg border">
//           <h3 className="text-lg font-semibold mb-4">Apply Now</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <Input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
//             <Input name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required />
//             <Input name="email" type="email" placeholder="Email ID" value={formData.email} onChange={handleChange} required />
//             <Input name="noticePeriod" placeholder="Notice Period" value={formData.noticePeriod} onChange={handleChange} />
//             <Input name="experience" placeholder="Experience" value={formData.experience} onChange={handleChange} />
//             <Input name="currentSalary" placeholder="Current Salary" value={formData.currentSalary} onChange={handleChange} />
//             <Input name="expectedSalary" placeholder="Expected Salary" value={formData.expectedSalary} onChange={handleChange} />
//             <Input name="qualification" placeholder="Highest Qualification" value={formData.qualification} onChange={handleChange} />
//             <Input name="preferredLocation" placeholder="Preferred Location" value={formData.preferredLocation} onChange={handleChange} />
//           </div>
//           <div className="mt-4 text-right">
//             <Button onClick={handleSubmit} className="bg-blue-600 text-white hover:bg-blue-700">
//               Submit Application
//             </Button>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default JobModal;
// import React, { useState } from "react";
// import { Dialog, DialogContent } from "@/components/ui/dialog";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { toast } from "sonner";
// import { Job } from "@/types/job";
// import { Calendar, MapPin, Briefcase, IndianRupee } from "lucide-react";

// interface JobModalProps {
//   job: Job | null;
//   isOpen: boolean;
//   onClose: () => void;
// }

// const JobModal: React.FC<JobModalProps> = ({ job, isOpen, onClose }) => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     mobile: "",
//     email: "",
//     noticePeriod: "",
//     experience: "",
//     currentSalary: "",
//     expectedSalary: "",
//     qualification: "",
//     preferredLocation: "",
    
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     if (!job?.id) {
//       toast.error("Job ID is missing");
//       return;
//     }

//     const payload = { ...formData, jobId: job.id };

//     try {
//       const response = await fetch("https://clahantechnologies.com/api/submit_application.php", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const data = await response.json();

//       if (data.success) {
//         toast.success("Application submitted successfully");
//         setFormData({
//           fullName: "",
//           mobile: "",
//           email: "",
//           noticePeriod: "",
//           experience: "",
//           currentSalary: "",
//           expectedSalary: "",
//           qualification: "",
//           preferredLocation: "",
//         });
//         onClose();
//       } else {
//         toast.error(data.message || "Submission failed");
//       }
//     } catch (error) {
//       toast.error("Something went wrong. Please try again.");
//     }
//   };

//   if (!job) return null;

//   return (
//     <Dialog open={isOpen} onOpenChange={onClose}>
//       <DialogContent className="max-w-5xl overflow-y-auto max-h-[90vh]">
//         <div>
//           <h2 className="text-2xl font-bold mb-1">{job.title}</h2>
//           <p className="text-gray-700 font-medium">{job.company}</p>

//           <div className="text-sm text-gray-500 flex flex-wrap gap-4 my-2">
//             <span className="flex items-center gap-1">
//               <Briefcase className="w-4 h-4" />
//               {job.experience}
//             </span>
//             <span className="flex items-center gap-1">
//               <MapPin className="w-4 h-4" />
//               {job.location}
//             </span>
//             <span className="flex items-center gap-1">
//               <IndianRupee className="w-4 h-4" />
//               {job.salary || "Not specified"}
//             </span>
//             <span className="flex items-center gap-1">
//               <Calendar className="w-4 h-4" />
//               {/* Posted {new Date(job.created_at).toLocaleString("en-IN")} */}
//            Posted {new Date(job.created_at).toLocaleString("en-IN")}


//             </span>
//           </div>

//           <hr className="my-3" />

//           <div>
//             <h3 className="font-semibold mb-1">Job Description</h3>
//             <p className="whitespace-pre-line text-gray-800 text-sm">
//   {job.description.replace(/\\n/g, '\n').replace(/\\'/g, "'")}
// </p>
//           </div>

//           {job.skills?.length > 0 && (
//             <div className="mt-4">
//               <h3 className="font-semibold mb-2">Required Skills</h3>
//               <div className="flex flex-wrap gap-2">
//                 {job.skills.map((skill, idx) => (
//                   <Badge key={idx} variant="outline">
//                     {skill}
//                   </Badge>
//                 ))}
//               </div>
//             </div>
//           )}

//           <div className="mt-6 bg-gray-100 p-4 rounded-lg border">
//             <h3 className="text-lg font-semibold mb-4">Apply Now</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <Input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
//               <Input name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} />
//               <Input name="email" type="email" placeholder="Email ID" value={formData.email} onChange={handleChange} />
//               <Input name="noticePeriod" placeholder="Notice Period" value={formData.noticePeriod} onChange={handleChange} />
//               <Input name="experience" placeholder="Experience" value={formData.experience} onChange={handleChange} />
//               <Input name="currentSalary" placeholder="Current Salary" value={formData.currentSalary} onChange={handleChange} />
//               <Input name="expectedSalary" placeholder="Expected Salary" value={formData.expectedSalary} onChange={handleChange} />
//               <Input name="qualification" placeholder="Highest Qualification" value={formData.qualification} onChange={handleChange} />
//               <Input name="preferredLocation" placeholder="Preferred Location" value={formData.preferredLocation} onChange={handleChange} />
//             </div>
//             <div className="mt-4 text-right">
//               <Button onClick={handleSubmit} className="bg-blue-600 text-white hover:bg-blue-700">
//                 Submit Application
//               </Button>
//             </div>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default JobModal;


import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Calendar, IndianRupee, MapPin } from "lucide-react";
import { Job } from "@/types/job";


interface JobModalProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
}

const JobModal: React.FC<JobModalProps> = ({ job, isOpen, onClose }) => {
  const [formData, setFormData] = useState<any>({
    fullName: "",
    mobile: "",
    email: "",
    noticePeriod: "",
    experience: "",
    currentSalary: "",
    expectedSalary: "",
    qualification: "",
    preferredLocation: "",
    resume: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (name === "resume" && files) {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async () => {
    if (!job?.id || !formData.resume) {
      toast.error("Please complete the form and attach your resume.");
      return;
    }

    const payload = new FormData();
    payload.append("jobId", job.id.toString());
    payload.append("fullName", formData.fullName);
    payload.append("mobile", formData.mobile);
    payload.append("email", formData.email);
    payload.append("noticePeriod", formData.noticePeriod);
    payload.append("experience", formData.experience);
    payload.append("currentSalary", formData.currentSalary);
    payload.append("expectedSalary", formData.expectedSalary);
    payload.append("qualification", formData.qualification);
    payload.append("preferredLocation", formData.preferredLocation);
    payload.append("resume", formData.resume);

    try {
      const response = await fetch("https://clahantechnologies.com/api/submit_application.php", {
        method: "POST",
        body: payload,
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Application submitted successfully");
        setFormData({
          fullName: "",
          mobile: "",
          email: "",
          noticePeriod: "",
          experience: "",
          currentSalary: "",
          expectedSalary: "",
          qualification: "",
          preferredLocation: "",
          resume: null,
        });
        onClose();
      } else {
        toast.error(data.message || "Submission failed");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  if (!job) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl overflow-y-auto max-h-screen">
        <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
        <p className="text-gray-700 mb-2">{job.company}</p>
        <p className="text-sm text-gray-500 mb-4">{job.location} | {job.type}</p>

        <div className="flex items-center gap-1 mb-2">
          <MapPin className="w-4 h-4" /> {job.location}
        </div>
        <div className="flex items-center gap-1 mb-2">
          <IndianRupee className="w-4 h-4" /> {job.salary || "Not specified"}
        </div>
        <div className="flex items-center gap-1 mb-4">
          <Calendar className="w-4 h-4" />
          Posted {new Date(job.postedDate).toLocaleString("en-IN")}
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Job Description</h3>
         
          <p className="whitespace-pre-line text-gray-800 text-sm">  {job.description.replace(/\\n/g, '\n').replace(/\\'/g, "'")} </p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Required Skills</h3>
          <div className="flex flex-wrap gap-2">
            {job.skills.map((skill, idx) => (
              <Badge key={idx} variant="outline">{skill}</Badge>
            ))}
          </div>
        </div>

        <div className="mt-6 bg-gray-50 p-4 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">Apply Now</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
            <Input name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required />
            <Input name="email" type="email" placeholder="Email ID" value={formData.email} onChange={handleChange} required />
            <Input name="noticePeriod" placeholder="Notice Period in Days" value={formData.noticePeriod} onChange={handleChange} />
            <Input name="experience" placeholder="Experience in Years" value={formData.experience} onChange={handleChange} />
            <Input name="currentSalary" placeholder="Current Salary LPA" value={formData.currentSalary} onChange={handleChange} />
            <Input name="expectedSalary" placeholder="Expected Salary LPA" value={formData.expectedSalary} onChange={handleChange} />
            <Input name="qualification" placeholder="Highest Qualification" value={formData.qualification} onChange={handleChange} />
            <Input name="preferredLocation" placeholder="Preferred Location" value={formData.preferredLocation} onChange={handleChange} />
            {/* <Input type="file" name="resume" placeholder="Resume" accept=".pdf,.doc,.docx" onChange={handleChange} /> */}
            <div className="md:col-span-2">
  <label className="block text-gray-700 font-medium mb-1">Upload Resume</label>
  <Input
    type="file"
    name="resume"
    accept=".pdf,.doc,.docx"
    onChange={handleChange}
    className="cursor-pointer"
  />
  {formData.resume && (
    <p className="text-sm text-gray-600 mt-1">Selected file: {formData.resume.name}</p>
  )}
</div>
          </div>
          <div className="mt-4 text-right">
            <Button onClick={handleSubmit} className="bg-blue-600 text-white hover:bg-blue-700">
              Submit Application
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JobModal;
