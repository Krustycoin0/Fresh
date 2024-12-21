import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">FreshCoins</h1>
        <nav>
            <ul className="flex space-x-4">
               <li><a href="#" className="hover:text-gray-300">Home</a></li>
               <li><a href="#" className="hover:text-gray-300">About</a></li>
               <li><a href="#" className="hover:text-gray-300">Contact</a></li>
             </ul>
        </nav>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Connect Wallet</button>
      </div>
    </header>
  );
}

export default Header;
