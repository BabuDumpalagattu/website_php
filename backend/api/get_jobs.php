<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require_once __DIR__ . '/../config/db.php';

$conn = new mysqli($host, $user, $pass, $dbname);
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Database connection failed"]);
    exit;
}

$sql = "SELECT 
    id, 
    title, 
    company, 
    location, 
    type, 
    position,
    experience,
    openings,
    salary_range AS salary, 
    description, 
    skills, 
    contact_email AS contactEmail, 
    contact_phone AS contactPhone, 
    posted_at AS postedDate 
    FROM jobs 
    ORDER BY posted_at DESC";

$result = $conn->query($sql);
$jobs = [];

if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        // Normalize skills
        $skillsRaw = $row['skills'] ?? '';
        $skillsTrimmed = trim($skillsRaw);
        if (str_starts_with($skillsTrimmed, '[')) {
            $decodedSkills = json_decode($skillsTrimmed, true);
            $row['skills'] = is_array($decodedSkills) ? $decodedSkills : [$skillsRaw];
        } else {
            $row['skills'] = array_filter(array_map('trim', explode(',', $skillsRaw)));
        }

        // Normalize experience and openings
        $row['experience'] = isset($row['experience']) ? (int)$row['experience'] : 0;
        $row['openings'] = isset($row['openings']) ? (int)$row['openings'] : 0;

        $jobs[] = $row;
    }
}

echo json_encode($jobs);
$conn->close();
