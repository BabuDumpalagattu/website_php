<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require_once __DIR__ . '/../config/db.php';

$sql = "SELECT * FROM enrollments ORDER BY submitted_at DESC";
$result = $conn->query($sql);

if (!$result) {
  http_response_code(500);
  echo json_encode(["status" => "error", "message" => "Database query failed"]);
  exit();
}

$enrollments = [];
while ($row = $result->fetch_assoc()) {
  $enrollments[] = $row;
}

echo json_encode($enrollments);
$conn->close();
?>
