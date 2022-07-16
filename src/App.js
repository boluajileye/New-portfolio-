import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { Error } from './pages/Error';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path="/contact" element={<Contact/>} />
      <Route path="/*" element={<Error/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
