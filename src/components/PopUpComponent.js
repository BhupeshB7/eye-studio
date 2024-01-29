import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import Modal from "react-modal";

const PopUpComponent = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasClosedModalTimestamp = localStorage.getItem("hasClosedModalTimestamp");

    // Check if the modal has been closed before and the timestamp is not older than 1 hour
    if (hasClosedModalTimestamp) {
      const oneHourInMilliseconds = 60 * 60 * 1000;
      const currentTime = new Date().getTime();
      const timestamp = parseInt(hasClosedModalTimestamp, 10);

      if (currentTime - timestamp < oneHourInMilliseconds) {
        setShowPopup(false);
        return;
      }
    }

    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000); // 1 minute in milliseconds

    return () => {
      // Cleanup function to clear the timer when the component unmounts
      clearTimeout(timer);
    };
  }, []); // Empty dependency array means this effect runs once after initial render

  const handleClose = () => {
    // Set a flag and timestamp in local storage to indicate that the modal has been closed
    localStorage.setItem("hasClosedModalTimestamp", new Date().getTime().toString());
    setShowPopup(false);
  };
  const handleCallNow = () => {
    // Redirect to the specified phone number
    window.location.href = "tel:+91 763197950";
  };
  return (
    <div>
      <div>
        <Modal
          className="ModalOverlay"
          overlayClassName="Overlay"
          isOpen={showPopup}
          onRequestClose={handleClose}
          contentLabel="Example Modal"
        >
          {/* Your modal content here */}
          <div className="ModalContent">
            <div className="CloseButton" onClick={handleClose}>
              <FaTimes />
            </div>
            <img src="https://img.freepik.com/free-photo/ritual-with-coconut-leaves-during-traditional-hindu-wedding-ceremony_8353-8909.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=sph" height='300px' width='100%' alt="img..." style={{borderRadius:'8px'}}/>
            <h6 className="heading mt-1">Get a special offer!</h6>
            <p className="popUpText mt-1">Wedding Bookings are open for this season to get exciting deals. Call us at 7631979510, 8102936580, or drop us a message.</p>
            <div className="popUpButtonContent">
              <Button variant="warning" style={{borderRadius:'30px'}} onClick={handleCallNow}>Call Now</Button>
              <Button style={{borderRadius:'30px'}} variant="warning" onClick={handleClose}>
                Close
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default PopUpComponent;
