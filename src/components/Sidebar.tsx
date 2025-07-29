import React from 'react';
import { Link } from 'react-router-dom';
import { X, Heart } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Subbed Anime', href: '/subbed' },
    { label: 'Dubbed Anime', href: '/dubbed' },
    { label: 'Most Popular', href: '/popular' },
    { label: 'Movies', href: '/movies' },
    { label: 'TV Series', href: '/tv-series' },
    { label: 'OVAs', href: '/ovas' },
    { label: 'ONAs', href: '/onas' },
    { label: 'Specials', href: '/specials' },
    { label: 'Events', href: '/events' },
    { label: 'HiAnime App', href: '/app' },
    { label: 'Genre', href: '/genre' }
  ];

  const genres = [
    'Action', 'Adventure', 'Cars', 'Comedy', 'Dementia', 'Demons', 'Drama', 'Ecchi',
    'Fantasy', 'Game', 'Harem', 'Historical', 'Horror', 'Isekai', 'Josei', 'Kids',
    'Magic', 'Martial Arts', 'Mecha', 'Military', 'Music', 'Mystery', 'Parody',
    'Police', 'Psychological', 'Romance', 'Samurai', 'School', 'Sci-Fi', 'Seinen',
    'Shoujo', 'Shoujo Ai', 'Shounen', 'Shounen Ai', 'Slice of Life', 'Space',
    'Sports', 'Super Power', 'Supernatural', 'Thriller', 'Vampire'
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-slate-800 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-700">
            <button
              onClick={onClose}
              className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
            >
              <X className="w-4 h-4 mr-2" />
              <span className="text-sm">Close menu</span>
            </button>
          </div>

          {/* Community Button */}
          <div className="p-4">
            <button className="w-full bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full flex items-center justify-center space-x-2 transition-colors duration-200">
              <Heart className="w-4 h-4" />
              <span>Community</span>
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto">
            <div className="px-4 pb-4">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  onClick={onClose}
                  className="block text-gray-300 hover:text-white py-3 transition-colors duration-200 border-b border-slate-700/50 last:border-b-0"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Genres */}
            <div className="px-4 pb-4">
              <div className="grid grid-cols-2 gap-2">
                {genres.slice(0, 6).map((genre) => (
                  <button
                    key={genre}
                    className="text-left text-sm text-gray-400 hover:text-white py-1 transition-colors duration-200"
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;