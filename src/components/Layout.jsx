// src/components/Layout.jsx
import { Link, useNavigate } from "react-router-dom";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import DehazeIcon from '@mui/icons-material/Dehaze';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Layout({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavigation = (path) => {
        setIsMenuOpen(false);  // Đóng menu
        navigate(path);
    };

    // Đóng menu khi click ra ngoài
    useEffect(() => {
        const closeMenu = (e) => {
            if (isMenuOpen && !e.target.closest('.menu-container')) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('click', closeMenu);
        return () => document.removeEventListener('click', closeMenu);
    }, [isMenuOpen]);

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        // Thực hiện tìm kiếm với searchTerm
        console.log('Tìm kiếm:', searchTerm);
        // Bạn có thể thêm logic tìm kiếm ở đây
    };
    return (
        <div className="relative min-h-screen">
            <header className="fixed top-0 left-0 right-0 w-full h-[100px] z-[9999]"
                style={{ backgroundColor: 'rgba(33, 32, 30, 1)' }}>
                <div className="h-full max-w-[1300px] mx-auto px-8 flex justify-between items-center">
                    {/* Logo và tên */}
                    <h1 className="text-3xl text-white font-bold cursor-pointer flex items-center">
                        <div className="flex items-center menu-container">
                            <DehazeIcon
                                onClick={toggleMenu}
                                className="text-3xl mr-5 cursor-pointer text-purple-600"
                            />
                            {isMenuOpen && (
                                <div className="fixed top-[100px] left-0 w-[234px] h-[700px] bg-[#191817] shadow-lg z-[10000] transition-transform duration-300 ease-in-out transform translate-x-0">
                                    <div className="flex flex-col h-full pt-[40px]">
                                        <Link to="/"
                                            onClick={() => handleNavigation("/")}
                                            className="px-6 py-4 text-white text-xl hover:text-purple-600 transition-colors duration-300 flex items-center gap-2">
                                            <HomeIcon />
                                            <span>Trang chủ</span>
                                        </Link>
                                        <Link to="/schedule"
                                            onClick={() => handleNavigation("/schedule")}
                                            className="px-6 py-4 text-white text-xl hover:text-purple-600 transition-colors duration-300 flex items-center gap-2">
                                            <CalendarTodayIcon />
                                            <span>Lịch chiếu</span>
                                        </Link>
                                        <Link to="/yeuthich"
                                            onClick={() => handleNavigation("/yeuthich")}
                                            className="px-6 py-4 text-white text-xl hover:text-purple-600 transition-colors duration-300 flex items-center gap-2">
                                            <FavoriteBorderIcon />
                                            <span>Yêu thích</span>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                        <Link to="/" className="flex items-center">
                            5ANHTAI
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
                            style={{ position: 'relative', display: 'inline-block' }} // Đảm bảo thẻ có vị trí tương đối
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div to="/thong-bao" className="text-white">
                                <NotificationsActiveOutlinedIcon />
                            </div>
                            {isHovered && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        bottom: '100%', // Đưa bảng thông báo lên trên icon
                                        left: '50%',
                                        transform: 'translateX(-50%)', // Căn giữa bảng thông báo
                                        backgroundColor: '#333', // Màu nền của bảng thông báo
                                        color: 'white', // Màu chữ
                                        padding: '10px',
                                        borderRadius: '5px',
                                        whiteSpace: 'nowrap', // Ngăn không cho chữ xuống dòng
                                        zIndex: 1000, // Đảm bảo bảng thông báo nằm trên các phần tử khác
                                        opacity: 0.9 // Độ trong suốt
                                    }}
                                >
                                    Không có thông báo nào
                                </div>
                            )}
                        </div>

                        <Link
                            to="/Dat-Ve"
                            className="w-[140px] h-10 rounded flex items-center justify-center"
                            style={{ backgroundColor: 'rgba(238, 231, 24, 1)' }}
                        >
                            <LocalActivityOutlinedIcon className="mr-2" />
                            <span className="text-black">Đặt Vé Ngay</span>
                        </Link>

                        <Link
                            to="/Dang-Nhap"
                            className="w-[140px] h-10 rounded flex items-center justify-center text-white"
                            style={{ backgroundColor: 'rgba(101, 15, 186, 1)' }}
                        >
                            <AccountCircleOutlinedIcon className="mr-2" />
                            <span>Đăng Nhập</span>
                        </Link>
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
                        <h1 className="text-2xl font-bold">5ANHTAI</h1>
                        <p className="mt-2">
                            HÃY ĐẶT VÉ KHI BẠN CÓ TIỀN HOẶC KHÔNG CÓ THÌ ĐI MƯỢN.
                        </p>
                    </div>
                    <div className="flex-1 mb-6 md:mb-0">
                        <h2 className="font-semibold">Giới thiệu</h2>
                        <ul className="mt-2 space-y-1">
                            <li>Quy chế sử dụng dịch vụ</li>
                            <li>Chính sách bảo mật</li>
                            <li>Khuyến mãi</li>
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
                            <a href="#" className="text-pink-400 hover:text-pink-500">
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