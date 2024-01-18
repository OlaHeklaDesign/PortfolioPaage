import React from 'react';
import './LoopStripe.css';
import star_icon from '../Assets/star.svg';

const LoopStripe = () => {
  return (
    <div className="loopstripe">
      <p>WebDevelopment</p>
      <img src={star_icon} alt="star icon" />
      <p>WebDesign</p>
      <img src={star_icon} alt="star icon" />
      <p>No-code</p>
    </div>
  )
}

export default LoopStripe;