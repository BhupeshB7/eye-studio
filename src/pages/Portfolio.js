import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const portfolioItems = [
  {
    title: "Nature",
    imageSrc: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=sph",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    title: "Mountain",
    imageSrc: "https://img.freepik.com/free-photo/aerial-beautiful-shot-seashore-with-hills-background-sunset_181624-24143.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=sph",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    title: "Forest",
    imageSrc: "https://img.freepik.com/premium-photo/jungle-product-display-podium-stage-product-showcase-mock-up-generative-ai_634358-708.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=sph",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    title: "Nature",
    imageSrc: "https://img.freepik.com/free-photo/landscape-morning-fog-mountains-with-hot-air-balloons-sunrise_335224-794.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=sph",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  // Add more portfolio items as needed
];

const Portfolio = () => {
  return (
    <div>
    <Container>
      <Row>
        <p className="text-gradient text-center mt-3">Recent Portfolios...</p>
        <Col className="portofolio-card">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={index} item={item} index={index} />
          ))}
        </Col>
      </Row>
    </Container>
    </div>
  );
};

const PortfolioCard = ({ item, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      initial={{ opacity: 0, translateX: -50, translateY: -50 }}
      animate={{ opacity: inView ? 1 : 0, translateX: inView ? 0 : -50, translateY: inView ? 0 : -50 }}
      transition={{ duration: 0.3, delay: index * 0.5 }}
      className="card-subitem"
      style={{ width: '300px' }}
      ref={ref}
    >
      <MDBCard>
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image hover-overlay card-image-home"
        >
          <MDBCardImage src={item.imageSrc} fluid alt="..." />
          <a>
            <div
              className="mask"
              style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
            ></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle>{item.title}</MDBCardTitle>
          <MDBCardText>{item.description}</MDBCardText>
          <MDBBtn href="#" className='contact-button p-2' style={{width:'100px'}}>View</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </motion.div>
  );
};

export default Portfolio;
