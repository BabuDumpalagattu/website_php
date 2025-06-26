<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require_once __DIR__ . '/../config/db.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!$data || !isset($data['id'])) {
  echo json_encode(["success" => false, "message" => "Missing job ID"]);
  exit;
}

$id = (int)$data['id'];
$title = $data['title'] ?? '';
$company = $data['company'] ?? '';
$location = $data['location'] ?? '';
$type = $data['type'] ?? '';
$position = $data['position'] ?? '';
$experience = $data['experience'] ?? '';
$openings = (int)($data['openings'] ?? 0);
$salary_range = $data['salary'] ?? '';
$description = $data['description'] ?? '';
$skills = json_encode($data['skills'] ?? []);
$contact_email = $data['contactEmail'] ?? '';
$contact_phone  = $data['contactPhone'] ?? '';

// Prepare the SQL
$sql = "UPDATE jobs SET title=?, company=?, location=?, type=?, position=?, experience=?, openings=?, salary_range=?, description=?, skills=?, contact_email=?, contact_phone =? WHERE id=?";



$stmt = $conn->prepare($sql);

if (!$stmt) {
  echo json_encode(["success" => false, "message" => "Statement prepare failed", "error" => $conn->error]);
  exit;
}

$stmt->bind_param(
  "ssssssisssssi",
  $title,
  $company,
  $location,
  $type,
  $position,
  $experience,
  $openings,
  $salary,
  $description,
  $skills,
  $email,
  $phone,
  $id
);

$success = $stmt->execute();

if ($success) {
  echo json_encode(["success" => true]);
} else {
  echo json_encode(["success" => false, "message" => "Execution failed", "error" => $stmt->error]);
}
