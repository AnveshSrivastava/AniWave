import React from 'react';
import { MessageSquare, Send, Share2, Twitter } from 'lucide-react';

const Footer = () => {
  const alphabetLetters = [
    'All', '#', '0-9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      {/* Social Icons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            h!anime
          </div>
          <div className="flex items-center space-x-3">
            <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-200">
              <MessageSquare className="w-5 h-5 text-white" />
            </button>
            <button className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-200">
              <Send className="w-5 h-5 text-white" />
            </button>
            <button className="w-10 h-10 bg-orange-600 hover:bg-orange-700 rounded-full flex items-center justify-center transition-colors duration-200">
              <Share2 className="w-5 h-5 text-white" />
            </button>
            <button className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-200">
              <Twitter className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* A-Z List */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-white mb-2">A-Z LIST</h3>
            <p className="text-gray-400 text-sm">Searching anime order by alphabet name A to Z.</p>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {alphabetLetters.map((letter) => (
              <button
                key={letter}
                className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white rounded transition-colors duration-200 text-sm font-medium"
              >
                {letter}
              </button>
            ))}
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-4">
            <button className="hover:text-white transition-colors duration-200">Terms of service</button>
            <button className="hover:text-white transition-colors duration-200">DMCA</button>
            <button className="hover:text-white transition-colors duration-200">Contact</button>
            <button className="hover:text-white transition-colors duration-200">HiAnime App</button>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500">
            <p className="mb-2">
              HiAnime does not store any files on our server, we only linked to the media which is hosted on 3rd party services.
            </p>
            <p>© HiAnime.to. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;