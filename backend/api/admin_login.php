<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

// Include database connection
require_once __DIR__ . '/../../config/db.php';

$conn = new mysqli($host, $user, $pass, $dbname);
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "DB Connection failed"]);
    exit;
}

// Get input data
$data = json_decode(file_get_contents("php://input"));
$email = $data->email ?? '';
$password = $data->password ?? '';

if (!$email || !$password) {
    echo json_encode(["success" => false, "message" => "Missing credentials"]);
    exit;
}

// Query the database for the user
$sql = "SELECT * FROM admin_users WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($row = $result->fetch_assoc()) {
    // ✅ Hashed password verification
    if (password_verify($password, $row['password'])) {
        echo json_encode(["success" => true, "email" => $row['email']]);
    } else {
        echo json_encode(["success" => false, "message" => "Invalid password"]);
    }

    // ❌ Use this only if you stored password in plain text (NOT RECOMMENDED)
//     if ($password === $row['password']) {
//         echo json_encode(["success" => true, "email" => $row['email']]);
//     } else {
//         echo json_encode(["success" => false, "message" => "Invalid password"]);
//     }
// } else {
//     echo json_encode(["success" => false, "message" => "User not found"]);
}

$conn->close();
?>
