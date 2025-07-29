import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, Play } from 'lucide-react';

const ComingSoon = () => {
  const [currentDate, setCurrentDate] = useState(0);

  const schedule = [
    {
      day: 'Tue',
      date: 'Jun 10',
      episodes: [
        { time: '06:30', title: 'Miru: Paths to My Future', episode: 'Episode 5' },
        { time: '06:30', title: 'Himitsu no AiPri 2nd Season', episode: 'Episode 10' },
        { time: '19:00', title: 'The Children of Shiunji Family', episode: 'Episode 10' },
        { time: '20:30', title: 'Once Upon a Witch\'s Death', episode: 'Episode 11' },
        { time: '21:30', title: 'Mobile Suit Gundam GQuuuuuuX', episode: 'Episode 10' },
        { time: '22:00', title: 'The Catcher in the Ballpark!', episode: 'Episode 11' }
      ]
    },
    {
      day: 'Wed',
      date: 'Jun 11',
      episodes: [
        { time: '07:00', title: 'Demon Slayer: Kimetsu no Yaiba', episode: 'Episode 8' },
        { time: '18:30', title: 'Attack on Titan Final Season', episode: 'Episode 12' },
        { time: '20:00', title: 'Jujutsu Kaisen Season 2', episode: 'Episode 15' }
      ]
    },
    {
      day: 'Thu',
      date: 'Jun 12',
      episodes: [
        { time: '08:00', title: 'One Piece', episode: 'Episode 1122' },
        { time: '19:30', title: 'My Hero Academia', episode: 'Episode 25' }
      ]
    },
    {
      day: 'Fri',
      date: 'Jun 13',
      episodes: [
        { time: '09:00', title: 'Chainsaw Man', episode: 'Episode 13' },
        { time: '21:00', title: 'Spy x Family', episode: 'Episode 20' }
      ]
    },
    {
      day: 'Sat',
      date: 'Jun 14',
      episodes: [
        { time: '10:00', title: 'Tokyo Ghoul: re', episode: 'Episode 24' },
        { time: '22:30', title: 'Bleach: TYBW', episode: 'Episode 30' }
      ]
    },
    {
      day: 'Sun',
      date: 'Jun 15',
      episodes: [
        { time: '11:00', title: 'Naruto Shippuden', episode: 'Episode 720' },
        { time: '20:00', title: 'Dragon Ball Super', episode: 'Episode 131' }
      ]
    },
    {
      day: 'Mon',
      date: 'Jun 16',
      episodes: [
        { time: '07:30', title: 'Hunter x Hunter', episode: 'Episode 149' },
        { time: '19:00', title: 'Fullmetal Alchemist', episode: 'Episode 65' }
      ]
    }
  ];

  const upcomingAnime = [
    {
      title: 'The Eminence in Shadow Season 3',
      image: 'https://images.pexels.com/photos/7991422/pexels-photo-7991422.jpeg?auto=compress&cs=tinysrgb&w=300',
      releaseDate: 'Summer 2025'
    },
    {
      title: 'Attack on Titan: The Final Chapters',
      image: 'https://images.pexels.com/photos/7991465/pexels-photo-7991465.jpeg?auto=compress&cs=tinysrgb&w=300',
      releaseDate: 'Fall 2025'
    },
    {
      title: 'Demon Slayer: Infinity Castle Arc',
      image: 'https://images.pexels.com/photos/8838492/pexels-photo-8838492.jpeg?auto=compress&cs=tinysrgb&w=300',
      releaseDate: 'Winter 2025'
    },
    {
      title: 'Jujutsu Kaisen Season 3',
      image: 'https://images.pexels.com/photos/7991461/pexels-photo-7991461.jpeg?auto=compress&cs=tinysrgb&w=300',
      releaseDate: 'Spring 2026'
    },
    {
      title: 'One Piece: Gear 5 Arc',
      image: 'https://images.pexels.com/photos/8838501/pexels-photo-8838501.jpeg?auto=compress&cs=tinysrgb&w=300',
      releaseDate: 'Ongoing'
    },
    {
      title: 'Chainsaw Man: Reze Arc',
      image: 'https://images.pexels.com/photos/8838491/pexels-photo-8838491.jpeg?auto=compress&cs=tinysrgb&w=300',
      releaseDate: 'Summer 2025'
    }
  ];

  const nextDate = () => {
    setCurrentDate((prev) => (prev + 1) % schedule.length);
  };

  const prevDate = () => {
    setCurrentDate((prev) => (prev - 1 + schedule.length) % schedule.length);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Estimated Schedule */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Estimated Schedule</h2>
          <div className="flex items-center space-x-2 text-gray-400">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">(GMT+05:30) 10/06/2025 11:00:37 PM</span>
          </div>
        </div>

        {/* Date Navigation */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={prevDate}
            className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex space-x-2 overflow-x-auto">
            {schedule.map((day, index) => (
              <button
                key={index}
                onClick={() => setCurrentDate(index)}
                className={`px-4 py-2 rounded-lg text-center min-w-[80px] transition-colors duration-200 ${
                  currentDate === index
                    ? 'bg-pink-500 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                <div className="font-medium">{day.day}</div>
                <div className="text-sm">{day.date}</div>
              </button>
            ))}
          </div>

          <button
            onClick={nextDate}
            className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Episodes List */}
        <div className="bg-slate-800 rounded-lg p-6">
          <div className="space-y-4">
            {schedule[currentDate].episodes.map((episode, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors duration-200">
                <div className="flex items-center space-x-4">
                  <div className="text-gray-400 text-sm font-mono">{episode.time}</div>
                  <div>
                    <div className="text-white font-medium">{episode.title}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-pink-400 text-sm">▶ {episode.episode}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Upcoming */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Top Upcoming</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {upcomingAnime.map((anime, index) => (
            <div key={index} className="group relative bg-slate-800 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={anime.image}
                  alt={anime.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Coming Soon Badge */}
                <div className="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium">
                  Coming Soon
                </div>

                {/* Play Button */}
                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Play className="w-4 h-4" />
                  </div>
                </button>
              </div>

              <div className="p-3">
                <h3 className="text-white font-medium text-sm mb-1 line-clamp-2 group-hover:text-pink-400 transition-colors duration-200">
                  {anime.title}
                </h3>
                <div className="text-gray-400 text-xs">{anime.releaseDate}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;