import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import SideNavbar from './components/SideNavbar';
import Home from './pages/Home';
import Search from './pages/Search';
import Playlists from './pages/Playlists';
import Login from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <SideNavbar />
        <div className="flex-1 flex flex-col">
          <TopNavbar />
          <div className="p-6 bg-gray-100 flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/playlists" element={<Playlists />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
