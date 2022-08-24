import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Homepage from './components/Homepage';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Homepage/>}/>
      <Route path='projects' element={<Projects/>}/>
      <Route path='contact'/>
    </Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
