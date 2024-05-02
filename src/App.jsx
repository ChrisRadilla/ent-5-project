import './App.css'
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Pokedex from './pages/Pokedex';
import PokeInfo from './pages/PokeInfo';
import ProtectedRouters from './pages/ProtectedRouters';
import sound from './assets/Pokemon_Red.mp3'

function App() {
  const [value, setValue] = useState(0);
  const [audioElement, setAudioElement] = useState(null); // State to hold the audio element

  useEffect(() => {
    play();
  }, [value]);

  function play() {
    if (!audioElement || audioElement.paused) {
      const audio = new Audio(sound);
      audio.loop = true; // Set loop attribute to true
      audio.play();
      setAudioElement(audio); // Store the audio element in state
    }
  }
  
  function stop() {
    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0; // Reset audio playback to the beginning
    }
  }

  return (
    <div>
      <div className='container_outside2'>
        <div className='inside_container2'>   
          <h1 className='pokemon_title '>PoKeDeX</h1>
        </div>
        <div className='inside_container3'>
          <div className='pokedex_img'></div>
        </div>
      </div>
      
      <div className='parent_container'>
            <button className='btn_play' onClick={() => setValue(value + 1)}><ion-icon name="play-circle-outline"></ion-icon></button>
              <button className='btn_stop' onClick={stop}><ion-icon name="stop-circle-outline"></ion-icon></button>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<ProtectedRouters />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<PokeInfo />} />
        </Route>
      </Routes>
      <footer className="footer">
            Designed and Developed by Christopher.🐉 
          </footer>
    </div>
  );
}

export default App;
