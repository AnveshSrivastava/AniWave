import React from 'react';
import { Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AnimeCardProps {
  anime: {
    id: number;
    title: string;
    image: string;
    rating: number;
    year: number;
    type: string;
    episodes?: number;
  };
}

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  const navigate = useNavigate();

  return (
    <div
      className="group relative bg-slate-800/80 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 cursor-pointer"
      onClick={() => navigate(`/anime/${anime.id}`)}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={anime.image}
          alt={anime.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Glassmorphic Overlay with Play Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-black/30 to-transparent backdrop-blur-sm">
          <div className="flex flex-col items-center">
            <span className="inline-flex items-center justify-center rounded-full bg-white/20 p-4 shadow-lg animate-pulse">
              <Play className="w-12 h-12 text-pink-400 drop-shadow-lg" />
            </span>
          </div>
        </div>
        {/* Rating Badge */}
        <div className="absolute top-2 right-2 bg-yellow-400/90 text-black px-2 py-1 rounded text-xs font-bold shadow">
          ★ {anime.rating}
        </div>
        {/* Type Badge */}
        <div className="absolute top-2 left-2 bg-pink-600/90 text-white px-2 py-1 rounded text-xs font-medium shadow">
          {anime.type}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold text-base mb-2 line-clamp-2 group-hover:text-pink-400 transition-colors duration-200">
          {anime.title}
        </h3>
        <div className="flex items-center justify-between text-gray-400 text-xs">
          <span>{anime.year}</span>
          {anime.episodes && <span>{anime.episodes} eps</span>}
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;