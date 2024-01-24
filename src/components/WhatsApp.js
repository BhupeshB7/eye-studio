import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Draggable from 'react-draggable';

const WhatsApp = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleIconClick = () => {
    
      const phoneNumber = '7631979510'; // Replace with the desired WhatsApp contact number
      const message = 'Hii!';
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.location.href = whatsappLink;
    
  };

  const handleStartDrag = () => {
    setIsDragging(true);
  };

  const handleStopDrag = () => {
    setIsDragging(false);
  };

  return (
    <Draggable
      defaultPosition={{ x: window.innerWidth * .8, y: window.innerHeight * 0.5 }}
      onStart={handleStartDrag}
      onStop={handleStopDrag}
    >
      <div
        style={{
          position: 'absolute',
          cursor: 'move',
          transform: isDragging ? 'scale(1.1)' : 'scale(1)', // Optional: Add scaling effect during drag
        }}
        className='whatsappIcon'
      >
        <FaWhatsapp
          onClick={handleIconClick}
          style={{ fontSize: '2em', color: 'yellowGreen' }}
        />
      </div>
    </Draggable>
  );
};

export default WhatsApp;
