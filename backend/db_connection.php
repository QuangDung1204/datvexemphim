<?php
// db_connection.php

$host = 'localhost';
$db = 'webdatvexemphim'; // Tên cơ sở dữ liệu
$user = 'root'; // Tên người dùng MySQL
$pass = ''; // Mật khẩu của người dùng MySQL

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo 'Kết nối thất bại: ' . $e->getMessage();
}
?>