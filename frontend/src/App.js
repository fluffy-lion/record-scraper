import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Saved from './pages/Saved';
import Navbar from './components/Navbar/Navbar';
import { useState, useEffect, useMemo } from 'react';
import React from 'react'

import { useMediaQueries } from './media/mediaQueries';

const App = () => {
  
  // function ResponsiveComponent() {
  //   const { md, lg } = useMediaQueries();
  
  //   if (lg) {
  //     return <p>Desktop device</p>;
  //   }
  //   if (md) {
  //     return <p>Tablet device</p>;
  //   }
  //   return <p>Mobile device</p>;
  // }
  return (
    <div>
      <BrowserRouter>
        <Navbar />
      
        <Routes>
          <Route 
            path='/'
            element={<Home />}
          />
          <Route 
            path='/saved'
            element={<Saved />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}



export default App;
