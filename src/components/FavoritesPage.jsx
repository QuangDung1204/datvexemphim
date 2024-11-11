// FavoritesPage.jsx
import { useState, useEffect } from 'react';

function FavoritesPage() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const savedFavorites = localStorage.getItem('favorites');
        if (savedFavorites) {
            setFavorites(JSON.parse(savedFavorites));
        }
    }, []);

    return (
        <div className="bg-black text-white min-h-screen p-8 pl-[250px]" style={{ backgroundColor: 'rgba(33, 32, 30, 1)' }}>
            <h1 className="text-2xl font-bold mb-6">Phim Yêu Thích</h1>
            <div className="grid grid-cols-5 gap-4">
                {favorites.map((movie) => (
                    <div
                        key={movie.id}
                        className="relative rounded-[20px] overflow-hidden border border-[#969696] hover:scale-105 transition-transform duration-300"
                    >
                        <div
                            className="h-[240px] bg-cover bg-center"
                            style={{ backgroundImage: `url(${movie.image})` }}
                        >
                            <div className="opacity-0 hover:opacity-100 absolute inset-0 bg-black/50 transition-opacity duration-300 p-4">
                                <p className="text-white text-xs">{movie.description}</p>
                            </div>
                        </div>
                        <div className="absolute bottom-0 w-full h-[70px] bg-white/30 backdrop-blur-[8px] p-2">
                            <h2 className="font-semibold text-black text-sm truncate">{movie.title}</h2>
                            <div className="flex justify-between items-center mt-1">
                                <span className="text-xs text-black">
                                    {movie.year} | {movie.genre}
                                </span>
                                <span className="text-xs text-black">
                                    ⭐ {movie.rating}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FavoritesPage;