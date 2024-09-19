import { useState } from 'react';
import './index.css';
import { CssBaseline } from '@mui/material';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import {Actors,Movies,MovieInformation,Profile,Navbar} from './components/index'
function App() {

  return (
    <>
     <BrowserRouter>
    <main>
    <Navbar/>
      <Routes>
      <Route path='/' element={<Movies/>} />
      <Route path='/movie/:id' element={<MovieInformation/>} />
      <Route path='/actors/:id' element={<Actors/>} />
      <Route path='/profile/:id' element={<Profile/>} />
      </Routes>
    </main>
    </BrowserRouter>
    </>
  )
  
}

export default App
