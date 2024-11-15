import { useState, useEffect } from 'react';
import { movieData } from '../data/movieData';
import { useNavigate } from 'react-router-dom';

const MovieSchedule = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [filteredMovies, setFilteredMovies] = useState([]);
    const itemsPerPage = 5;

    const cinemas = [
        { name: 'Horizon Cinema', address: '512A Nguyễn An Ninh, Vũng Tàu, Bà Rịa - Vũng Tàu' },
    ];

    const showtimes = ['10:00', '11:30', '13:00', '14:30', '16:00', '17:30', '19:00', '20:30', '22:00'];

    const getRandomShowtimes = (count) => {
        const shuffled = [...showtimes].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    useEffect(() => {
        const filtered = movieData.map(movie => ({
            ...movie,
            cinemaShowtimes: cinemas.map(cinema => ({
                ...cinema,
                showtimes: getRandomShowtimes(4) // Lấy 4 giờ chiếu ngẫu nhiên cho mỗi rạp
            }))
        })).filter(movie =>
            movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredMovies(filtered);
    }, [searchTerm]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handleDateChange = (e) => {
        setSelectedDate(new Date(e.target.value));
    };


    const navigate = useNavigate();
    const handleBooking = (movie, cinema, time) => {
        navigate('/seat-booking', { state: { movie, cinema, time, selectedDate } });
    };

    // Pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentMovies = filteredMovies.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // MovieSchedule.jsx

    return (
        <div className="bg-gray-900 text-white min-h-screen p-8">
            {/* Search and Date Selection */}
            <div className="mb-8 flex justify-between items-center">
                <div className="flex space-x-4">
                    <input
                        type="text"
                        placeholder="Tìm kiếm phim..."
                        className="p-2 rounded bg-gray-700 text-white w-[300px]"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
                <div className="flex items-center space-x-4">
                    <span>Chọn ngày:</span>
                    <input
                        type="date"
                        className="p-2 rounded bg-gray-700 text-white"
                        value={selectedDate.toISOString().split('T')[0]}
                        onChange={handleDateChange}
                    />
                </div>
            </div>

            {/* Movie Schedules */}
            {currentMovies.length > 0 ? (
                currentMovies.map((movie) => (
                    <div key={movie.id} className="mb-8 bg-gray-800 rounded-lg overflow-hidden">
                        <div className="flex">
                            {/* Left side - Movie Info */}
                            <div className="w-1/4 p-4">
                                <img
                                    src={movie.image}
                                    alt={movie.title}
                                    className="w-full h-[700px] object-cover rounded-lg mb-4"
                                />
                                <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
                                <div className="text-sm text-gray-400">
                                    <p>Thể loại: {movie.genre}</p>
                                    <p>Thời gian: {movie.duration}</p>
                                    <p>Khởi chiếu: {movie.releaseDate}</p>
                                </div>
                            </div>
                            {/* Right side - Showtimes */}
                            <div className="w-3/4 p-4">
                                {movie.cinemaShowtimes.map((cinema) => (
                                    <div key={cinema.name}>
                                        <h3 className="text-lg font-semibold">{cinema.name}</h3>
                                        <div className="flex space-x-4">
                                            {cinema.showtimes.map((time) => (
                                                <button
                                                    key={time}
                                                    onClick={() => handleBooking(movie, cinema, time)} // Gọi hàm handleBooking
                                                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-300"
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-gray-400">Không có phim nào.</p>
            )}

            {/* Pagination */}
            <div className="flex justify-center mt-8">
                {Array.from({ length: Math.ceil(filteredMovies.length / itemsPerPage) }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => paginate(index + 1)}
                        className={`mx-1 px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-purple-600' : 'bg-gray-700'} hover:bg-purple-700 transition duration-300`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MovieSchedule;