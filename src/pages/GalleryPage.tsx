import React from 'react';
import './GalleryPage.css';

const GalleryPage = () => {
    const projections = [
        { name: 'Standard Pink', color: '#ff1493', rarity: 'Common' },
        { name: 'Standard Green', color: '#32cd32', rarity: 'Common' },
        { name: 'Standard Yellow', color: '#ccff00', rarity: 'Common' },
        { name: 'Standard Purple', color: '#800080', rarity: 'Common' },
        { name: 'Mystery Gumbo', color: '#483d8b', rarity: 'Rare', mystery: true },
        { name: 'Standard Blue', color: '#0000ff', rarity: 'Common' },
        { name: 'Glow Gumbo', color: '#abff4f', rarity: 'Rare', glow: true },
        { name: 'Translucent Gumbo', color: 'rgba(255, 255, 255, 0.5)', rarity: 'Rare', translucent: true },
        { name: 'Golden Gumbo', color: '#ffd700', rarity: 'Ultra-Rare', golden: true },
    ];

  return (
    <div className="gallery-page">
      <h1>The Specimen Gallery</h1>
      <p>Each projection is a unique stabilization of a 4D entity. While all are special, some stabilizations are more improbable than others.</p>
      <div className="gallery-grid">
        {projections.map(proj => (
            <div key={proj.name} className="gallery-item">
                <div 
                    className={`specimen-display ${proj.glow ? 'glow' : ''} ${proj.translucent ? 'translucent' : ''} ${proj.golden ? 'golden' : ''} ${proj.mystery ? 'mystery' : ''}`}
                    style={{ backgroundColor: proj.color }}
                >
                    {proj.mystery && <span className="mystery-text">?</span>}
                </div>
                <h3>{proj.name}</h3>
                <p className={`rarity ${proj.rarity.toLowerCase()}`}>{proj.rarity}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
