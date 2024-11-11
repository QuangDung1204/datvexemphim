// import { useLocation } from 'react-router-dom';
// import QRCode from 'qrcode.react'; // Đảm bảo đã cài đặt thư viện qrcode.react
// import { useState } from 'react';

// const PaymentPage = () => {
//     const location = useLocation();
//     const { movie, cinema, time, selectedDate, selectedSeats } = location.state || {}; // Lấy dữ liệu từ location.state

//     const [paymentSuccess, setPaymentSuccess] = useState(false);

//     const handlePayment = () => {
//         // Giả lập thanh toán thành công
//         setPaymentSuccess(true);
//     };

//     // Tính tổng tiền từ số ghế đã chọn
//     const ticketPrices = {
//         A: 55000,
//         B: 55000,
//         C: 85000,
//         D: 85000,
//         E: 100000
//     };

//     const totalPrice = selectedSeats.reduce((total, seat) => {
//         const row = seat.charAt(0); // Lấy hàng ghế (A, B, C, ...)
//         return total + ticketPrices[row]; // Cộng dồn giá vé
//     }, 0);

//     return (
//         <div className="flex flex-col items-center bg-gray-900 min-h-screen py-10">
//             <h1 className="text-white text-3xl font-bold mb-6">Thông Tin Thanh Toán</h1>

//             {/* Thông tin phim */}
//             <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-3/4 max-w-xl">
//                 <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover rounded-lg mb-4" />
//                 <h2 className="text-white text-2xl font-semibold">Tên Phim: {movie.title}</h2>
//                 <p className="text-gray-400">Rạp: {cinema.name}</p>
//                 <p className="text-gray-400">Thời gian: {time}</p>
//                 <p className="text-gray-400">Ngày: {new Date(selectedDate).toLocaleDateString('vi-VN')}</p>
//                 <p className="text-gray-400">Số ghế: {selectedSeats.join(', ')}</p>
//                 <p className="text-green-500 text-xl font-bold">Tổng tiền: {totalPrice.toLocaleString()} VNĐ</p>
//             </div>

//             {/* Mã QR */}
//             {paymentSuccess ? (
//                 <div className="mt-6">
//                     <QRCode value="Bạn đã thanh toán thành công!" size={256} />
//                     <p className="text-white mt-4">Bạn đã thanh toán thành công!</p>
//                 </div>
//             ) : (
//                 <button
//                     onClick={handlePayment}
//                     className="mt-6 bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-500 transition duration-300"
//                 >
//                     Thanh Toán
//                 </button>
//             )}

//             {/* Thông báo sau khi thanh toán */}
//             {paymentSuccess && (
//                 <div className="mt-4 bg-green-600 text-white p-4 rounded-lg">
//                     <p className="font-semibold">Chúc bạn có một buổi xem phim tuyệt vời tại rạp!</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default PaymentPage;