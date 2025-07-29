import React, { useState, useEffect } from 'react';
import { mockAnime } from '../data/mockData';

interface SearchDropdownProps {
  query: string;
  onClose: () => void;
  onSelect: (anime: any) => void;
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({ query, onClose, onSelect }) => {
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query.length > 0) {
        const filtered = mockAnime.filter(anime =>
          anime.title.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 5);
        setResults(filtered);
      } else {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  if (results.length === 0 && query.length === 0) return null;

  return (
    <div className="absolute top-full mt-2 w-full bg-slate-800 rounded-lg shadow-xl border border-slate-700 overflow-hidden z-50">
      {results.length === 0 ? (
        <div className="p-4 text-gray-400 text-center">No results found</div>
      ) : (
        <div className="max-h-64 overflow-y-auto">
          {results.map((anime) => (
            <button
              key={anime.id}
              onClick={() => onSelect(anime)}
              className="w-full flex items-center p-3 hover:bg-slate-700 transition-colors duration-200 text-left"
            >
              <img
                src={anime.image}
                alt={anime.title}
                className="w-12 h-16 object-cover rounded mr-3"
              />
              <div>
                <div className="text-white font-medium">{anime.title}</div>
                <div className="text-gray-400 text-sm">{anime.year} • {anime.type}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;