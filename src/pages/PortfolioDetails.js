import React, { useEffect, useState, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import NavbarStudio from "../components/NavbarStudio";
import { Col, Container, Row } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Portfolio from "./Portfolio";
import Footer from "../components/Footer";

// Lazy load the image component
const LazyImage = lazy(() => import("../components/LazyImage"));

const PortfolioDetails = () => {
  const { id } = useParams();
  const [portfolioItem, setPortfolioItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolioItem = async () => {
      try {
        const response = await fetch(
          `https://studio-n1sc.onrender.com/api/portfolio/posts/${id}`
        );  
        const data = await response.json();
        if (data.success) {
          setPortfolioItem(data.data);
        } else {
          console.error(data.error);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioItem();
  }, [id]);

  return (
    <div>
      <NavbarStudio />
      <Container>
        <h6 className="text-gradient text-center m-1 p-2"> Portfolio Details</h6>
        <Row>
          <div className="portfolio-details_content">
            {/* Display portfolio item details here */}
            {loading ? (
              // Show loading spinner or message while data is being fetched
              <p className="text-center text-light">Loading...</p>
            ) : (
              <div>
                {/* Lazy load the image component */}
                <Suspense fallback={<p className="text-center text-slate-200">Loading image...</p>}>
                  <LazyImage src={portfolioItem.coverImage} alt="coverImage..." />
                </Suspense>
                <p className="p-text1">{portfolioItem.title}</p>
                <p className="sub-text">{portfolioItem.details}</p>
                <p className="sub-text">{portfolioItem.content}</p>
                {/* Add more details as needed */}
                <Col className="portofolio-card">
                  {portfolioItem.images.map((item, index) => (
                    <LazyImageWithMotion
                      key={index}
                      item={item}
                      index={index}
                     
                    />
                  ))}
                </Col>
              </div>
            )}
          </div>
        </Row>
      </Container>
      <Portfolio/>
      {/* <Footer/> */}
    </div>
  );
};

const LazyImageWithMotion = ({ item, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      initial={{ opacity: 0, translateX: -50, translateY: -50 }}
      animate={{
        opacity: inView ? 1 : 0,
        translateX: inView ? 0 : -50,
        translateY: inView ? 0 : -50,
      }}
      transition={{ duration: 0.3, delay: index * 0.5 }}
      className="portfolioCard_subItem"
      style={{ width: "300px" }}
      ref={ref}
    >
      <div>
        <div>
          <LazyImage src={item} alt="..." style={{ borderRadius: "5px" }} />
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioDetails;


