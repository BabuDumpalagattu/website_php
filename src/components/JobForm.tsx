
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { Job } from "@/types/job";

interface JobFormProps {
  onSubmit: (job: Job) => void;
  initialData?: Job;
  isEditing?: boolean;
}

const JobForm = ({ onSubmit, initialData, isEditing = false }: JobFormProps) => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "",
    salary: "",
    description: "",
    contactEmail: "",
    contactPhone: "",
    skills: [] as string[],
    position: "",
    experience: "",
    positionsAvailable: "",
  });

  const [skillInput, setSkillInput] = useState("");

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || "",
        company: initialData.company || "",
        location: initialData.location || "",
        type: initialData.type || "",
        salary: initialData.salary || "",
        description: initialData.description || "",
        contactEmail: initialData.contactEmail || "",
        contactPhone: initialData.contactPhone || "",
        skills: initialData.skills || [],
        position: initialData.position || "",
        experience: initialData.experience || "",
        positionsAvailable: initialData.openings?.toString() || "",
      });
    }
  }, [initialData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload: any = {
      title: formData.title,
      company: formData.company,
      location: formData.location,
      type: formData.type,
      position: formData.position,
      experience: isNaN(Number(formData.experience)) ? "" : formData.experience,
      openings: Number(formData.positionsAvailable),
      salaryRange: formData.salary,
      description: formData.description,
      skills: formData.skills,
      contactEmail: formData.contactEmail,
      contactPhone: formData.contactPhone,
    };

    if (isEditing) {
      payload.id = initialData?.id;
      payload.postedDate = initialData?.postedDate;
    }

    try {
      const response = await fetch(
        isEditing
          ? "https://clahantechnologies.com/api/update_job.php"
          : "https://clahantechnologies.com/api/post_job.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();
      if (result.success) {
        const submittedJob: Job = {
          id: isEditing ? payload.id : result.id || Date.now().toString(),
          postedDate: isEditing ? payload.postedDate : result.postedDate || new Date().toISOString(),
          ...payload,
          salary: payload.salaryRange,
        };

        onSubmit(submittedJob);

        if (!isEditing) {
          setFormData({
            title: "",
            company: "",
            location: "",
            type: "",
            salary: "",
            description: "",
            contactEmail: "",
            contactPhone: "",
            skills: [],
            position: "",
            experience: "",
            positionsAvailable: "",
          });
          setSkillInput("");
        }
      } else {
        alert("Something went wrong: " + result.message);
      }
    } catch (error) {
      alert("Error submitting job");
    }
  };

  const addSkill = () => {
    if (skillInput.trim() && !formData.skills.includes(skillInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, skillInput.trim()],
      }));
      setSkillInput("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          {isEditing ? "Edit Job" : "Post a New Job"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">Job Title *</Label>
              <Input id="title" value={formData.title} onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))} required />
            </div>
            <div>
              <Label htmlFor="company">Company *</Label>
              <Input id="company" value={formData.company} onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))} required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="location">Location *</Label>
              <Input id="location" value={formData.location} onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))} required />
            </div>
            <div>
              <Label htmlFor="type">Job Type *</Label>
              <Select value={formData.type} onValueChange={(value) => setFormData((prev) => ({ ...prev, type: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select job type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Full-time">Full-time</SelectItem>
                  <SelectItem value="Part-time">Part-time</SelectItem>
                  <SelectItem value="Contract">Contract</SelectItem>
                  <SelectItem value="Freelance">Freelance</SelectItem>
                  <SelectItem value="Internship">Internship</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="position">Job Position</Label>
              <Input id="position" value={formData.position} onChange={(e) => setFormData((prev) => ({ ...prev, position: e.target.value }))} />
            </div>
            <div>
              <Label htmlFor="experience">Years of Experience</Label>
              <Input id="experience" type="number" min="0" value={formData.experience} onChange={(e) => setFormData((prev) => ({ ...prev, experience: e.target.value }))} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="positionsAvailable">Available Positions</Label>
              <Input id="positionsAvailable" type="number" min="1" value={formData.positionsAvailable} onChange={(e) => setFormData((prev) => ({ ...prev, positionsAvailable: e.target.value }))} />
            </div>
            <div>
              <Label htmlFor="salary">Salary Range</Label>
              <Input id="salary" value={formData.salary} onChange={(e) => setFormData((prev) => ({ ...prev, salary: e.target.value }))} />
            </div>
          </div>

          <div>
            <Label htmlFor="description">Job Description</Label>
            <Textarea id="description" value={formData.description} onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))} rows={5} />
          </div>

          <div>
            <Label htmlFor="skills">Required Skills</Label>
            <div className="flex gap-2 mb-2">
              <Input id="skills" value={skillInput} onChange={(e) => setSkillInput(e.target.value)} onKeyPress={handleKeyPress} placeholder="Add a skill and press Enter" />
              <Button type="button" onClick={addSkill} variant="outline">Add</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="flex items-center gap-1">
                  {skill}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => removeSkill(skill)} />
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="contactEmail">Contact Email</Label>
              <Input id="contactEmail" type="email" value={formData.contactEmail} onChange={(e) => setFormData((prev) => ({ ...prev, contactEmail: e.target.value }))} />
            </div>
            <div>
              <Label htmlFor="contactPhone">Contact Phone</Label>
              <Input id="contactPhone" value={formData.contactPhone} onChange={(e) => setFormData((prev) => ({ ...prev, contactPhone: e.target.value }))} />
            </div>
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            {isEditing ? "Update Job" : "Post Job"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default JobForm;
