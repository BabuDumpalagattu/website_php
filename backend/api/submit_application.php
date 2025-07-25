<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

require_once __DIR__ . '/../config/db.php';
date_default_timezone_set('Asia/Kolkata');

$conn = new mysqli($host, $user, $pass, $dbname);
if ($conn->connect_error) {
  echo json_encode(["success" => false, "message" => "DB error"]); exit;
}

$required = ['jobId', 'fullName', 'mobile', 'email'];
foreach ($required as $field) {
  if (empty($_POST[$field])) {
    echo json_encode(["success" => false, "message" => "Missing field: $field"]); exit;
  }
}

// Resume upload
$uploadDir = "../uploads/resumes/";
if (!file_exists($uploadDir)) mkdir($uploadDir, 0755, true);

$filename = uniqid() . "_" . basename($_FILES["resume"]["name"]);
$targetPath = $uploadDir . $filename;

if (!move_uploaded_file($_FILES["resume"]["tmp_name"], $targetPath)) {
  echo json_encode(["success" => false, "message" => "Failed to upload resume"]);
  exit;
}

// Save application
$stmt = $conn->prepare("INSERT INTO job_applications (job_id, full_name, mobile, email, notice_period, experience, current_salary, expected_salary, qualification, preferred_location, resume_path, applied_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

$appliedAt = date("Y-m-d H:i:s"); // this is IST

$stmt->bind_param(
  "isssssssssss",
  $_POST['jobId'],
  $_POST['fullName'],
  $_POST['mobile'],
  $_POST['email'],
  $_POST['noticePeriod'],
  $_POST['experience'],
  $_POST['currentSalary'],
  $_POST['expectedSalary'],
  $_POST['qualification'],
  $_POST['preferredLocation'],
  $filename,
  $appliedAt
);


if ($stmt->execute()) {
  echo json_encode(["success" => true]);
} else {
  echo json_encode(["success" => false, "message" => "DB insert error"]);
}

$conn->close();
?>
