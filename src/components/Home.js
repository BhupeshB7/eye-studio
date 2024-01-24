import React, { useEffect } from "react";
import NavbarStudio from "./NavbarStudio";
import CarouselHome from "./CarouselHome";
import Footer from "./Footer";
import { motion, useAnimation } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";

import Testomonial from "../pages/Testomonial";
import Testimonial from "../pages/Testimonial";
import Portfolio from "../pages/Portfolio";
import WhatsApp from "./WhatsApp";
const Home = () => {
  const controls = useAnimation();

  useEffect(() => {
    // Start the animation when the component is mounted
    controls.start({
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.6 },
    });
  }, [controls]);

  return (
    <div>
      <NavbarStudio />
      {/* <Testomonial/> */}
      <CarouselHome />
      {/* <Login/> */}
      <motion.div initial={{ opacity: 0 }} animate={controls}>
        <Container>
          <Row className="mt-3">
            <Col xs={12} md={7} lg={8}>
              <div>
                <p className="text-gradient">
                  TOP WEDDING PHOTOGRAPHERS IN BEGUSARAI
                </p>
                <div className="line2"></div>
                <p className="sub-text">
                  I am the creative force behind a dynamic studio company
                  specializing in capturing the essence of life's joyous moments
                  through photography and videography. With a passion for
                  storytelling, I bring a unique and personalized touch to every
                  party, function, wedding, and birthday celebration. My team
                  and I excel in crafting visually stunning narratives that
                  immortalize the emotions, laughter, and beauty of each event.
                  From candid shots that freeze genuine smiles to expertly
                  edited videos that encapsulate the vibrancy of the occasion,
                  we pride ourselves on delivering unparalleled quality and
                  professionalism. With an acute eye for detail, a commitment to
                  customer satisfaction, and a flair for capturing the magic in
                  every frame, our studio is dedicated to turning fleeting
                  moments into timeless memories. Let us be your visual
                  storytellers, ensuring that your special occasions are
                  remembered and cherished for a lifetime.
                </p>
              </div>
            </Col>
            <Col xs={12} md={5} lg={4}>
              <div className="image-containerAbout d-flex justify-content-center align-items-center">
                <div className="border"></div>
                <img
                  className="bordered-image"
                  src="https://img.freepik.com/premium-photo/beautiful-wedding-couple-laugh-kiss-background-stones_411847-61.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=ais"
                  height="350px"
                  width="280px"
                  alt="about_sub"
                  style={{ zIndex: "1000" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </motion.div>

      <Testomonial />
      {/* POrtfolio */}
      <Portfolio />
      {/* Portfolio End */}
      <Testimonial />
      <WhatsApp/>
      <Footer />
    </div>
  );
};

export default Home;
