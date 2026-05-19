import React, { useEffect, useState, useRef } from 'react'
import './App.css'
import './LoveLetter.css'
import './BookCanvas.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import Layout from './layout/Layout'
import Home from './pages/Home'
import LoveLetter from './pages/LoveLetter'
import Test from './pages/Test'
import OpeningAnimation from './components/OpeningAnimation'
import backgroundMusic from './assets/bdsong.mp3'

const App = () => {
  const audioRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);


  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => { });
        window.removeEventListener('click', playAudio);
        window.removeEventListener('touchstart', playAudio);
      }
    };
    window.addEventListener('click', playAudio);
    window.addEventListener('touchstart', playAudio);
    return () => {
      window.removeEventListener('click', playAudio);
      window.removeEventListener('touchstart', playAudio);
    };
  }, []);


  useEffect(() => {

    const startSequence = () => {
      setTimeout(() => setAnimateOut(true), 8400);
      setTimeout(() => setShowContent(true), 8600);
      setTimeout(() => setLoading(false), 9000);
    };


    startSequence();

  }, []);


  const MyRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='love-Letter' element={<LoveLetter />} />
        <Route path='test' element={<Test />} />
      </Route>
    )
  );

  return (
    <div className="app-container">
      <audio ref={audioRef} src={backgroundMusic} loop />
      {loading && <OpeningAnimation animateOut={animateOut} />}

      {showContent && <RouterProvider router={MyRoute} />}
    </div>
  );
};

export default App;