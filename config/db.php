<?php
$host = "sql113.infinityfree.com";
$user = "if0_39253112";
$pass = "Mywife2025";
$dbname = "if0_39253112_website";

$conn = new mysqli($host, $user, $pass, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
