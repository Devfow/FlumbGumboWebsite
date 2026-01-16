import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import StabilityTracker from './components/StabilityTracker';
import HomePage from './pages/HomePage';
import LabPage from './pages/LabPage';
import GalleryPage from './pages/GalleryPage';
import PreAdoptionPage from './pages/PreAdoptionPage';
import backgroundImage from './assets/backgroundtile.png';

function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'repeat' }}>
        <StabilityTracker />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/lab" element={<LabPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/pre-adoption" element={<PreAdoptionPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;