<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Include database connection
require_once __DIR__ . '/../../config/db.php';

// Query to fetch all contacts
$sql = "SELECT * FROM contacts ORDER BY date ";
$result = $conn->query($sql);

if (!$result) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Database query failed"]);
    exit();
}

$messages = [];
while ($row = $result->fetch_assoc()) {
    $messages[] = $row;
}

// Return JSON array of messages
echo json_encode($messages);
