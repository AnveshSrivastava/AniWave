import React, { useState, useEffect } from 'react';
import { Play, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimeCard from '../components/AnimeCard';
import ComingSoon from '../components/ComingSoon';
import Footer from '../components/Footer';
import { mockAnime, featuredAnime } from '../data/mockData';

const Homepage = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [
    { title: 'Top Airing', anime: mockAnime.slice(0, 8) },
    { title: 'Most Popular', anime: mockAnime.slice(8, 16) },
    { title: 'Most Favorite', anime: mockAnime.slice(16, 24) },
    { title: 'Latest Completed', anime: mockAnime.slice(24, 32) }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredAnime.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredAnime.length) % featuredAnime.length);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentAnime = featuredAnime[currentSlide];

  return (
    <div className="pt-16">
      {/* Hero Banner with Slider */}
      <div className="relative h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${currentAnime.banner})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="text-pink-400 text-sm font-medium mb-2">#{currentSlide + 1} Spotlight</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              {currentAnime.title}
            </h1>
            
            <div className="flex items-center space-x-4 mb-6">
              <span className="bg-green-600 text-white px-2 py-1 rounded text-sm font-medium">
                HD
              </span>
              <span className="text-gray-300">TV</span>
              <span className="text-gray-300">24m</span>
              <div className="flex items-center">
                <span className="text-yellow-400 mr-1">★</span>
                <span className="text-white">{currentAnime.rating}</span>
              </div>
            </div>

            <p className="text-gray-300 text-lg mb-8 max-w-xl leading-relaxed">
              {currentAnime.description}
            </p>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate(`/watch/${currentAnime.id}`)}
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full flex items-center space-x-2 transition-all duration-200 transform hover:scale-105"
              >
                <Play className="w-5 h-5" />
                <span className="font-medium">Watch Now</span>
              </button>
              <button
                onClick={() => navigate(`/anime/${currentAnime.id}`)}
                className="bg-slate-800/80 hover:bg-slate-700 text-white px-8 py-3 rounded-full flex items-center space-x-2 transition-all duration-200 border border-slate-600"
              >
                <Info className="w-5 h-5" />
                <span className="font-medium">Detail</span>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-200"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-200"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {featuredAnime.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                currentSlide === index ? 'bg-pink-500' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Anime Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {categories.map((category, index) => (
          <div key={index} className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">{category.title}</h2>
              <button className="text-pink-400 hover:text-pink-300 transition-colors duration-200 flex items-center space-x-1">
                <span>View more</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
              {category.anime.map((anime) => (
                <AnimeCard key={anime.id} anime={anime} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Coming Soon Section */}
      <ComingSoon />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;