<?php
// login.php

// Thêm tiêu đề CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS"); // Cho phép phương thức POST và OPTIONS
header("Access-Control-Allow-Headers: Content-Type"); // Cho phép tiêu đề Content-Type

// Kết nối tới cơ sở dữ liệu
include 'db_connection.php'; // Đảm bảo rằng db_connection.php nằm trong cùng thư mục

// Nhận dữ liệu từ yêu cầu POST
$data = json_decode(file_get_contents("php://input"));

// Ghi dữ liệu vào stderr để kiểm tra
file_put_contents('php://stderr', print_r($data, true)); // Ghi dữ liệu vào stderr

if (!$data) {
    echo json_encode(['success' => false, 'error' => 'Không nhận được dữ liệu.']);
    exit;
}

$username = $data->username ?? null; // Sử dụng toán tử null coalescing
$password = $data->password ?? null;

if ($username === null || $password === null) {
    echo json_encode(['success' => false, 'error' => 'Thiếu thông tin đăng nhập.']);
    exit;
}

// Kiểm tra thông tin đăng nhập
$stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username"); // Thay đổi từ email thành username
$stmt->execute(['username' => $username]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user) {
    if ($user['password']==$password) { // Sử dụng password_verify nếu mật khẩu được mã hóa
        echo json_encode(['success' => true, 'message' => 'Đăng nhập thành công!']);
    } else {
        echo json_encode(['success' => false, 'error' => 'Mật khẩu không chính xác.']);
    }
} else {
    echo json_encode(['success' => false, 'error' => 'Người dùng không tồn tại.']);
}
?>