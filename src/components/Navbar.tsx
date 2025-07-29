import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Filter, Menu, Bell, User } from 'lucide-react';
import SearchDropdown from './SearchDropdown';
import Sidebar from './Sidebar';

const Navbar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side - Menu and Logo */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Menu className="w-5 h-5" />
              </button>
              
              <Link to="/" className="flex items-center space-x-2">
                <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  h!anime
                </div>
              </Link>
            </div>

            {/* Center - Search with Filter */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <div className="flex items-center bg-slate-800 rounded-full focus-within:ring-2 focus-within:ring-pink-500">
                  <div className="flex items-center px-4 py-2 flex-1">
                    <Search className="w-4 h-4 text-gray-400 mr-2" />
                    <input
                      type="text"
                      placeholder="Search anime..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setShowSearch(true)}
                      className="bg-transparent text-sm text-white placeholder-gray-400 outline-none flex-1"
                    />
                  </div>
                  <button
                    onClick={() => navigate('/filter')}
                    className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-3 rounded-r-full flex items-center space-x-1 transition-colors duration-200"
                  >
                    <Filter className="w-4 h-4" />
                    <span className="text-xs font-medium hidden sm:inline">Filter</span>
                  </button>
                </div>
                {showSearch && (
                  <SearchDropdown 
                    query={searchQuery} 
                    onClose={() => setShowSearch(false)}
                    onSelect={(anime) => {
                      navigate(`/anime/${anime.id}`);
                      setShowSearch(false);
                      setSearchQuery('');
                    }}
                  />
                )}
              </div>
            </div>

            {/* Right side - Navigation and Actions */}
            <div className="flex items-center space-x-6">
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-6 text-sm">
                <button className="text-gray-300 hover:text-white transition-colors duration-200">
                  Watch2gether
                </button>
                <button className="text-gray-300 hover:text-white transition-colors duration-200">
                  Random
                </button>
                <button className="text-gray-300 hover:text-white transition-colors duration-200">
                  Anime Name
                </button>
                <button className="text-gray-300 hover:text-white transition-colors duration-200">
                  News
                </button>
                <button className="text-gray-300 hover:text-white transition-colors duration-200">
                  Community
                </button>
              </div>

              {/* Language and User */}
              <div className="flex items-center space-x-2">
                <div className="hidden md:flex items-center space-x-1">
                  <button className="bg-slate-700 text-white px-2 py-1 rounded text-xs">EN</button>
                  <button className="bg-slate-700 text-white px-2 py-1 rounded text-xs">JP</button>
                </div>
                <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
                  <Bell className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => navigate('/profile')}
                  className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <User className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Navbar;