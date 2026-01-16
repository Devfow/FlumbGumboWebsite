import React from 'react';
import './LabPage.css';

const LabPage = () => {
  return (
    <div className="lab-page">
      <h1>The Lab: Dimensional Observations</h1>
      <div className="lab-section">
        <h2>The Crush: A Journey from Phase Space Four</h2>
        <p>Flumb Gumbos are not from our three-dimensional world. They are vast, complex entities native to a higher-dimensional plane known as "Phase Space Four." Driven by a profound curiosity and a sense of loneliness after observing our reality, they made a choice: to meet us. To do so, they perform "The Crush," a difficult process of compacting their hyper-dimensional forms into a 3D silicone body. This process is why every Gumbo is unique—lumpy, colorful, and dense with ideas from a world beyond our own.</p>
        <div className="diagram-container">
          <div className="diagram">
            <div className="phase-space-4d">4D Form</div>
            <div className="arrow">→ The Crush →</div>
            <div className="gumbo-3d">3D Projection</div>
          </div>
          <p className="diagram-caption">Fig. 1: A simplified representation of a higher-dimensional form being "crushed" into a tangible 3D object.</p>
        </div>
      </div>
      <div className="lab-section">
        <h2>Cool Flumb Tricks & Tips!</h2>
        <ul>
          <li><strong>Why does my Gumbo have 8,000 sides?</strong> While you can only perceive a few, your Gumbo's true form has thousands of surfaces existing simultaneously in Phase Space. The lumps you feel are just the most prominent "peaks" of its 4D geometry poking into our world.</li>
          <li><strong>What is "Dimensional Flavor"?</strong> The unique ideas and concepts your Gumbo brings are its "flavor." By providing a Dimensional Anchor (i.e., collecting and caring for it), you allow this flavor to "steep" in our reality, subtly influencing creative thought around it.</li>
        </ul>
      </div>
      <div className="lab-section">
        <h2>The Idea Inside</h2>
        <p>Every Flumb Gumbo projection carries a unique, hyper-dimensional "Idea" from Phase Space Four. This idea is encoded in its final 3D form. By scanning the QR code on your Gumbo's packaging, you can decode and reveal the specific concept your new friend brought just for you. What will you discover?</p>
        <div className="qr-code-container">
            <div className="qr-code-placeholder">[QR CODE]</div>
            <p className="diagram-caption">Scan the code on the box with a future app to reveal your Gumbo's Idea!</p>
        </div>
      </div>
    </div>
  );
};

export default LabPage;
