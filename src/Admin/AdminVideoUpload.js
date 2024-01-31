import React, { useState, useRef } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import axios from "axios";
import { Alert, Container } from "react-bootstrap";

const AdminVideoUpload = () => {
  const [title, setTitle] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const abortController = useRef(new AbortController());

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    const controller = new AbortController();
    abortController.current = controller;

    try {
      // Basic form validation
      if (!title.trim() || !videoLink.trim()) {
        setError("Please fill in all fields.");
        return;
      }

      // Additional validation if needed

      const response = await axios.post(
        "https://studio-shubhlagnam.cyclic.app/api/video/upload",
        {
          title,
          videoLink,
        },
        { signal: controller.signal }
      );

      // Handle success
      setSuccessMessage(response.data.message);

      // Reset the form after successful submission
      setTitle("");
      setVideoLink("");
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log("Request canceled");
      } else {
        console.error(err);
        setError(
          err.response?.data?.message || "An error occurred. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDismiss = () => {
    setError(null);
    setSuccessMessage(null);
  };

  return (
    <>
    <Container className="mt-5 videoUpload_container">
        <div className="videoUpload-card">     
      <p className="heading">Upload Video</p>
      <div className="line2 mb-3"></div>
      {error && (
        <Alert variant="danger" onClose={handleDismiss} dismissible>
          {error}
        </Alert>
      )}
      {successMessage && (
        <Alert variant="success" onClose={handleDismiss} dismissible>
          {successMessage}
        </Alert>
      )}
      <form>
        <MDBRow className="mb-3">
          <MDBCol>
            <MDBInput
              label="Title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{padding:'10px'}}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-3">
          <MDBCol>
            <MDBInput
              label="YouTube Video Link"
              type="text"
              value={videoLink}
              onChange={(e) => setVideoLink(e.target.value)}
              style={{padding:'10px'}}
            />
          </MDBCol>
        </MDBRow>
        <MDBBtn
          color="primary"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload"}
        </MDBBtn>
      </form>
      </div>
    </Container>
    </>
  );
};

export default AdminVideoUpload;
