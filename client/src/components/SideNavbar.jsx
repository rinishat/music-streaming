import React from 'react';
import { Home, Search, Library } from 'lucide-react'; // You can use any icon library

const SideNavbar = () => {
  return (
    <div className="bg-gray-900 w-64 h-screen p-4 text-white">
      <nav className="space-y-4">
        <a href="/" className="flex items-center text-gray-300 hover:text-white p-3 rounded-lg">
          <Home className="w-5 h-5 mr-4" />
          <span>Home</span>
        </a>
        <a href="/search" className="flex items-center text-gray-300 hover:text-white p-3 rounded-lg">
          <Search className="w-5 h-5 mr-4" />
          <span>Search</span>
        </a>
        <a href="/playlists" className="flex items-center text-gray-300 hover:text-white p-3 rounded-lg">
          <Library className="w-5 h-5 mr-4" />
          <span>Playlists</span>
        </a>
      </nav>
    </div>
  );
};

export default SideNavbar;
