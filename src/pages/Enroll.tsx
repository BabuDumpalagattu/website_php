import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";

const Enroll = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    course: "",
    qualification: "",
    preferred: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://clahantechnologies.com/api/enroll_submit.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        toast({
  title: "Success!",
  description: "Enrollment submitted successfully!",
});

        setFormData({
          name: "",
          mobile: "",
          email: "",
          course: "",
          qualification: "",
          preferred: "",
        });
      } else {
        toast({
          title: "Submission Failed",
          description: data.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Header />

      <main className="min-h-screen pt-24 pb-16 px-4 bg-gray-50">
        <div className="max-w-xl mx-auto bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-green-500 text-transparent bg-clip-text">
            Enroll Now
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => {
                  const input = e.target.value;
                  if (/^[a-zA-Z\s]*$/.test(input)) {
                    setFormData({ ...formData, name: input });
                  }
                }}
                required
                className="mt-1 w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-gray-700 font-medium">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={(e) => {
                  const input = e.target.value;
                  if (/^\d{0,10}$/.test(input)) {
                    setFormData({ ...formData, mobile: input });
                  }
                }}
                maxLength={10}
                required
                className="mt-1 w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Email ID */}
            <div>
              <label className="block text-gray-700 font-medium">
                Email ID
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Course */}
            <div>
              <label className="block text-gray-700 font-medium">
                Select Course
              </label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-gray-300 rounded px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                <option value="">-- Choose a Course --</option>
                <option value="DevOps">DevOps & DevSecOps</option>
                <option value="Python">Python Programming</option>
                <option value="SQL">SQL & Database</option>
                <option value="aiops">Aiops</option>
                <option value="finops">Finops</option>
                <option value="cloudcomputing">cloud computing</option>
                <option value="aws">AWS</option>
                <option value="azure">Azure</option>
                <option value="deeplearning">Deeplearning</option>
                <option value="ai/ml">AI/ML</option>
                <option value="gcp">GCP</option>
                <option value="multicloud">multi cloud training</option>
                <option value="Cloud">Cloud Native DevOps</option>
              </select>
            </div>

            {/* Qualification */}
            <div>
              <label className="block text-gray-700 font-medium">
                Qualification
              </label>
              <input
                type="text"
                name="qualification"
                value={formData.qualification}
                onChange={(e) => {
                  const input = e.target.value;
                  if (/^[a-zA-Z\s]*$/.test(input)) {
                    setFormData({ ...formData, qualification: input });
                  }
                }}
                required
                className="mt-1 w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* Preferred Mode */}
            <div>
              <label className="block text-gray-700 font-medium">
                Preferred Mode
              </label>
              <div className="flex gap-6 mt-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="preferred"
                    value="Online"
                    onChange={handleChange}
                    checked={formData.preferred === "Online"}
                    required
                  />
                  Online
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="preferred"
                    value="Offline"
                    onChange={handleChange}
                    checked={formData.preferred === "Offline"}
                  />
                  Offline
                </label>
              </div>
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold py-2 px-4 rounded hover:opacity-90 transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Enroll;
