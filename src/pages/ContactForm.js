import React, { useState } from "react";
import axios from "axios";
import {
  MDBInput,
  MDBBtn,
  MDBTextArea,
} from "mdb-react-ui-kit";
import { Alert, Spinner } from 'react-bootstrap';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true); // Set loading to true during form submission

      const response = await axios.post("https://studio-n1sc.onrender.com/api/contactForm/send-email", formData);
      if (response && response.data.success) {
        console.log("Email sent successfully");
        setShowSuccessAlert(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });

        // Auto-hide success alert after 5 seconds
        setTimeout(() => {
          setShowSuccessAlert(false);
        }, 8000);
      } else {
        console.error("Error sending email:", response.data.error || "Unknown error");
        setShowErrorAlert(true);

        // Auto-hide error alert after 5 seconds
        setTimeout(() => {
          setShowErrorAlert(false);
        }, 8000);
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error.response?.data?.error || "Unknown error");
      setShowErrorAlert(true);

      // Auto-hide error alert after 5 seconds
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 8000);
    } finally {
      setIsLoading(false); // Set loading to false after form submission (success or error)
    }
  };

  return (
    <div>
      <div>
        <p className="p-text1">
          Hi! Let us know how we can help, and we'll respond shortly.
        </p>
      </div>
      <form className="m-3" onSubmit={handleSubmit}>
        {showSuccessAlert && (
          <Alert variant="success" onClose={() => setShowSuccessAlert(false)} dismissible>
            Message sent successfully!, Our team will contact you as soon as possible. 
          </Alert>
        )}

        {showErrorAlert && (
          <Alert variant="danger" onClose={() => setShowErrorAlert(false)} dismissible>
            Error sending email. Please try again.
          </Alert>
        )}


        <MDBInput
          id="form4Example1"
          wrapperClass="mb-4"
          label="Name"
          onChange={handleInputChange}
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name"
          style={{ height: "40px" }}
          required
        />
        <MDBInput
          type="email"
          id="form4Example2"
          wrapperClass="mb-4"
          label="Email address"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          style={{ height: "40px" }}
        />
        <MDBTextArea
          wrapperClass="mb-4"
          label="Message"
          name="message"
          value={formData.message} 
          onChange={handleInputChange}
          id="textAreaExample"
          rows={4}
          required
        />
        <MDBBtn className="contact-button w-50" style={{width:'230px'}} type="submit" block>
          {isLoading ? (
            <span>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              &nbsp;Submitting...
            </span>
          ) : (
            "Submit"
          )}
        </MDBBtn>
      </form>
    </div>
  );
}
