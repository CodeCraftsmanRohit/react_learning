import React from 'react';

const Card = ({username,btntxt="visitme"}) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800">
      <img
        className="w-full h-48 object-cover"
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
        alt="Sample Image"
      />
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{username}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          This is a simple card component built with Tailwind CSS. You can customize it as you like!
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Action
        </button>
      </div>
    </div>
  );
};

export default Card;
