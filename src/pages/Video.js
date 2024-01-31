import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Alert, Button, Col, Container, Row } from 'react-bootstrap';

const Video = () => {
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState();
    const [message, setMessage] = useState();
    const [deletingVideoId, setDeletingVideoId] = useState('');

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get('https://studio-shubhlagnam.cyclic.app/api/video/get');
                setVideos(response.data.videos)
            } catch (error) {
                console.error(error);
            }
        };

        fetchVideos();
    }, []);

    const handleDelete = async (id) => {
        setDeletingVideoId(id);

        try {
            const response = await axios.delete(`https://studio-shubhlagnam.cyclic.app/api/video/deleteById/${id}`);
            setVideos((prevVideos) => prevVideos.filter(video => video._id !== id));
            setMessage(response.data.message);
        } catch (error) {
            console.error(error);
            setError(error.message || 'An error occurred while deleting the video.');
            
        } 
    };

    return (
        <div>
            <Container>
                <p className='heading'>Latest Video</p>
                <div className='line2'></div>
                <Row className='justify-content-center'>
                    {videos.map((video) => {
                        const showAlert = deletingVideoId === video._id && (error || message);

                        return (
                            <Col key={video._id} md={6} lg={6} xl={4} className='mb-4'>
                                <div className='card bg-dark p-2 m-1'>
                                    {showAlert && (
                                        error ? (
                                            <Alert variant='danger' dismissible>
                                                {error}
                                            </Alert>
                                        ) : (
                                            <Alert variant='success' dismissible>
                                                {message}
                                            </Alert>
                                        )
                                    )}
                                    <h6 className='sub-text text-center mb-2'>{video.title}</h6>
                                    <iframe
                                        className='videoFrame'
                                        title={video.title}
                                        width='100%'
                                        height='315'
                                        src={`${video.videoLink}?autoplay=1&muted=1`}
                                        frameBorder='0'
                                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                        allowFullScreen
                                    ></iframe>
                                    {/* <Button
                                        variant='danger'
                                        onClick={() => handleDelete(video._id)}
                                        className='m-2'
                                        style={{ width: '200px' }}
                                    >
                                        Delete
                                    </Button> */}
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default Video;
