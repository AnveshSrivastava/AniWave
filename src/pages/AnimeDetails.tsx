import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Play, Plus, Star, Calendar, Clock, Users, Share2 } from 'lucide-react';
import { mockAnime } from '../data/mockData';
import AnimeCard from '../components/AnimeCard';
import Footer from '../components/Footer';

const AnimeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Find the anime by id (in real app, this would be an API call)
  const anime = mockAnime.find(a => a.id === parseInt(id!)) || mockAnime[0];
  const recommendedAnime = mockAnime.slice(0, 6);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'episodes', label: 'Episodes' },
    { id: 'characters', label: 'Characters' },
    { id: 'reviews', label: 'Reviews' }
  ];

  const episodes = Array.from({ length: 24 }, (_, i) => ({
    number: i + 1,
    title: `Episode ${i + 1}`,
    duration: '24m',
    watched: i < 5
  }));

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <div
          className="h-96 bg-cover bg-center"
          style={{
            backgroundImage: `url(${anime.banner || anime.image})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end space-y-6 md:space-y-0 md:space-x-8">
            <img
              src={anime.image}
              alt={anime.title}
              className="w-48 h-64 object-cover rounded-lg shadow-2xl"
            />
            
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-white mb-4">{anime.title}</h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-green-600 text-white px-3 py-1 rounded text-sm font-medium">HD</span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium">{anime.type}</span>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-white font-medium">{anime.rating}</span>
                </div>
              </div>

              <div className="flex items-center space-x-6 text-gray-300 text-sm mb-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{anime.year}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>23m</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>TV Series</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => navigate(`/watch/${anime.id}`)}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full flex items-center space-x-2 transition-all duration-200 transform hover:scale-105"
                >
                  <Play className="w-5 h-5" />
                  <span className="font-medium">Watch now</span>
                </button>
                <button className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-colors duration-200">
                  <Plus className="w-5 h-5" />
                  <span>Add to List</span>
                </button>
                <button className="bg-slate-700 hover:bg-slate-600 text-white p-3 rounded-full transition-colors duration-200">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex border-b border-slate-700 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 font-medium transition-colors duration-200 border-b-2 ${
                    activeTab === tab.id
                      ? 'text-pink-400 border-pink-400'
                      : 'text-gray-400 border-transparent hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="text-gray-300">
              {activeTab === 'overview' && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Synopsis</h3>
                  <p className="leading-relaxed mb-6">
                    Kou Yamori is an average middle school student who struggles with grasping the complex concept 
                    of love. Because he sees little sense in surrendering to the norm, he soon stops going to school. 
                    Plagued with insomnia due to his idleness, Kou begins roaming the lonesome city at night.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Status:</span>
                      <span className="ml-2 text-white">Finished Airing</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Studios:</span>
                      <span className="ml-2 text-white">LIDENFILMS</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Genres:</span>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {['Romance', 'Shounen', 'Supernatural'].map((genre) => (
                          <span key={genre} className="bg-slate-700 text-white px-2 py-1 rounded text-xs">
                            {genre}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'episodes' && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Episodes</h3>
                  <div className="grid gap-2">
                    {episodes.map((episode) => (
                      <button
                        key={episode.number}
                        onClick={() => navigate(`/watch/${anime.id}?ep=${episode.number}`)}
                        className="flex items-center justify-between p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200 text-left"
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                            episode.watched ? 'bg-pink-500 text-white' : 'bg-slate-600 text-gray-300'
                          }`}>
                            {episode.number}
                          </div>
                          <span className="text-white">{episode.title}</span>
                        </div>
                        <span className="text-gray-400 text-sm">{episode.duration}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'characters' && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Characters</h3>
                  <p className="text-gray-400">Character information will be available soon.</p>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Reviews</h3>
                  <p className="text-gray-400">No reviews yet. Be the first to review this anime!</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Japanese:</span>
                  <span className="text-white">よふかしのうた</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Aired:</span>
                  <span className="text-white">Jul 8, 2022 to Sep 30, 2022</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Premiered:</span>
                  <span className="text-white">Summer 2022</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Duration:</span>
                  <span className="text-white">23m</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">MAL Score:</span>
                  <span className="text-white">8.03</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Recommended for you</h3>
              <div className="grid grid-cols-2 gap-3">
                {recommendedAnime.map((anime) => (
                  <AnimeCard key={anime.id} anime={anime} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AnimeDetails;