<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

require_once __DIR__ . '/../config/db.php';

$conn = new mysqli($host, $user, $pass, $dbname);
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Database connection failed"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

// Validate required fields
$required = ['name', 'mobile', 'email', 'course', 'qualification', 'preferred'];
foreach ($required as $field) {
    if (empty($data[$field])) {
        echo json_encode(["success" => false, "message" => "Missing field: $field"]);
        exit;
    }
}

// Sanitize inputs
$name = $conn->real_escape_string($data['name']);
$mobile = $conn->real_escape_string($data['mobile']);
$email = $conn->real_escape_string($data['email']);
$course = $conn->real_escape_string($data['course']);
$qualification = $conn->real_escape_string($data['qualification']);
$preferred = $conn->real_escape_string($data['preferred']);

// Check for existing email or mobile individually
$checkQuery = "SELECT email, mobile FROM enrollments WHERE email = ? OR mobile = ?";
$checkStmt = $conn->prepare($checkQuery);
$checkStmt->bind_param("ss", $email, $mobile);
$checkStmt->execute();
$result = $checkStmt->get_result();

$emailExists = false;
$mobileExists = false;

while ($row = $result->fetch_assoc()) {
    if ($row['email'] === $email) $emailExists = true;
    if ($row['mobile'] === $mobile) $mobileExists = true;
}

if ($emailExists && $mobileExists) {
    echo json_encode(["success" => false, "message" => "Both email and mobile number already exist"]);
    exit;
} elseif ($emailExists) {
    echo json_encode(["success" => false, "message" => "Email already exists"]);
    exit;
} elseif ($mobileExists) {
    echo json_encode(["success" => false, "message" => "Mobile number already exists"]);
    exit;
}

// Insert into database
$insert = $conn->prepare("INSERT INTO enrollments (name, mobile, email, course, qualification, preferred_mode) VALUES (?, ?, ?, ?, ?, ?)");
$insert->bind_param("ssssss", $name, $mobile, $email, $course, $qualification, $preferred);

if ($insert->execute()) {
    echo json_encode(["success" => true, "message" => "Enrollment successful"]);
} else {
    echo json_encode(["success" => false, "message" => "Database insert failed"]);
}

$conn->close();
?>
