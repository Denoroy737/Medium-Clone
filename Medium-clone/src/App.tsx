import Header from './Components/Header'
import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Hero_Header from './Components/Hero_Header';

const App = () => {
  return (
    <div className='mx-auto'>
        <BrowserRouter>
        <Header />
        <Hero_Header />
        <Routes>
          {/* <Route path="/" element={<Ap />} /> */}
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
