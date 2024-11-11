
import { useState } from 'react';
import backgroundLogin from '../imgs/Background.jpg'
import Chichiemem2 from '../imgs/Movie 3.jpg'
function Chichiemem() {
    // Thêm state để control modal
    const [showTrailer, setShowTrailer] = useState(false);

    // Hàm để đóng modal
    const closeTrailer = () => {
        setShowTrailer(false);
    };
    return (
        <div>
            {/* Body */}
            <div style={{
                background: `linear-gradient(to right, rgba(97, 0, 194, 0.5), rgba(25, 24, 23, 0.5)), url('${backgroundLogin}')`,
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div className="container mx-auto px-4 py-8">
                    <div className="bg-black bg-opacity-70 rounded-lg shadow-xl p-8">
                        <div className="flex flex-col md:flex-row gap-8">
                            {/* Movie Poster */}
                            <div className="">
                                <img
                                    src={Chichiemem2}
                                    alt="Movie Poster"
                                    className="w-full rounded-lg shadow-lg"
                                />
                            </div>

                            {/* Movie Information */}
                            <div className="md:w-2/3 text-white">
                                <h1 className="text-4xl font-bold mb-4">Chị Chị Em Em 2</h1>
                                <div className="mb-6">
                                    <span className="bg-purple-600 text-sm px-3 py-1 rounded-full mr-2">2D</span>
                                    <span className="bg-purple-600 text-sm px-3 py-1 rounded-full">Tiếng Việt</span>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div>
                                        <p className="text-gray-400">Đạo diễn:</p>
                                        <p>Vũ Ngọc Đãng</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400">Thể loại:</p>
                                        <p>Tâm lý, Tình cảm, Hài hước</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400">Khởi chiếu:</p>
                                        <p>1/1/2023</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400">Thời lượng:</p>
                                        <p>116 phút</p>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h2 className="text-xl font-bold mb-2">Nội dung phim</h2>
                                    <p className="text-gray-300 leading-relaxed">
                                        Phim xoay quanh cuộc sống của bà Nữ, một người phụ nữ mạnh mẽ và truyền thống, làm chủ một quán ăn nổi tiếng. Bà Nữ là người nghiêm khắc, đặc biệt trong cách dạy dỗ các con, dẫn đến nhiều xung đột với con gái và con rể vì sự bảo thủ và áp đặt của mình. Cuộc sống gia đình rơi vào mâu thuẫn gay gắt khi các con của bà bắt đầu có những quyết định trái ý bà, đặc biệt là khi những mâu thuẫn giữa các thế hệ không ngừng gia tăng.
                                    </p>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <button className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition duration-300">
                                        Đặt Vé Ngay
                                    </button>

                                    <button
                                        onClick={() => setShowTrailer(true)}
                                        className="bg-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-700 transition duration-300"
                                    >
                                        Xem Trailer
                                    </button>
                                </div>

                                {/* Modal Trailer */}
                                {showTrailer && (
                                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                                        <div className="relative bg-black rounded-lg p-2">
                                            {/* Nút đóng */}
                                            <button
                                                onClick={closeTrailer}
                                                className="absolute -top-10 right-0 text-white hover:text-gray-300"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>

                                            {/* Video Trailer */}
                                            <div className="w-[800px] h-[450px]">
                                                <iframe
                                                    className="w-full h-full rounded-lg"
                                                    src="https://youtu.be/j3r7kq0UZMw?si=MhQ4mwM9Odg2w0MQ"
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chichiemem
