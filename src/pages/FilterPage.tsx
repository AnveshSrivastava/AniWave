import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ChevronDown } from 'lucide-react';
import AnimeCard from '../components/AnimeCard';
import Footer from '../components/Footer';
import { mockAnime } from '../data/mockData';

const FilterPage = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    type: 'All',
    status: 'All',
    rated: 'All',
    score: 'All',
    season: 'All',
    language: 'All',
    sort: 'Default',
    startYear: '',
    startMonth: '',
    startDay: '',
    endYear: '',
    endMonth: '',
    endDay: '',
    genres: [] as string[]
  });

  const genres = [
    'Action', 'Adventure', 'Cars', 'Comedy', 'Dementia', 'Demons', 'Drama', 'Ecchi',
    'Fantasy', 'Game', 'Harem', 'Historical', 'Horror', 'Isekai', 'Josei', 'Kids',
    'Magic', 'Martial Arts', 'Mecha', 'Military', 'Music', 'Mystery', 'Parody',
    'Police', 'Psychological', 'Romance', 'Samurai', 'School', 'Sci-Fi', 'Seinen',
    'Shoujo', 'Shoujo Ai', 'Shounen', 'Shounen Ai', 'Slice of Life', 'Space',
    'Sports', 'Super Power', 'Supernatural', 'Thriller', 'Vampire'
  ];

  const filterOptions = {
    type: ['All', 'TV', 'Movie', 'OVA', 'ONA', 'Special'],
    status: ['All', 'Ongoing', 'Completed', 'Upcoming'],
    rated: ['All', 'G', 'PG', 'PG-13', 'R', 'R+', 'Rx'],
    score: ['All', '1+', '2+', '3+', '4+', '5+', '6+', '7+', '8+', '9+'],
    season: ['All', 'Spring', 'Summer', 'Fall', 'Winter'],
    language: ['All', 'Sub', 'Dub', 'Sub & Dub'],
    sort: ['Default', 'Recently Added', 'Recently Updated', 'Score', 'Name A-Z', 'Released Date', 'Most Watched']
  };

  const handleGenreToggle = (genre: string) => {
    setFilters(prev => ({
      ...prev,
      genres: prev.genres.includes(genre)
        ? prev.genres.filter(g => g !== genre)
        : [...prev.genres, genre]
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      type: 'All',
      status: 'All',
      rated: 'All',
      score: 'All',
      season: 'All',
      language: 'All',
      sort: 'Default',
      startYear: '',
      startMonth: '',
      startDay: '',
      endYear: '',
      endMonth: '',
      endDay: '',
      genres: []
    });
  };

  const applyFilters = () => {
    // In a real app, this would trigger an API call with the filters
    console.log('Applying filters:', filters);
  };

  return (
    <div className="pt-16 min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <button onClick={() => navigate('/')} className="hover:text-white">Home</button>
          <span>•</span>
          <span className="text-white">Filter</span>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Filter</h2>
          
          {/* Filter Options Row 1 */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            {Object.entries(filterOptions).map(([key, options]) => (
              <div key={key} className="relative">
                <label className="block text-sm font-medium text-gray-300 mb-2 capitalize">
                  {key}
                </label>
                <div className="relative">
                  <select
                    value={filters[key as keyof typeof filters] as string}
                    onChange={(e) => setFilters(prev => ({ ...prev, [key]: e.target.value }))}
                    className="w-full bg-slate-700 text-white px-3 py-2 rounded border border-slate-600 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 appearance-none"
                  >
                    {options.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>

          {/* Date Filters */}
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="flex-1 bg-slate-700/60 rounded-xl p-4 shadow border border-slate-600">
              <label className="block text-base font-semibold text-pink-400 mb-3">Start Date</label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Year"
                  value={filters.startYear}
                  onChange={(e) => setFilters(prev => ({ ...prev, startYear: e.target.value }))}
                  className="w-full sm:w-1/3 bg-slate-800 text-white px-3 py-2 rounded border border-slate-600 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                />
                <input
                  type="text"
                  placeholder="Month"
                  value={filters.startMonth}
                  onChange={(e) => setFilters(prev => ({ ...prev, startMonth: e.target.value }))}
                  className="w-full sm:w-1/3 bg-slate-800 text-white px-3 py-2 rounded border border-slate-600 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                />
                <input
                  type="text"
                  placeholder="Day"
                  value={filters.startDay}
                  onChange={(e) => setFilters(prev => ({ ...prev, startDay: e.target.value }))}
                  className="w-full sm:w-1/3 bg-slate-800 text-white px-3 py-2 rounded border border-slate-600 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                />
              </div>
            </div>
            <div className="flex-1 bg-slate-700/60 rounded-xl p-4 shadow border border-slate-600">
              <label className="block text-base font-semibold text-pink-400 mb-3">End Date</label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Year"
                  value={filters.endYear}
                  onChange={(e) => setFilters(prev => ({ ...prev, endYear: e.target.value }))}
                  className="w-full sm:w-1/3 bg-slate-800 text-white px-3 py-2 rounded border border-slate-600 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                />
                <input
                  type="text"
                  placeholder="Month"
                  value={filters.endMonth}
                  onChange={(e) => setFilters(prev => ({ ...prev, endMonth: e.target.value }))}
                  className="w-full sm:w-1/3 bg-slate-800 text-white px-3 py-2 rounded border border-slate-600 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                />
                <input
                  type="text"
                  placeholder="Day"
                  value={filters.endDay}
                  onChange={(e) => setFilters(prev => ({ ...prev, endDay: e.target.value }))}
                  className="w-full sm:w-1/3 bg-slate-800 text-white px-3 py-2 rounded border border-slate-600 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Genres */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Genre</h3>
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => handleGenreToggle(genre)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                    filters.genres.includes(genre)
                      ? 'bg-pink-500 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={applyFilters}
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200"
            >
              Filter
            </button>
            <button
              onClick={clearAllFilters}
              className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200"
            >
              Clear All
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Filter Results</h2>
            <span className="text-pink-400">7908 results</span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {mockAnime.slice(0, 24).map((anime) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FilterPage;