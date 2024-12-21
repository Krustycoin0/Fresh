import React from 'react';

function Hero() {
    return (
    <div className="bg-gray-700 py-12">
        <div className="container mx-auto px-4 flex items-center">
        <div className="w-1/2">
            <h2 className="text-3xl font-bold mb-4">Discover the Latest Crypto Coins</h2>
            <p className="mb-8">Explore new projects and track the hottest cryptocurrencies.</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Explore Coins</button>
        </div>
            <div className="w-1/2">
                <img src="https://via.placeholder.com/500x300" alt="Hero Image" className="rounded-lg shadow-lg" />
            </div>
        </div>
    </div>
  );
}

export default Hero;
