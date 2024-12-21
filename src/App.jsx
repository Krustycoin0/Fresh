import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TokenTable from './components/TokenTable';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4">All Coins</h2>
          <TokenTable />
      </div>
      <Footer />
    </div>
  );
}

export default App;
