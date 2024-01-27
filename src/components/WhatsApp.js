import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsApp = () => {
  const [startX, setStartX] = useState(null);
  const [startY, setStartY] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    if (startX !== null && startY !== null) {
      const deltaX = e.touches[0].clientX - startX;
      const deltaY = e.touches[0].clientY - startY;

      if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
        setIsDragging(true);
      }
    }
  };

  const handleTouchEnd = () => {
    setStartX(null);
    setStartY(null);

    if (!isDragging) {
      const phoneNumber = '7631979510'; // Replace with the desired WhatsApp contact number
      const message = 'Hii!,Contatct us through WebApps';
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

      // Open the link in a new tab/window
      window.open(whatsappLink, '_blank');
    }

    setIsDragging(false);
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        position: 'absolute',
        cursor: 'move',
        transform: isDragging ? 'scale(1.1)' : 'scale(1)',
      }}
      className='whatsappIcon'
    >
      <FaWhatsapp
        style={{ fontSize: '2em', color: 'Green' }}
      />
    </div>
  );
};

export default WhatsApp;
