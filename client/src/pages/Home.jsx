import React from 'react';

const Home = () => {
  const playlists = [
    {
      id: 1,
      title: 'Chill Beats',
      description: 'Relax and unwind with these smooth tunes.',
      image: 'https://via.placeholder.com/300x200/4B8BBE/FFFFFF?text=Chill+Beats',
    },
    {
      id: 2,
      title: 'Top Hits',
      description: 'The hottest hits of the week.',
      image: 'https://via.placeholder.com/300x200/F49D1A/FFFFFF?text=Top+Hits',
    },
    {
      id: 3,
      title: 'Workout Playlist',
      description: 'Get pumped up with these high-energy tracks.',
      image: 'https://via.placeholder.com/300x200/F34C7E/FFFFFF?text=Workout+Playlist',
    },
  ];

  const genres = [
    { name: 'Pop', color: '#FF3E30' },
    { name: 'Hip-Hop', color: '#D81B60' },
    { name: 'Rock', color: '#3C9BE2' },
    { name: 'Jazz', color: '#FFB300' },
    { name: 'Classical', color: '#6F35A5' },
  ];

  return (
    <div className="p-8 bg-blue-300">
      <div className="relative h-64 mb-8 overflow-hidden rounded-lg">
       
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold">Discover Your Sound</h1>
          {/* <p className="mt-2 text-lg">Explore thousands of songs and playlists tailored just for you.</p> */}
        </div>
      </div>
      <h2 className="text-3xl font-semibold mb-4">Featured Playlists</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
            <img src={playlist.image} alt={playlist.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{playlist.title}</h3>
              <p className="text-gray-600">{playlist.description}</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Listen
              </button>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Home;
