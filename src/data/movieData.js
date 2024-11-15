// src/data/movieData.js
import nhabanu from '../imgs/red-one.jpg';
import emvatrinh from '../imgs/movie2.jpg';
import chichiemem from '../imgs/movie5.jpg';
import conNhotMotChong from '../imgs/movie4.jpg';

export const movieData = [
    {
        id: 1,
        title: "Red One",
        image: nhabanu,
        link: "/movie/nhabaanu",
        year: "2023",
        genre: "Comedy",
        rating: "8.5",
        description: "Một câu chuyện hài hước về gia đình...",
        releaseDate: "15/01/2023",
        duration: "120 min",
        showtimes: ['11:00', '14:00', '17:00'],
        trailer: "https://www.youtube.com/embed/m6MF1MqsDhc" // Thêm link trailer
    },
    {
        id: 2,
        title: "Cười Xuyên Biên Giới",
        image: emvatrinh,
        link: "/movie/emvatrinh",
        year: "2023",
        genre: "Biography/Music",
        rating: "8.7",
        description: "Câu chuyện về cuộc đời nhạc sĩ Trịnh Công Sơn...",
        releaseDate: "10/02/2023",
        duration: "130 min",
        showtimes: ['12:00', '15:00', '18:00'],
        trailer: "https://www.youtube.com/embed/4ALt4VT7grw" // Thêm link trailer
    },
    {
        id: 3,
        title: "Venom",
        image: chichiemem,
        link: "/movie/chichiemem",
        year: "2023",
        genre: "Drama",
        rating: "7.5",
        description: "Một câu chuyện về tình chị em đầy cảm xúc...",
        releaseDate: "05/03/2023",
        duration: "115 min",
        showtimes: ['13:00', '16:00', '19:00', '22:00'],
        trailer: "https://www.youtube.com/embed/I1q-jmvPNn0" // Thêm link trailer
    },
    {
        id: 4,
        title: "Thần Dược",
        image: conNhotMotChong,
        link: "/movie/connhotmotchong",
        year: "2023",
        genre: "Romance",
        rating: "8.0",
        description: "Câu chuyện tình yêu giữa hai thế hệ...",
        releaseDate: "20/04/2023",
        duration: "110 min",
        showtimes: ['10:00', '13:30', '16:30'],
        trailer: "https://www.youtube.com/embed/77n-Tmes9s8" // Thêm link trailer
    },
];