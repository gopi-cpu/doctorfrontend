import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import { BrowserRouter,Routes,Route, Router } from 'react-router-dom';
import Register from './components/register';
import Loginpage from './components/login';
import Homepage from './components/homepage';
import Doctorlistening from './components/doctorlisting';



function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Register />}/>
    <Route path='/loginpage' element={<Loginpage />} />
    <Route path='/homepage' element={<Homepage/>}/>
    <Route path='/doctor' element={<Doctorlistening />} />
  </Routes> 
  </BrowserRouter>
  );
}

export default App;
