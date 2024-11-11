import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { QRCode } from 'react-qr-code';

// Sử dụng QRCode trong component của bạn

const SeatBooking = () => {
    const location = useLocation();
    const { movie, cinema, time, selectedDate } = location.state || {};
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const rows = ['A', 'B', 'C', 'D', 'E'];
    const seatsPerRow = {
        A: 10,
        B: 10,
        C: 10,
        D: 10,
        E: 5
    };
    const ticketPrices = {
        A: 55000,
        B: 55000,
        C: 85000,
        D: 85000,
        E: 100000
    };

    const toggleSeat = (seat) => {
        setSelectedSeats((prev) =>
            prev.includes(seat) ? prev.filter(s => s !== seat) : [...prev, seat]
        );
    };

    const handleBooking = () => {
        if (selectedSeats.length === 0) {
            alert('Vui lòng chọn ít nhất một ghế!');
            return;
        }

        setPaymentSuccess(true);
    };

    const handleOk = () => {
        window.location.href = '/';
    };

    const totalPrice = selectedSeats.reduce((total, seat) => {
        const row = seat.charAt(0);
        return total + ticketPrices[row];
    }, 0);

    return (
        <div className="bg-gray-900 text-white min-h-screen p-8">
            {!paymentSuccess ? (
                <>
                    <div className="flex items-center mb-8">
                        <img src={movie.image} alt={movie.title} className="w-32 h-48 object-cover rounded-lg mr-4" />
                        <div>
                            <h2 className="text-2xl font-bold">{movie.title}</h2>
                            <p className="text-gray-400">{cinema.name}</p>
                            <p>{time}</p>
                            <p className="text-gray-400">{new Date(selectedDate).toLocaleDateString('vi-VN')}</p>
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold mb-4">Đặt Chỗ Ngồi</h1>
                    <div className="flex">
                        <div className="flex flex-col items-center w-3/4 relative">
                            <div className="w-full max-w-[800px] h-[60px] mb-2 border-3 border-white rounded-full flex items-center justify-center">
                                <span className="text-white font-semibold">Màn hình</span>
                            </div>
                            <div className="w-full max-w-[750px] h-[5px] bg-white rounded-t-full mb-6"></div>
                            <h1 className="text-center text-xl font-bold mt-4">Chọn ghế của bạn</h1>
                            <div className="flex flex-col items-center space-y-2 mt-4">
                                {rows.map(row => (
                                    <div key={row} className="flex space-x-2 justify-center">
                                        {Array.from({ length: seatsPerRow[row] }, (_, i) => {
                                            const seat = `${row}${i + 1}`;
                                            const isSelected = selectedSeats.includes(seat);
                                            const seatClass = `w-12 h-8 rounded-md flex justify-center items-center cursor-pointer transition-colors duration-300 ${isSelected ? 'bg-green-500' : 'bg-gray-300'}`;

                                            return (
                                                <div
                                                    key={seat}
                                                    className={seatClass}
                                                    onClick={() => toggleSeat(seat)}
                                                >
                                                    <span className="text-sm font-bold text-black">{seat}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Phần hiển thị giá ghế */}
                        <div className="w-1/4 ml-8">
                            <h2 className="text-lg font-bold">Giá Ghế:</h2>
                            <ul className="list-disc ml-5">
                                <li>Hàng A-B: Ghế thường - 55.000 VNĐ</li>
                                <li>Hàng C-D: Ghế VIP - 85.000 VNĐ</li>
                                <li>Hàng E: Ghế cho cặp đôi - 100.000 VNĐ</li>
                            </ul>
                        </div>
                    </div>

                    {/* Hiển thị tổng tiền */}
                    <div className="mt-4">
                        <h2 className="text-xl font-bold">Tổng Tiền:</h2>
                        <p className="text-lg">{totalPrice.toLocaleString()} VNĐ</p>
                    </div>

                    {/* Nút đặt vé */}
                    <div className="mt-4">
                        <button
                            onClick={handleBooking}
                            className="bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition duration-300 w-full"
                        >
                            Đặt Vé
                        </button>
                    </div>
                </>
            ) : (
                // Hiển thị mã QR và thông báo thanh toán thành công
                <div className="payment-success text-center">
                    <h2 className="text-2xl font-bold">Bạn đã thanh toán thành công!</h2>
                    <QRCode value={`Bạn đã thanh toán thành công cho ${selectedSeats.join(', ')} với tổng tiền là ${totalPrice.toLocaleString()} VNĐ`} size={256} className="mx-auto mt-4" />
                    <button onClick={handleOk} className="mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300">
                        OK
                    </button>
                </div>
            )}
        </div>
    );
}

export default SeatBooking;