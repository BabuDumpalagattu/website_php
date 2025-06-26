<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require_once __DIR__ . '/../config/db.php';

$data = json_decode(file_get_contents("php://input"), true);
if (!isset($data['id'])) {
  echo json_encode(["success" => false, "message" => "Missing job ID"]);
  exit;
}

$id = intval($data['id']);
$stmt = $conn->prepare("DELETE FROM jobs WHERE id = ?");
$stmt->bind_param("i", $id);
$success = $stmt->execute();

echo json_encode(["success" => $success]);
?>
