import { useState, useEffect } from 'react';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import harrypotter from '../imgs/banu.jpg';
import panda from '../imgs/chiem.jpg';
import avata from '../imgs/nhotchong.jpg';
import { movieData } from '../data/movieData';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import marvel from '../imgs/Movie 6.jpg'
import lockdown from '../imgs/Movie 7.jpg'
import weath from '../imgs/Movie 8.jpg'
import quantumania from '../imgs/Movie 9.jpg'
import shazam from '../imgs/Movie 10.jpg'
import skien1 from '../imgs/sk1.webp'
import skien2 from '../imgs/sk2.webp'
import skien3 from '../imgs/sk3.webp'

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


    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem('favorites');
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });
    const handleFavoriteClick = (movie) => {
        setFavorites(prevFavorites => {
            const isFavorited = prevFavorites.some(fav => fav.id === movie.id);
            let newFavorites;

            if (isFavorited) {
                newFavorites = prevFavorites.filter(fav => fav.id !== movie.id);
            } else {
                newFavorites = [...prevFavorites, movie];
            }
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
            return newFavorites;
        });
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
                                <h1 className="text-xl font-semibold">Thịnh hành</h1>
                            </div>
                            <span className="text-sm cursor-pointer hover:text-purple-500">Xem tất cả</span>
                        </div>
                        {/* Movie Cards Grid */}
                        <div className="max-w-[1300px] mx-auto h-[500px]">
                            <div className="grid grid-cols-5 gap-5 h-full">
                                {movieData.slice(0, 5).map((movie) => (
                                    <div
                                        key={movie.id}
                                        className="h-full relative rounded-[20px] overflow-hidden border border-[#969696] hover:scale-105 transition-transform duration-300"
                                    >
                                        <div
                                            className="h-[400px] bg-cover bg-center relative"
                                            style={{ backgroundImage: `url(${movie.image})` }}
                                        >
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleFavoriteClick(movie);
                                                }}
                                                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-300 z-10"
                                            >
                                                {favorites.some(fav => fav.id === movie.id) ? (
                                                    <FavoriteIcon className="text-red-500 text-2xl" />
                                                ) : (
                                                    <FavoriteBorderIcon className="text-white text-2xl" />
                                                )}
                                            </button>
                                            <div className="opacity-0 hover:opacity-100 absolute inset-0 bg-black/50 transition-opacity duration-300 p-6 flex items-end">
                                                <p className="text-white text-sm leading-relaxed">{movie.description}</p>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 w-full h-[100px] bg-white/30 backdrop-blur-[8px] p-4">
                                            <h2 className="font-semibold text-black text-lg truncate mb-2">{movie.title}</h2>
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm text-black">
                                                    {movie.year} | {movie.genre}
                                                </span>
                                                <span className="text-sm text-black font-medium">
                                                    ⭐ {movie.rating}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-16 mb-24">
                        <h1 className="text-center font-noto-sans font-bold text-5xl leading-tight tracking-wide text-white mb-8"
                            style={{ textRendering: 'optimizeLegibility' }}>
                            PHIM SẮP CHIẾU
                        </h1>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
                                {[marvel, lockdown, weath, quantumania, shazam].map((movie, index) => (
                                    <div key={index} className="flex-none w-80 transform transition duration-500 hover:scale-105">
                                        <div className="relative h-120 w-full rounded-lg overflow-hidden shadow-lg">
                                            <img src={movie} alt={`Movie ${index + 1}`} className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                                <h2 className="text-white text-xl font-bold mb-2">Tên Phim {index + 1}</h2>
                                                <p className="text-gray-300 text-sm">Khởi chiếu: 01/01/2024</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="absolute left-0 top-1/2 bottom-0 w-24 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
                        <div className="absolute right-0 top-1/2 bottom-0 w-24 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
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