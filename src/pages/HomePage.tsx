import React from 'react';
import { Link } from 'react-router-dom';
import InteractiveGumbo from '../components/home/InteractiveGumbo';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>The Projection Zone</h1>
      <h2>They Traveled 4 Dimensions Just to Meet You.</h2>
      <p>Welcome to Phase Space Four. Discover Flumb Gumbo: unique, handmade pop-art blind boxes. Explore the lore of the 'Dimensional Crush' and adopt your own squishy interdimensional friend. Handmade 4D friends for a 3D world. Every Flumb Gumbo is a crushed projection of a higher-dimensional idea, stabilized for adoption. The search for the missing flavor ends here.</p>
      <InteractiveGumbo />
      <Link to="/pre-adoption" className="cta-button">Adopt a Projection (Shop Blind Boxes)</Link>
    </div>
  );
};

export default HomePage;