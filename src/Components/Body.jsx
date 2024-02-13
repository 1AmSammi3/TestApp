import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Input from './Input'; 
import Hero from './Hero';
import Style from './Body.css';

const Body = () => {

  return (
  <div className="all">
    <Navbar />
    <Hero />
    <h1>We've got a meme builder!</h1>
    <p>Put your input below to generate one</p>
    <Input />
  </div>
  );
}

export default Body;