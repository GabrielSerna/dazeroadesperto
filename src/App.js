import React from 'react';
import Navbar from './Navbar';
import About from './About.js';
import Contact from './Contact.js';
import Details from './Details';
import ErrorPage from './ErrorPage.js';
import Home from './Home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const app = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/details/:id" element={<Details />}></Route>
          <Route path="/*" element={<ErrorPage />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default app