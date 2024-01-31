import React, { useEffect } from "react";
import CarouselHome from "./CarouselHome";
import { motion, useAnimation } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";

import Portfolio from "../pages/Portfolio";
import WhatsApp from "./WhatsApp";
import PopUpComponent from "./PopUpComponent";
import MultiItemCarousel from "../pages/MultiItemCarousel";
import Gallery from "../pages/Gallery";
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
      {/* <Testomonial/> */}
      <CarouselHome />
      {/* <Login/> */}
      <PopUpComponent />
     
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        
      >
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          fill="none"
          viewBox="0 0 200 200"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlnsSvgjs="http://svgjs.dev/svgjs"
        >
          <path
            fill='url("#SvgjsLinearGradient1194")'
            d="M165.963 134.037c-5.467 5.467-14.332 5.467-19.799 0l-24.137-24.138c-5.468-5.467-5.468-14.331 0-19.799l24.137-24.137c5.467-5.467 14.332-5.467 19.799 0L190.101 90.1c5.467 5.468 5.467 14.332 0 19.799l-24.138 24.138Zm-112.127 0c-5.467 5.467-14.332 5.467-19.8 0L9.9 109.899c-5.468-5.467-5.468-14.331 0-19.799l24.137-24.137c5.467-5.467 14.332-5.467 19.799 0L77.973 90.1c5.468 5.468 5.468 14.332 0 19.799l-24.137 24.138ZM109.9 190.1c-5.468 5.468-14.332 5.468-19.8 0l-24.137-24.137c-5.467-5.467-5.467-14.332 0-19.799l24.138-24.137c5.467-5.468 14.331-5.468 19.799 0l24.137 24.137c5.467 5.467 5.467 14.332 0 19.799L109.9 190.1Zm0-112.127c-5.468 5.468-14.332 5.468-19.8 0L65.963 53.836c-5.467-5.468-5.467-14.332 0-19.8L90.101 9.9c5.467-5.467 14.331-5.467 19.799 0l24.137 24.138c5.467 5.467 5.467 14.331 0 19.799L109.9 77.973Z"
          ></path>
          <defs>
            <linearGradient
              gradientTransform="rotate(0 0.5 0.5)"
              id="SvgjsLinearGradient1194"
            >
              <stop
                stopOpacity="1"
                stopColor="rgba(105, 234, 203)"
                offset="0"
              ></stop>
              <stop
                stopOpacity="1"
                stopColor="rgba(234, 204, 248)"
                offset="0.48"
              ></stop>
              <stop
                stopOpacity="1"
                stopColor="rgba(29, 0, 255)"
                offset="1"
              ></stop>
            </linearGradient>
          </defs>
        </svg> */}

        <Container
       className="homeBackgroundContent"
        >
          <Row className="mt-3">
            <Col xs={12} md={7} lg={8}>
              <div>
                <p className="text-gradient">
                  TOP WEDDING PHOTOGRAPHERS IN BEGUSARAI
                </p>
                <div className="line2"></div>
                <p className="home-p-text">
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
              <div className="mt-3">
            <Gallery/>
              </div>
            </Col>
          </Row>
        </Container>
      </motion.div>

      {/* <Testomonial /> */}
      {/* POrtfolio */}
      <Portfolio />
      <MultiItemCarousel />
      {/* Portfolio End */}
      <WhatsApp />
    </div>
  );
};

export default Home;
