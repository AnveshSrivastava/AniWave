import React, { useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Play, Pause, Volume2, Maximize, Settings, SkipBack, SkipForward } from 'lucide-react';
import { mockAnime } from '../data/mockData';
import Footer from '../components/Footer';

const VideoPlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentEpisode, setCurrentEpisode] = useState(parseInt(searchParams.get('ep') || '1'));

  const anime = mockAnime.find(a => a.id === parseInt(id!)) || mockAnime[0];
  
  const episodes = Array.from({ length: 24 }, (_, i) => ({
    number: i + 1,
    title: `Episode ${i + 1}: ${i === 0 ? '1st night: night flight' : `Part ${i + 1}`}`,
    duration: '24m'
  }));

  const currentEp = episodes.find(ep => ep.number === currentEpisode) || episodes[0];

  return (
    <div className="pt-16 min-h-screen bg-slate-900">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <button onClick={() => navigate('/')} className="hover:text-white">Home</button>
          <span>•</span>
          <button onClick={() => navigate(`/anime/${anime.id}`)} className="hover:text-white">
            {anime.title}
          </button>
          <span>•</span>
          <span className="text-white">Watching {currentEp.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Episode List */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-slate-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">List of episodes:</h3>
                <div className="text-sm text-gray-400">{episodes.length} episodes</div>
              </div>
              
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {episodes.map((episode) => (
                  <button
                    key={episode.number}
                    onClick={() => setCurrentEpisode(episode.number)}
                    className={`w-full flex items-center space-x-3 p-2 rounded transition-colors duration-200 text-left ${
                      currentEpisode === episode.number
                        ? 'bg-pink-500 text-white'
                        : 'text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                      currentEpisode === episode.number ? 'bg-white text-pink-500' : 'bg-slate-600'
                    }`}>
                      {episode.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="truncate text-sm">{episode.title}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Video Player and Info */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            {/* Video Player */}
            <div className="relative bg-black rounded-lg overflow-hidden mb-6">
              <div className="aspect-video flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-4">
                    <Play className="w-8 h-8" />
                  </div>
                  <p className="text-gray-300">Video player would be integrated here</p>
                  <p className="text-sm text-gray-400 mt-2">Currently showing: {currentEp.title}</p>
                </div>
              </div>

              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="text-white hover:text-pink-400 transition-colors duration-200"
                    >
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                    </button>
                    <button className="text-white hover:text-pink-400 transition-colors duration-200">
                      <SkipBack className="w-5 h-5" />
                    </button>
                    <button className="text-white hover:text-pink-400 transition-colors duration-200">
                      <SkipForward className="w-5 h-5" />
                    </button>
                    <button className="text-white hover:text-pink-400 transition-colors duration-200">
                      <Volume2 className="w-5 h-5" />
                    </button>
                    <span className="text-white text-sm">00:00 / 23:45</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="text-white hover:text-pink-400 transition-colors duration-200">
                      <Settings className="w-5 h-5" />
                    </button>
                    <button className="text-white hover:text-pink-400 transition-colors duration-200">
                      <Maximize className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-600 rounded-full h-1 mt-4">
                  <div className="bg-pink-500 h-1 rounded-full" style={{ width: '35%' }}></div>
                </div>
              </div>
            </div>

            {/* Anime Info */}
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <img
                  src={anime.image}
                  alt={anime.title}
                  className="w-20 h-28 object-cover rounded"
                />
                
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-white mb-2">{anime.title}</h1>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">HD</span>
                    <span className="text-gray-300">{anime.type}</span>
                    <span className="text-gray-300">23m</span>
                    <div className="flex items-center">
                      <span className="text-yellow-400 mr-1">★</span>
                      <span className="text-white">{anime.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Kou Yamori is an average middle school student who struggles with grasping the complex concept 
                    of love. Because he sees little sense in surrendering to the norm, he soon stops going to school.
                  </p>

                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => currentEpisode > 1 && setCurrentEpisode(currentEpisode - 1)}
                      disabled={currentEpisode === 1}
                      className="bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded transition-colors duration-200"
                    >
                      Previous Episode
                    </button>
                    <button
                      onClick={() => currentEpisode < episodes.length && setCurrentEpisode(currentEpisode + 1)}
                      disabled={currentEpisode === episodes.length}
                      className="bg-pink-500 hover:bg-pink-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded transition-colors duration-200"
                    >
                      Next Episode
                    </button>
                    <button
                      onClick={() => navigate(`/anime/${anime.id}`)}
                      className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded transition-colors duration-200 flex items-center space-x-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>View Detail</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-slate-800 rounded-lg p-6 mt-6">
              <h3 className="text-xl font-semibold text-white mb-4">Comments</h3>
              <div className="text-gray-400 text-center py-8">
                <p>No comments yet. Be the first to share your thoughts!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default VideoPlayer;