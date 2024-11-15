import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import backgroundLogin from '../imgs/Background.jpg';

function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate(); // Khởi tạo useNavigate

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost/WebDatVeXemPhim/backend/login.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }), // Đảm bảo username và password được định nghĩa
            });

            // Kiểm tra mã trạng thái của phản hồi
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            if (data.success) {
                setLoginError(''); // Xóa thông báo lỗi nếu đăng nhập thành công
                localStorage.setItem('username', username); // Lưu tên người dùng vào local storage
                navigate('/'); // Chuyển hướng về trang chính
            } else {
                setLoginError('Tài khoản hoặc mật khẩu không đúng.'); // Hiển thị thông báo lỗi
            }
        } catch (error) {
            console.error('Lỗi:', error);
            setLoginError('Đã xảy ra lỗi trong quá trình đăng nhập.'); // Hiển thị thông báo lỗi
        }
    };

    return (
        <div>
            <div style={{
                background: `linear-gradient(to right, rgba(97, 0, 194, 0.5), rgba(25, 24, 23, 0.5)), url('${backgroundLogin}')`,
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div style={{
                    width: '400px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    backgroundColor: 'white',
                    padding: '30px',
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '20px',
                    }}>
                        <span onClick={() => setIsLogin(true)}
                            style={{
                                padding: '10px 20px',
                                cursor: 'pointer',
                                color: isLogin ? '#6200ea' : '#666',
                                borderBottom: isLogin ? '2px solid #6200ea' : 'none',
                                fontWeight: isLogin ? 'bold' : 'normal',
                                marginRight: '20px'
                            }}
                        >
                            Đăng Nhập
                        </span>
                        <span onClick={() => setIsLogin(false)} style={{
                            padding: '10px 20px',
                            cursor: 'pointer',
                            color: !isLogin ? '#6200ea' : '#666',
                            borderBottom: !isLogin ? '2px solid #6200ea' : 'none',
                            fontWeight: !isLogin ? 'bold' : 'normal'
                        }}>
                            Đăng Ký
                        </span>
                    </div>

                    {isLogin ? (
                        <form onSubmit={handleLogin}>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Tài khoản"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                    style={{
                                        width: '100%',
                                        marginBottom: '15px',
                                        padding: '12px',
                                        borderRadius: '4px',
                                        border: '1px solid #ddd'
                                    }} />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    placeholder="Mật khẩu"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    style={{
                                        width: '100%',
                                        marginBottom: '15px',
                                        padding: '12px',
                                        borderRadius: '4px',
                                        border: '1px solid #ddd'
                                    }}
                                />
                            </div>
                            <button
                                type="submit"
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    backgroundColor: '#6200ea',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontSize: '16px',
                                    fontWeight: 'bold'
                                }}>Đăng Nhập</button>
                            {loginError && <p style={{ color: 'red', marginTop: '10px' }}>{loginError}</p>}
                        </form>

                    ) : (
                        <form>
                            {/* Form đăng ký có thể được thêm vào đây */}
                            <p>Chức năng đăng ký sẽ được thêm vào sau.</p>
                        </form>
                    )}

                </div>
            </div>
        </div>
    );
}

export default Login;