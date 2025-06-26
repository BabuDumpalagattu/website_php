<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Invalid request method"]);
    exit;
}

require_once __DIR__ . '/../config/db.php';

$conn = new mysqli($host, $user, $pass, $dbname);
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Database connection failed"]);
    exit;
}

$rawData = file_get_contents("php://input");
if (!$rawData) {
    echo json_encode(["success" => false, "message" => "Empty request body"]);
    exit;
}

$data = json_decode($rawData, true);
if (!is_array($data)) {
    echo json_encode(["success" => false, "message" => "Invalid JSON"]);
    exit;
}

// Required fields
$required = ['title', 'company', 'location', 'type'];
foreach ($required as $field) {
    if (empty($data[$field])) {
        echo json_encode(["success" => false, "message" => "Missing field: $field"]);
        exit;
    }
}

// Sanitize input
$title = $conn->real_escape_string($data['title']);
$company = $conn->real_escape_string($data['company']);
$location = $conn->real_escape_string($data['location']);
$type = $conn->real_escape_string($data['type']);
$position = $conn->real_escape_string($data['position'] ?? '');
$experience = $conn->real_escape_string($data['experience'] ?? '');
$openings = intval($data['openings'] ?? 0);
$salary_range = $conn->real_escape_string($data['salaryRange'] ?? '');
$description = $conn->real_escape_string($data['description'] ?? '');
$skills = $conn->real_escape_string(implode(',', $data['skills'] ?? []));
$contact_email = $conn->real_escape_string($data['contactEmail'] ?? '');
$contact_phone = $conn->real_escape_string($data['contactPhone'] ?? '');

// Insert query
$stmt = $conn->prepare("INSERT INTO jobs (title, company, location, type, position, experience, openings, salary_range, description, skills, contact_email, contact_phone) 
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

$stmt->bind_param("ssssssisssss", $title, $company, $location, $type, $position, $experience, $openings, $salary_range, $description, $skills, $contact_email, $contact_phone);

if ($stmt->execute()) {
    $insertedId = $conn->insert_id;
    $postedDate = date('Y-m-d H:i:s');
    echo json_encode([
        "success" => true,
        "id" => $insertedId,
        "postedDate" => $postedDate,
        "message" => "Job posted successfully"
    ]);
} else {
    echo json_encode(["success" => false, "message" => "Failed to post job"]);
}

$stmt->close();
$conn->close();
?>
