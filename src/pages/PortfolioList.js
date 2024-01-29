import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Col, Container, Navbar, Row, Spinner } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import Footer from "../components/Footer";
import NavbarStudio from "../components/NavbarStudio";

const PortfolioList = () => {
  const [posts, setPosts] = useState([]);
  const [showMore, setShowMore] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        "https://studio-n1sc.onrender.com/api/portfolio/posts"
      );
      const data = response.data;

      if (data.success) {
        setPosts(data.data);
        const initialShowMoreState = data.data.reduce(
          (acc, post) => ({ ...acc, [post._id]: false }),
          {}
        );
        setShowMore(initialShowMoreState);
      } else {
        console.error("Failed to fetch posts:", data.error);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleShowMore = (postId) => {
    setShowMore((prevShowMore) => ({
      ...prevShowMore,
      [postId]: !prevShowMore[postId],
    }));
  };

  return (
    <div>
      <NavbarStudio />
      <Container>
        <Row>
          <p className="text-gradient text-center p-2">Latest Portfolio</p>
          {loading ? (
            <div className="spinner_Content mt-5 mb-3">
            <Spinner animation="border" role="status" className="text-center text-light">
              <span className="visually-hidden text-center text-light">Loading...</span>
            </Spinner>
            </div>
          ) : (
            posts.map((post) => (
              <div key={post._id} className="mb-4">
                <div
                  id={`carousel-${post._id}`}
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {post.images.map((image, index) => (
                      <div
                        key={index}
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
                      >
                        <img
                          src={image}
                          className="d-block w-100"
                          alt={`Image ${index}`}
                          style={{ maxHeight: "300px", objectFit: "cover" }}
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target={`#carousel-${post._id}`}
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target={`#carousel-${post._id}`}
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                <p className="text-gradient2">Title: {post.title}</p>
                <div className="line2"></div>
                <p className="p-text">Details: {post.details}</p>
                <p className="p-text">Content: {post.content}</p>
                <div>
                  <Col className="portofolio-card">
                    {post.images.map((item, index) => (
                      <Images
                        key={index}
                        item={item}
                        showMore={showMore[post._id]}
                      />
                    ))}
                  </Col>
                  <button
                    onClick={() => toggleShowMore(post._id)}
                    className="btn btn-info mt-2 m-1"
                  >
                    {showMore[post._id] ? "View Less" : "View More"}
                  </button>
                </div>
              </div>
            ))
          )}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

const Images = ({ item, showMore }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div>
      {showMore && (
        <motion.div
          initial={{ opacity: 0, translateX: -50, translateY: -50 }}
          animate={{
            opacity: inView ? 1 : 0,
            translateX: inView ? 0 : -50,
            translateY: inView ? 0 : -50,
          }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="portfolioCard_subItem"
          style={{ width: "300px" }}
          ref={ref}
        >
          <div>
            <div>
              <img src={item} alt="..." style={{ borderRadius: "5px" }} />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default PortfolioList;
