import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsApp = () => {
  const handleTouchEnd = () => {
      const phoneNumber = '7631979510'; // Replace with the desired WhatsApp contact number
      const message = 'Hii!,Contatct us through WebApps';
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

      // Open the link in a new tab/window
      window.open(whatsappLink, '_blank');
  };

  return (
    <div
      className='whatsappIcon'
    >
      <FaWhatsapp onClick={handleTouchEnd}
        style={{ fontSize: '2em', color: 'Green' }}
      />
    </div>
  );
};

export default WhatsApp;
