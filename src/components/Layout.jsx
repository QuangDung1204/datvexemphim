// src/components/Layout.jsx
import { Link } from "react-router-dom";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function Layout({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [username, setUsername] = useState(null); // State để lưu tên người dùng

    useEffect(() => {
        const closeMenu = (e) => {
            if (isMenuOpen && !e.target.closest('.menu-container')) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('click', closeMenu);
        return () => document.removeEventListener('click', closeMenu);
    }, [isMenuOpen]);

    // Gọi API để lấy tên người dùng
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost/WebDatVeXemPhim/backend/getUsers.php');
                const data = await response.json();
                if (data.success) {
                    setUsername(data.data); // Lưu tên người dùng vào state
                } else {
                    console.error('Lỗi khi lấy dữ liệu:', data.error);
                }
            } catch (error) {
                console.error('Lỗi khi gọi API:', error);
            }
        };

        // Lấy tên người dùng từ localStorage
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        } else {
            fetchUsers(); // Nếu không có tên người dùng trong localStorage, gọi API
        }
    }, []);

    const handleSearch = () => {
        console.log('Tìm kiếm:', searchTerm);
    };
    return (
        <div className="relative min-h-screen">
            <header className="fixed top-0 left-0 right-0 w-full h-[100px] z-[9999] bg-[#211E1E]">
                <div className="h-full max-w-[1300px] mx-auto px-8 flex justify-between items-center">
                    <h1 className="text-3xl text-white font-bold cursor-pointer flex items-center">
                        <Link to="/" className="flex items-center">
                            Horizon Cinema
                        </Link>
                    </h1>

                    {/* Menu bên phải */}
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm tên phim..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter') {
                                            handleSearch(); // Gọi hàm tìm kiếm khi nhấn Enter
                                        }
                                    }}
                                    className="bg-gray-800 text-white rounded-full pl-10 pr-4 py-2"
                                />
                                <SearchOutlinedIcon
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
                                    onClick={handleSearch} // Gọi hàm tìm kiếm khi nhấn vào biểu tượng
                                />
                            </div>
                        </div>
                        <div
                            className="relative inline-block"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className="text-white">
                                <NotificationsActiveOutlinedIcon />
                            </div>
                            {isHovered && (
                                <div
                                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-[#333] text-white p-2 rounded opacity-90 whitespace-nowrap z-50"
                                >
                                    Không có thông báo nào
                                </div>
                            )}
                        </div>

                        <Link
                            to="/Dat-Ve"
                            className="w-[140px] h-10 rounded flex items-center justify-center bg-[#EEE718]"
                        >
                            <LocalActivityOutlinedIcon className="mr-2" />
                            <span className="text-black">Đặt Vé Ngay</span>
                        </Link>

                        {/* Hiển thị tên người dùng nếu đã đăng nhập, nếu không hiển thị nút Đăng Nhập */}
                        {username ? (
                            <Link
                                className="w-[140px] h-10 rounded flex items-center justify-center text-white bg-[#650FBA]"
                            >
                                <AccountCircleOutlinedIcon className="mr-2" />
                                <span>{username}</span>
                            </Link>
                        ) : (
                            <Link
                                to="/Dang-Nhap"
                                className="w-[140px] h-10 rounded flex items-center justify-center text-white bg-[#650FBA]"
                            >
                                <AccountCircleOutlinedIcon className="mr-2" />
                                <span>Đăng Nhập</span>
                            </Link>
                        )}
                    </div>
                </div>
            </header>


            {/* Main Content */}
            <main className="pt-[100px]">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:space-x-8">
                    <div className="flex-1 pl-52 mb-6 md:mb-0">
                        <h1 className="text-2xl font-bold">Horizon Cinema</h1>
                        {/* <p className="mt-2">
                            HÃY ĐẶT VÉ KHI BẠN CÓ TIỀN HOẶC KHÔNG CÓ THÌ ĐI MƯỢN.
                        </p> */}
                    </div>
                    <div className="flex-1 mb-6 md:mb-0">
                        <h2 className="font-semibold">Giới thiệu</h2>
                        <ul className="mt-2 space-y-1">
                            <li>Quy chế sử dụng dịch vụ</li>
                            <li>
                                <Link to="/privacy-policy">Chính sách bảo mật</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h2 className="font-semibold">Hỗ trợ</h2>
                        <p className="mt-2">0843601796</p>
                        <p>Hoặc kết nối qua:</p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-pink-400 hover:text-pink-500">
                                <FacebookOutlinedIcon />
                            </a>
                            <a href="#" className="text-pink-400 hover:text-pink-500">
                                <InstagramIcon />
                            </a>
                            <a src="https://www.instagram.com/perry.t26/" className="text-pink-400 hover:text-pink-500">
                                <YouTubeIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-[9998]"></div>
            )}
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;