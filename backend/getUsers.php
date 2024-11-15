<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include 'db_connection.php';

// Truy vấn dữ liệu từ bảng users
$stmt = $pdo->prepare("SELECT * FROM users"); // Lấy tất cả người dùng
$stmt->execute();
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$user) {
    echo json_encode(['success' => false, 'error' => 'Không tìm thấy người dùng.']);
    exit;
}

// Trả về dữ liệu dưới dạng JSON
echo json_encode(['success' => true, 'data' => $user]); // Trả về tên người dùng
?>