<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require_once __DIR__ . '/../config/db.php';

$baseResumeUrl = "https://clahantechnologies.com/uploads/resumes/"; // ✅ Corrected path casing to match server folder

$sql = "SELECT 
            a.id,
            a.job_id AS jobId,
            a.full_name AS fullName,
            a.mobile,
            a.email,
            a.notice_period AS noticePeriod,
            a.experience,
            a.current_salary AS currentSalary,
            a.expected_salary AS expectedSalary,
            a.qualification,
            a.preferred_location AS preferredLocation,
            a.resume_path,
            a.applied_at,
            CONCAT('$baseResumeUrl', a.resume_path) AS resume_url,
            j.title AS jobTitle, 
            j.company, 
            j.location, 
            j.type, 
            j.position, 
            j.experience AS job_experience, 
            j.openings, 
            j.salary_range
        FROM job_applications a
        JOIN jobs j ON a.job_id = j.id
        ORDER BY a.id DESC";

$result = $conn->query($sql);

if (!$result) {
    http_response_code(500);
    echo json_encode([
        "status" => "error", 
        "message" => "Query failed", 
        "error" => $conn->error
    ]);
    exit();
}

$applications = [];
while ($row = $result->fetch_assoc()) {
    $applications[] = $row;
}

echo json_encode($applications);
$conn->close();
?>
