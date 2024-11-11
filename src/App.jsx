// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/home';
import BookingTicker from './components/bookingticker';
import Login from './components/login';
import Nhabanu from './movie/nhabanu';
import Emvatrinh from './movie/emvatrinh';
import Chichiemem from './movie/chichiemem';
import Connhotmotchong from './movie/connhotmotchong';
import Bogia from './movie/bogia';
import FavoritesPage from './components/FavoritesPage';
import ScrollToTop from './components/ScrollToTop';
import MovieSchedule from './components/lich_chieu';
import SeatBooking from './components/SeatBooking';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dat-Ve" element={<BookingTicker />} />
          <Route path="/Dang-Nhap" element={<Login />} />
          <Route path="/movie/nhabaanu" element={<Nhabanu />} />
          <Route path="/movie/emvatrinh" element={<Emvatrinh />} />
          <Route path="/movie/chichiemem" element={<Chichiemem />} />
          <Route path="/movie/connhotmotchong" element={<Connhotmotchong />} />
          <Route path="/movie/BoGia" element={<Bogia />} />
          <Route path="/yeuthich" element={<FavoritesPage />} />
          <Route path="/schedule" element={<MovieSchedule />} />
          <Route path="/seat-booking" element={<SeatBooking />} />
          {/* <Route path="/payment" component={PaymentPage} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;