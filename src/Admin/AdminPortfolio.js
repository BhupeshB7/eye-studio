// client/src/App.js

import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form, Image, CloseButton, Alert } from 'react-bootstrap';
import Dropzone from 'react-dropzone';

const AdminPortfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    coverImage: null,
    title: '',
    details: '',
    content: '',
    images: [],
  });
  const [coverImagePreview, setCoverImagePreview] = useState(null);
  const [additionalImagesPreview, setAdditionalImagesPreview] = useState([]);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleModalShow = () => {
    setShowModal(true);
    setError(null); // Reset error state when modal is shown
    setMessage(null);
  };

  const handleModalClose = () => {
    setShowModal(false);
    // Clear image previews when modal is closed
    setCoverImagePreview(null);
    setAdditionalImagesPreview([]);
    setError(null); // Reset error state when modal is closed
    setMessage(null);
  };

  const handleCoverImageDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setFormData({
        ...formData,
        coverImage: acceptedFiles[0], // Only consider the first cover image
      });

      // Create preview for the selected cover image
      setCoverImagePreview({
        file: acceptedFiles[0],
        preview: URL.createObjectURL(acceptedFiles[0]),
      });
    }
  };

  const handleDrop = (acceptedFiles) => {
    // Check if the total number of images (cover + additional) exceeds 5
    if (formData.coverImage && acceptedFiles.length + formData.images.length > 4) {
      setError('You can upload up to 5 images including the cover image');
      return;
    }

    // Append images with the correct field name
    setFormData({
      ...formData,
      images: [...formData.images, ...acceptedFiles],
    });

    // Create previews for the selected images
    const previews = acceptedFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    // Update additionalImagesPreview by appending new previews to existing ones
    setAdditionalImagesPreview((prevPreviews) => [...prevPreviews, ...previews]);
  };

  const handleRemoveImage = (index, isCover) => {
    if (isCover) {
      setFormData({
        ...formData,
        coverImage: null,
      });
      setCoverImagePreview(null);
    } else {
      const updatedImages = [...formData.images];
      updatedImages.splice(index, 1);
      setFormData({
        ...formData,
        images: updatedImages,
      });

      const updatedPreviews = [...additionalImagesPreview];
      updatedPreviews.splice(index, 1);
      setAdditionalImagesPreview(updatedPreviews);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formDataToSend = new FormData();
      // Use formData.coverImage as part of the images array
      if (formData.coverImage) {
        formDataToSend.append('coverImage', formData.coverImage);
      }
  
      formDataToSend.append('title', formData.title);
      formDataToSend.append('details', formData.details);
      formDataToSend.append('content', formData.content);
  
      // Append the rest of the images
      formData.images.forEach((image, index) => {
        formDataToSend.append('images', image);
      });
  
      const response = await axios.post('https://studio-n1sc.onrender.com/api/portfolio/create', formDataToSend);
  
      if (response.data.success) {
        // If the post is successful, display the success message from the backend
        setMessage(response.data.message);
  
        // Reset form data and close the modal
        setFormData({
          coverImage: null,
          title: '',
          details: '',
          content: '',
          images: [],
        });
  
        // Clear image previews when modal is closed
        setCoverImagePreview(null);
        setAdditionalImagesPreview([]);
  
        // handleModalClose();
      } else {
        setError(response.data.error);
        setMessage(null); // Reset success message
      }
    } catch (error) {
      console.error(error);
      setError('Failed to make post!');
      setMessage(null); // Reset success message
    }
  };
  

  return (
    <div>
      <Button variant="primary" onClick={handleModalShow}>
        Create Post
      </Button>

      <Modal show={showModal} onHide={handleModalClose}backdrop="static" keyboard={false}>
        <Modal.Header closeButton  >
          <Modal.Title className='text-light'>Create Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="coverImage">
              <Form.Label>Cover Image</Form.Label>
              <Dropzone className='dropzone' onDrop={handleCoverImageDrop} multiple={false} accept="image/*">
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps()} className="dropzone">
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop a cover image here, or click to select a cover image</p>
                  </div>
                )}
              </Dropzone>
              {/* Display cover image preview */}
              {coverImagePreview && (
                <div className="preview-container">
                  <Image src={coverImagePreview.preview} alt={`Cover Image Preview`} className="preview-image" />
                  <CloseButton onClick={() => handleRemoveImage(0, true)} className="text-danger remove-button" />
                </div>
              )}
            </Form.Group>

            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="title" onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="details">
              <Form.Label>Details</Form.Label>
              <Form.Control type="text" name="details" onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" rows={3} name="content" onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="images">
              <Form.Label>Additional Images (Max 5)</Form.Label>
              <Dropzone onDrop={handleDrop} multiple accept="image/*">
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps()} className="dropzone">
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                  </div>
                )}
              </Dropzone>
              {/* Display image previews */}
              <div className="image-previews">
                {additionalImagesPreview.map((preview, index) => (
                  <div key={index} className="preview-container">
                    <Image src={preview.preview} alt={`Preview ${index}`} className="preview-image" />
                    <CloseButton onClick={() => handleRemoveImage(index, false)} className="text-danger remove-button" />
                  </div>
                ))}
              </div>
            </Form.Group>

            <Button variant="info"style={{width:'130px',margin:'5px'}} type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AdminPortfolio;
