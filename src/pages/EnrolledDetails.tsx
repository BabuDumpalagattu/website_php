import { useEffect, useState } from 'react';

interface EnrollData {
  id: string;
  name: string;
  mobile: string;
  email: string;
  course: string;
  qualification: string;
  preferred_mode: string;
  submitted_at: string;
}

const EnrolledDetails = () => {
  const [enrollments, setEnrollments] = useState<EnrollData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://clahantechnologies.com/api/get_enrollments.php')
      .then(res => res.json())
      .then(data => {
        setEnrollments(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching enrollments:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Enrolled Students</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="py-3 px-4">S.No</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Mobile</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Course</th>
                <th className="py-3 px-4">Qualification</th>
                <th className="py-3 px-4">Preferred</th>
                <th className="py-3 px-4">Submitted At</th>
              </tr>
            </thead>
            <tbody>
              {enrollments.map((entry, index) => (
                <tr key={entry.id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{entry.name}</td>
                  <td className="py-2 px-4">{entry.mobile}</td>
                  <td className="py-2 px-4">{entry.email}</td>
                  <td className="py-2 px-4">{entry.course}</td>
                  <td className="py-2 px-4">{entry.qualification}</td>
                  <td className="py-2 px-4">{entry.preferred_mode}</td>
                  <td className="py-2 px-4">{new Date(entry.submitted_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EnrolledDetails;
