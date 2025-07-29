import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Play, Heart, Bell, Settings, List, Edit3, Key } from 'lucide-react';
import Footer from '../components/Footer';

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: 'LusiferAK207',
    email: 'anveshsrivastava09@gmail.com',
    joinDate: '2022-12-26',
    verified: false
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'continue', label: 'Continue Watching', icon: Play },
    { id: 'watchlist', label: 'Watch List', icon: Heart },
    { id: 'notifications', label: 'Notification', icon: Bell },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'mal', label: 'MAL', icon: List }
  ];

  const continueWatching = [
    {
      id: 1,
      title: 'Attack on Titan',
      episode: 'Episode 15',
      progress: 65,
      image: 'https://images.pexels.com/photos/7991465/pexels-photo-7991465.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 2,
      title: 'Demon Slayer',
      episode: 'Episode 8',
      progress: 30,
      image: 'https://images.pexels.com/photos/8838492/pexels-photo-8838492.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 3,
      title: 'Jujutsu Kaisen',
      episode: 'Episode 12',
      progress: 80,
      image: 'https://images.pexels.com/photos/7991461/pexels-photo-7991461.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const watchList = [
    {
      id: 4,
      title: 'One Piece',
      status: 'Plan to Watch',
      image: 'https://images.pexels.com/photos/8838501/pexels-photo-8838501.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 5,
      title: 'Naruto',
      status: 'Watching',
      image: 'https://images.pexels.com/photos/7991431/pexels-photo-7991431.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 6,
      title: 'Death Note',
      status: 'Completed',
      image: 'https://images.pexels.com/photos/8838494/pexels-photo-8838494.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-slate-900">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-2">Hi, {userInfo.username}</h1>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center border-b border-slate-700 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors duration-200 border-b-2 ${
                  activeTab === tab.id
                    ? 'text-pink-400 border-pink-400'
                    : 'text-gray-400 border-transparent hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="pb-12">
          {activeTab === 'profile' && (
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
                  <User className="w-6 h-6" />
                  <span>Edit Profile</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Profile Form */}
                <div className="lg:col-span-2 bg-slate-800 rounded-lg p-6">
                  <div className="space-y-6">
                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        value={userInfo.email}
                        onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                        className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg border border-slate-600 focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                        disabled={!isEditing}
                      />
                      {!userInfo.verified && (
                        <div className="mt-2 p-3 bg-slate-900 rounded-lg">
                          <div className="flex items-center text-yellow-400 text-sm mb-1">
                            <span className="mr-2">⚠</span>
                            <span>Not Verified</span>
                          </div>
                          <p className="text-gray-300 text-sm">
                            Your account has not been verified. 
                            <button className="text-pink-400 hover:text-pink-300 ml-1">
                              Click here to resend verification email.
                            </button>
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Username */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        YOUR NAME
                      </label>
                      <input
                        type="text"
                        value={userInfo.username}
                        onChange={(e) => setUserInfo({...userInfo, username: e.target.value})}
                        className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg border border-slate-600 focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                        disabled={!isEditing}
                      />
                    </div>

                    {/* Join Date */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        JOINED
                      </label>
                      <div className="bg-slate-700 text-gray-400 px-4 py-3 rounded-lg">
                        {userInfo.joinDate}
                      </div>
                    </div>

                    {/* Change Password */}
                    <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200">
                      <Key className="w-4 h-4" />
                      <span>Change password</span>
                    </button>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      {isEditing ? (
                        <>
                          <button
                            onClick={() => setIsEditing(false)}
                            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setIsEditing(false)}
                            className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200"
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => setIsEditing(true)}
                          className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 flex items-center space-x-2"
                        >
                          <Edit3 className="w-4 h-4" />
                          <span>Edit Profile</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Profile Picture */}
                <div className="bg-slate-800 rounded-lg p-6">
                  <div className="text-center">
                    <div className="relative inline-block mb-4">
                      <img
                        src="https://images.pexels.com/photos/7991422/pexels-photo-7991422.jpeg?auto=compress&cs=tinysrgb&w=150"
                        alt="Profile"
                        className="w-24 h-24 rounded-full object-cover"
                      />
                      <button className="absolute bottom-0 right-0 bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-full transition-colors duration-200">
                        <Edit3 className="w-3 h-3" />
                      </button>
                    </div>
                    <h3 className="text-white font-medium">{userInfo.username}</h3>
                    <p className="text-gray-400 text-sm">Member since {userInfo.joinDate}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'continue' && (
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-6">Continue Watching</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {continueWatching.map((anime) => (
                  <div key={anime.id} className="bg-slate-800 rounded-lg overflow-hidden hover:bg-slate-700 transition-colors duration-200">
                    <div className="relative">
                      <img
                        src={anime.image}
                        alt={anime.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <div className="w-full bg-gray-600 rounded-full h-1 mb-2">
                          <div 
                            className="bg-pink-500 h-1 rounded-full" 
                            style={{ width: `${anime.progress}%` }}
                          ></div>
                        </div>
                        <p className="text-white text-sm">{anime.progress}% watched</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-medium mb-1">{anime.title}</h3>
                      <p className="text-gray-400 text-sm">{anime.episode}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'watchlist' && (
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-6">Watch List</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {watchList.map((anime) => (
                  <div key={anime.id} className="bg-slate-800 rounded-lg overflow-hidden hover:bg-slate-700 transition-colors duration-200">
                    <img
                      src={anime.image}
                      alt={anime.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-white font-medium mb-1">{anime.title}</h3>
                      <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                        anime.status === 'Completed' ? 'bg-green-600 text-white' :
                        anime.status === 'Watching' ? 'bg-blue-600 text-white' :
                        'bg-gray-600 text-white'
                      }`}>
                        {anime.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(activeTab === 'notifications' || activeTab === 'settings' || activeTab === 'mal') && (
            <div className="max-w-4xl mx-auto text-center py-12">
              <div className="text-gray-400">
                <div className="text-6xl mb-4">🚧</div>
                <h3 className="text-xl font-medium text-white mb-2">Coming Soon</h3>
                <p>This section is under development.</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;