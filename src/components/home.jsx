import { useState, useEffect } from 'react';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import harrypotter from '../imgs/banu.jpg';
import panda from '../imgs/chiem.jpg';
import avata from '../imgs/nhotchong.jpg';
import { movieData } from '../data/movieData';
import skien1 from '../imgs/sk1.webp'
import skien2 from '../imgs/sk2.webp'
import skien3 from '../imgs/sk3.webp'
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import { Link } from 'react-router-dom';

// ảnh tĩnh
const images = [harrypotter, panda, avata];


function Homepages() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const [showTrailer, setShowTrailer] = useState(null); // Để theo dõi phim nào đang hiển thị trailer

    const handlePlayClick = (trailerUrl) => {
        setShowTrailer(trailerUrl);
    };

    const closeTrailer = () => {
        setShowTrailer(null);
    };
    const [showMessage, setShowMessage] = useState(false); // State để quản lý thông báo

    const handleShowMore = () => {
        setShowMessage(true); // Hiển thị thông báo khi nhấn nút
    };
    return (
        <div className=' bg-gray-900 text-white'>
            <div className="">
                <main className="pt-[1px]">
                    <div className="p-10">
                        <div className="relative w-full h-[400px] rounded-lg overflow-hidden" >
                            <div
                                className="w-full h-full relative"
                                style={{
                                    backgroundImage: `url(${images[currentIndex]})`,
                                    backgroundSize: 'contain',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}>
                                <div className="absolute inset-0 flex items-center justify-between px-1"> {/* Container cho các nút */}
                                    <button
                                        onClick={goToPrevious}
                                        className="bg-gray-800 bg-opacity-50 hover:bg-opacity-80 text-white p-2 rounded-full">
                                        <ArrowBackOutlinedIcon />
                                    </button>
                                    <button
                                        onClick={goToNext}
                                        className="bg-gray-800 bg-opacity-50 hover:bg-opacity-80 text-white p-2 rounded-full">
                                        <ArrowForwardOutlinedIcon />
                                    </button>
                                </div>
                                <div className="absolute bottom-4 w-full flex justify-center space-x-2">
                                    {images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentIndex(index)}
                                            className={`h-3 rounded-full transition-all duration-300 ease-in-out ${index === currentIndex ? 'w-4 bg-purple-500' : 'w-3 bg-gray-400'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-8 mt-8">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                                <div className="w-[11px] h-[18px] bg-[#6100C2] mr-4"></div>
                                <h1 className="text-xl font-semibold">Phim đang chiếu</h1>
                            </div>
                        </div>
                        {/* Movie Cards Grid */}
                        <div className="max-w-[1300px] mx-auto mt-10">
                            <div className="grid grid-cols-4 gap-6 h-full">
                                {movieData.slice(0, 4).map((movie) => (
                                    <div
                                        key={movie.id}
                                        className="relative rounded-lg overflow-hidden border border-gray-700 transition-transform duration-300 hover:shadow-lg hover:bg-gray-800"
                                    >
                                        <div
                                            className="h-[350px] bg-cover bg-center relative"
                                            style={{ backgroundImage: `url(${movie.image})` }}
                                        >
                                            <div className="absolute inset-0 flex flex-col justify-end p-4 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-black/50">
                                                <p className="text-white text-xl leading-relaxed mb-4 text-center">{movie.title}</p>
                                                <div className="flex justify-center mb-2">
                                                    <button
                                                        onClick={() => handlePlayClick(movie.trailer)}
                                                        className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300 flex items-center"
                                                    >
                                                        <PlayCircleFilledWhiteOutlinedIcon className="mr-2" />
                                                        Xem Trailer
                                                    </button>
                                                </div>
                                                <div className="flex justify-center">
                                                    <button
                                                        // onClick={() => handleBookNow(movie.id)} // Thay đổi hàm xử lý theo nhu cầu
                                                        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300 mr-2"
                                                    >
                                                        Đặt Vé
                                                    </button>
                                                    <button
                                                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                                                    >
                                                        <Link to={`/movie/${movie.link.split('/').pop()}`}> {/* Lấy tên phim từ link */}
                                                            Xem Chi Tiết
                                                        </Link>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>


                            <div className="flex justify-center mt-4">
                                <button
                                    onClick={handleShowMore}
                                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
                                >
                                    Xem Thêm
                                </button>
                            </div>
                            {showMessage && (
                                <div className="mt-4 text-center text-red-500">
                                    Hiện tại rạp chỉ có 4 phim.
                                </div>
                            )}

                            {/* Phần hiển thị trailer */}
                            {showTrailer && (
                                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                                    <div className="relative bg-black rounded-lg p-2">
                                        <button
                                            onClick={closeTrailer}
                                            className="absolute top-2 right-2 text-white hover:text-gray-300"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>

                                        {/* Video Trailer */}
                                        <div className="w-[800px] h-[450px]">
                                            <iframe
                                                className="w-full h-full rounded-lg"
                                                src={showTrailer}
                                                title="Movie Trailer"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 mt-16">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-3xl font-extrabold text-white text-center mb-8">
                                Sự Kiện & Tin Tức Điện Ảnh
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                                    <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${skien1})` }}>
                                        <div className="w-20 h-20 bg-red-600 text-white flex flex-col items-center justify-center absolute">
                                            <span className="text-2xl font-bold">15</span>
                                            <span className="text-sm">Th.12</span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            Diễn viên Cuộc chiến thượng lưu và dàn sao Hàn đến Việt Nam
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            Liên hoan phim Quốc tế Hà Nội 2024 (HANIFF 2024) vừa công bố danh sách các hạng mục tranh giải và dàn khách mời, giám khảo trong nước lẫn quốc tế.
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                                    <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${skien2})` }}>
                                        <div className="w-20 h-20 bg-red-600 text-white flex flex-col items-center justify-center absolute">
                                            <span className="text-2xl font-bold">20</span>
                                            <span className="text-sm">Th.12</span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            Chải Long Vũ bảnh bao, Khánh Ly rạng rỡ trên thảm đỏ LHP Quốc tế Hà Nội
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            Chải Long Vũ bảnh bao, lịch lãm và Khánh Ly đóng vai Lê của phim Đi giữa trời rực rỡ cũng xinh đẹp, duyên dáng trên thảm đỏ khai mạc Liên hoan phim (LHP) Quốc tế Hà Nội lần thứ VII năm 2024.
                                        </p>

                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                                    <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${skien3})` }}>
                                        <div className="w-20 h-20 bg-red-600 text-white flex flex-col items-center justify-center absolute">
                                            <span className="text-2xl font-bold">25</span>
                                            <span className="text-sm">Th.12</span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            Nhan sắc trong veo của thần tiên tỷ tỷ Lưu Diệc Phi ở tuổi 37
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            Ở tuổi U40, nữ diễn viên Trung Quốc Lưu Diệc Phi được khen ngày càng xinh đẹp, quyến rũ. Ngay trong những bức ảnh đời thường, mỹ nhân Hoa ngữ vẫn khiến người đối diện rung động.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 mt-16">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-3xl font-extrabold text-white text-center mb-8">
                                Ưu Đãi Đặc Biệt
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* Khuyến mãi 1 */}
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Giảm 20% Vé Đôi</h3>
                                        <p className="text-gray-600">Áp dụng cho tất cả các suất chiếu vào cuối tuần</p>
                                        <button className="mt-4 bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition duration-300">
                                            Nhận Ưu Đãi
                                        </button>
                                    </div>
                                </div>

                                {/* Khuyến mãi 2 */}
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Combo Bắp Nước</h3>
                                        <p className="text-gray-600">Mua 1 tặng 1 cho tất cả các combo bắp nước</p>
                                        <button className="mt-4 bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition duration-300">
                                            Xem Chi Tiết
                                        </button>
                                    </div>
                                </div>

                                {/* Khuyến mãi 3 */}
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Thành Viên Mới</h3>
                                        <p className="text-gray-600">Đăng ký thành viên mới - Tặng ngay 1 vé xem phim</p>
                                        <button className="mt-4 bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition duration-300">
                                            Đăng Ký Ngay
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>

    );
}

export default Homepages;