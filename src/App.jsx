// App.jsx

import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Spinner from './components/Spinner';


// Lazy-loaded components
const Home = lazy(() => import('./pages/Home'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const MoreAboutMe = lazy(() => import('./pages/More_about_me'));
const Contact = lazy(() => import('./pages/Contact'));
const Skills = lazy(() => import('./pages/Skills'));
const Services = lazy(() => import('./pages/Services'));
const Header = lazy(() => import('./pages/Header'));
const Footer = lazy(() => import('./pages/Footer'));
const About = lazy(() => import('./pages/About')); // Import About component


function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/more-about-me" element={<MoreAboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} /> {/* Route for About component */}
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
