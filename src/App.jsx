
import React from 'react';
import Home from './pages/Home'
import Customizer from './pages/Customizer'
import Canvas from './Canvas'
import {BrowserRouter, Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <main className='app transition-all ease-in bg-white overflow-y-scroll' >
      <Home/>
      <Customizer/>
    </main>
  );
}

export default App;
