// src/data/movieData.js
import nhabanu from '../imgs/Movie 1.jpg';
import emvatrinh from '../imgs/Movie 2.jpg';
import chichiemem from '../imgs/Movie 3.jpg';
import conNhotMotChong from '../imgs/Movie 4.jpg';
import bogia from '../imgs/Movie 5.jpg';

export const movieData = [
    {
        id: 1,
        title: "Nhà Bà Nữ",
        image: nhabanu,
        link: "/movie/nhabaanu",
        year: "2023",
        genre: "Comedy",
        rating: "8.5",
        description: "Một câu chuyện hài hước về gia đình...",
        releaseDate: "15/01/2023",
        duration: "120 min",
        showtimes: ['11:00', '14:00', '17:00'] // Giờ chiếu cho phim này
    },
    {
        id: 2,
        title: "Em Và Trịnh",
        image: emvatrinh,
        link: "/movie/emvatrinh",
        year: "2023",
        genre: "Biography/Music",
        rating: "8.7",
        description: "Câu chuyện về cuộc đời nhạc sĩ Trịnh Công Sơn...",
        releaseDate: "10/02/2023",
        duration: "130 min",
        showtimes: ['12:00', '15:00', '18:00'] // Giờ chiếu cho phim này
    },
    {
        id: 3,
        title: "Chị Chị Em Em",
        image: chichiemem,
        link: "/movie/chichiemem",
        year: "2023",
        genre: "Drama",
        rating: "7.5",
        description: "Một câu chuyện về tình chị em đầy cảm xúc...",
        releaseDate: "05/03/2023",
        duration: "115 min",
        showtimes: ['13:00', '16:00', '19:00', '22:00'] // Giờ chiếu cho phim này
    },
    {
        id: 4,
        title: "Con Nhót Mót Chồng",
        image: conNhotMotChong,
        link: "/movie/connhotmotchong",
        year: "2023",
        genre: "Romance",
        rating: "8.0",
        description: "Câu chuyện tình yêu giữa hai thế hệ...",
        releaseDate: "20/04/2023",
        duration: "110 min",
        showtimes: ['10:00', '13:30', '16:30'] // Giờ chiếu cho phim này
    },
    {
        id: 5,
        title: "Bố Già",
        image: bogia,
        link: "/movie/BoGia",
        year: "2021",
        genre: "Comedy/Drama",
        rating: "9.0",
        description: "Một câu chuyện cảm động về tình cha con...",
        releaseDate: "01/01/2021",
        duration: "140 min",
        showtimes: ['11:30', '14:30', '17:30', '20:30'] // Giờ chiếu cho phim này
    }
];