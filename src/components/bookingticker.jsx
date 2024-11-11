import { Link } from "react-router-dom"
import { useState } from 'react';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import backgroundImage from '../imgs/Background.jpg'
import { movieData } from '../data/movieData';
import marvel from '../imgs/Movie 6.jpg'
import lockdown from '../imgs/Movie 7.jpg'
import weath from '../imgs/Movie 8.jpg'
import quantumania from '../imgs/Movie 9.jpg'
import shazam from '../imgs/Movie 10.jpg'

function Bookingticker() {
    const [selectedCinema, setSelectedCinema] = useState('');
    const [selectedMovie, setSelectedMovie] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedShowtime, setSelectedShowtime] = useState('');

    // Danh sách rạp chiếu
    const cinemas = [
        'TheZoo Cinema',
        'CapriCorn Cinema',
        'GoldFish Cinema',
        'BabyNoodle Cinema',
        'Horizon Cinema'
    ];

    // Hàm xử lý đặt vé
    const handleBooking = () => {
        // Kiểm tra đầy đủ thông tin
        if (!selectedCinema || !selectedMovie || !selectedDate || !selectedShowtime) {
            alert('Vui lòng chọn đầy đủ thông tin đặt vé!');
            return;
        }

        // Thực hiện logic đặt vé
        alert(`Đặt vé thành công:
            Phim: ${selectedMovie}
            Rạp: ${selectedCinema}
            Ngày: ${selectedDate}
            Suất: ${selectedShowtime}`);
    };

    return (
        <>
            {/* Body */}
            <div className="pt-[100px] min-h-screen bg-cover bg-no-repeat bg-fixed relative"
                style={{ backgroundImage: `url(${backgroundImage})` }}>
                {/* Lớp gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(97,0,194,0.5)] to-[rgba(25,24,23,0.5)] z-0"></div>
                <div className="relative z-10">
                    <div className="max-w-6xl mx-auto rounded-lg shadow-lg p-8"
                        style={{ backgroundColor: 'rgba(229, 228, 246, 1)' }}>
                        <h2 className="text-3xl font-bold text-center mb-8 text-purple-700">
                            ĐẶT VÉ NHANH
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="booking-option">
                                <h3 className="text-xl font-semibold mb-2">Chọn Rạp</h3>
                                <select
                                    name="cinema"
                                    value={selectedCinema}
                                    onChange={(e) => setSelectedCinema(e.target.value)}
                                    className="w-full p-2 border rounded"
                                >
                                    <option value="">Chọn Rạp</option>
                                    {cinemas.map((cinema, index) => (
                                        <option key={index} value={cinema}>{cinema}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="booking-option">
                                <h3 className="text-xl font-semibold mb-2">Chọn Phim</h3>
                                <select
                                    name="movie"
                                    value={selectedMovie}
                                    onChange={(e) => setSelectedMovie(e.target.value)}
                                    className="w-full p-2 border rounded"
                                >
                                    <option value="">Chọn Phim</option>
                                    {movieData.map((movie) => (
                                        <option key={movie.id} value={movie.title}>
                                            {movie.title}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="booking-option">
                                <h3 className="text-xl font-semibold mb-2">Chọn Ngày</h3>
                                <input
                                    type="date"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div className="booking-option">
                                <h3 className="text-xl font-semibold mb-2">Chọn Suất</h3>
                                <select
                                    name="showtime"
                                    value={selectedShowtime}
                                    onChange={(e) => setSelectedShowtime(e.target.value)}
                                    className="w-full p-2 border rounded">
                                    <option value="">Chọn suất</option>
                                    <option value="10:00">10:00</option>
                                    <option value="13:00">13:00</option>
                                    <option value="16:00">16:00</option>
                                    <option value="19:00">19:00</option>
                                    <option value="22:00">22:00</option>
                                </select>
                            </div>
                        </div>
                        <button
                            onClick={handleBooking}
                            className="mt-8 w-full bg-yellow-400 text-black font-bold py-3 px-4 rounded hover:bg-yellow-500 transition duration-300"
                        >
                            Đặt Ngay
                        </button>
                    </div >

                    {/* Phần ticket */}
                    <div className="mt-8">
                        <div className="flex justify-center items-center mb-8">
                            <h1 className="font-noto-sans font-bold text-[48px] leading-[1.2] tracking-[0] text-white shadow-lg" style={{ letterSpacing: '0.5px', textRendering: 'optimizeLegibility' }}>
                                PHIM ĐANG CHIẾU
                            </h1>
                        </div>
                        {/* BOKKINGTICKET */}
                        <div className="max-w-[1300px] mx-auto h-[500px] relative">
                            <div className="grid grid-cols-5 gap-5 h-full">
                                {movieData && movieData.slice(0, 5).map((movie) => (
                                    <Link
                                        key={movie.id}
                                        to={`/movie/${movie.link.split('/').pop()}`} // Điều này sẽ lấy phần cuối của đường dẫn
                                        className="h-full bg-no-repeat bg-cover rounded-lg hover:scale-105 transition-transform duration-300 relative group"
                                        style={{ backgroundImage: `url(${movie.image})` }}
                                    >
                                        {/* Overlay khi hover */}
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg">
                                            {/* Thông tin phim */}
                                            <div className="absolute inset-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <h3 className="text-lg font-bold mb-2">{movie.title}</h3>
                                                <p className="text-sm mb-1">Thể loại: {movie.genre}</p>
                                                <p className="text-sm mb-1">Thời lượng: {movie.duration}</p>
                                                <p className="text-sm">Khởi chiếu: {movie.releaseDate}</p>
                                            </div>
                                        </div>

                                        {/* Nút đặt vé */}
                                        <button className="absolute bottom-4 left-0 right-0 mx-auto w-fit bg-[#EEE718] rounded-md px-6 py-2 flex items-center hover:bg-yellow-400 transition-colors duration-300">
                                            <LocalActivityOutlinedIcon className="mr-2 text-black" />
                                            <span className="text-black font-medium text-sm">
                                                ĐẶT VÉ NGAY
                                            </span>
                                        </button>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-8 "> {/* Thêm pb-40 để tạo không gian cho hình ảnh */}
                        <h1 className="text-center font-noto-sans font-bold text-5xl leading-tight tracking-wide text-white mb-8"
                            style={{ textRendering: 'optimizeLegibility' }}>
                            PHIM SẮP CHIẾU
                        </h1>
                        <div className="flex justify-center space-x-4 overflow-x-auto">
                            <img src={marvel} alt="Movie 51" className="w-60 h-40 object-cover" />
                            <img src={lockdown} alt="Movie 52" className="w-60 h-40 object-cover" />
                            <img src={weath} alt="Movie 49" className="w-60 h-40 object-cover" />
                            <img src={quantumania} alt="Movie 50" className="w-60 h-40 object-cover" />
                            <img src={shazam} alt="Movie 53" className="w-60 h-40 object-cover" />
                        </div>
                    </div>


                </div>
            </div >
        </>
    )
}

export default Bookingticker
