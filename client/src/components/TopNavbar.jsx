import React from 'react';

const TopNavbar = () => {
  return (
    <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Music App</h1>
      <a href="/login" className="text-lg hover:text-green-300">Login</a>
    </div>
  );
};

export default TopNavbar;
