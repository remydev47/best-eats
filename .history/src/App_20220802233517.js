import React from 'react'
import Navbar from './components/Navbar'
import './App.css';
import HeroBanner from './components/HeroBanner';
import HeaderCard from './components/HeaderCard';

function App() {
  return (
    <div>
      <Navbar />
     <HeroBanner /> 
     <HeaderCard />
     <Food />
    </div>
  );
}

export default App;
