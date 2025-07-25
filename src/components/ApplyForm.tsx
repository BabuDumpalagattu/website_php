import { useState } from "react";

const ApplyForm = ({ jobId }: { jobId: number }) => {
  const [formData, setFormData] = useState({
    job_id: jobId,
    full_name: "",
    mobile: "",
    email: "",
    notice_period: "",
    experience: "",
    current_salary: "",
    expected_salary: "",
    qualification: "",
    preferred_location: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("https://careers.clahantechnologies.com/api/submit_application.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      {[
        { label: "Full Name", name: "full_name" },
        { label: "Mobile", name: "mobile" },
        { label: "Email", name: "email" },
        { label: "Notice Period", name: "notice_period" },
        { label: "Experience", name: "experience" },
        { label: "Current Salary", name: "current_salary" },
        { label: "Expected Salary", name: "expected_salary" },
        { label: "Qualification", name: "qualification" },
        { label: "Preferred Location", name: "preferred_location" },
      ].map((field) => (
        <div key={field.name}>
          <label className="block">{field.label}</label>
          <input
            type="text"
            name={field.name}
            value={(formData as any)[field.name]}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
      ))}

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit Application
      </button>

      {status === "success" && <p className="text-green-500">Submitted successfully!</p>}
      {status === "error" && <p className="text-red-500">Submission failed. Try again.</p>}
    </form>
  );
};

export default ApplyForm;
