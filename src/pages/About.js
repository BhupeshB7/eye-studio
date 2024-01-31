import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MultiItemCarousel from "./MultiItemCarousel";
import NavbarStudio from "../components/NavbarStudio";

const About = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const controls = useAnimation();
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView1) controls.start("visible");
  }, [controls, inView1]);

  return (
    <div>
       <NavbarStudio/>
      <motion.div
        ref={ref1}
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
        transition={{ duration: 1 }}
      >
        <Container>
          <Row>
            <Col>
              <motion.div
        ref={ref1}
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
        transition={{ duration: 1 }}
      
              className="image-container">
                <img
                  src="https://img.freepik.com/free-photo/camera-photographic-with-smartphone-devices-generative-ai_188544-12171.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=sph"
                  height="400px"
                  width="100%"
                  alt="about"
                  style={{ borderRadius: "7px" }}
                />
                <div className="centered-card">
                  <p>Introduction</p>
                  <div className="line"></div>
                  <p>About Shubhlagnam Studio</p>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.div>

      <motion.div
        ref={ref2}
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
        transition={{ duration: 1 }}
      >
        <Container className="mt-4">
          <Row>
            <Col
              xs={11}
              md={6}
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="image-containerAbout d-flex justify-content-center align-items-center">
                <div className="border2"></div>
                <img
                  className="bordered-image"
                  src="https://img.freepik.com/free-photo/portrait-happy-bearded-young-man-glasses-standing-outdoors_171337-14763.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=sph"
                  height="350px"
                  width="350px"
                  alt="about_sub"
                  style={{ zIndex: "1000", borderRadius: "50%" }}
                />
              </div>
            </Col>
            <Col xs={12} md={6} lg={6} className="mt-2 ">
              <p className="text-gradient">Our Story</p>
              <div className="line2"></div>
              <h6 className="sub-text">
                We are making photographs to understand what lives mean to us. —
                <b> Ralph Hattersley</b>
              </h6>
              <p className="sub-text">
                As the visionary behind this creative studio, I am an
                accomplished and passionate individual dedicated to
                immortalizing life's most cherished moments. With a keen eye for
                detail and a commitment to excellence, my artistic approach
                transforms ordinary events into extraordinary memories. Having
                honed my skills in photography and videography, I bring a unique
                perspective to every project, capturing the essence of joy, love,
                and celebration. Whether it's a lively party, a heartfelt
                wedding, or a joyful birthday, my goal is to craft visual
                narratives that resonate with emotion and authenticity. My
                expertise lies not only in technical proficiency but also in
                creating a comfortable and enjoyable atmosphere, ensuring that
                clients feel at ease while we document their special occasions.
                With a commitment to delivering exceptional results, I am
                dedicated to preserving the magic of every moment, creating a
                lasting legacy through the lens of my creativity.
              </p>
              <h5 className="sub-text text-end">Amit Kumar</h5>
              <h6 className="text-color text-end">Ceo and Founder</h6>
              <h6 className="text-gradient2 text-end">Shubhlagnam Studio</h6>
            </Col>
          </Row>
        </Container>
      </motion.div>

      <motion.div
        ref={ref3}
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
        transition={{ duration: 1 }}
      >
        <Container className="mt-4">
          <Row>
            <Col xs={12} md={6} lg={6} className="mt-2 ">
              <p className="text-gradient">Description</p>
              <div className="line2"></div>
              <p className="sub-text">
                In our studio, each frame tells a unique story, reflecting the
                genuine emotions and vibrant energy of your special moments.
                Whether it's the laughter of a party, the romance of a wedding,
                or the innocence of a birthday celebration, we skillfully craft
                visual narratives that stand the test of time. Our commitment
                to excellence extends beyond technical proficiency; it's about
                creating an immersive and comfortable experience, ensuring you
                can relive the magic of your occasions through our lens. Embark
                on a journey with us, where every click freezes a moment, and
                every video tells a story – your story, beautifully captured
                and eternally preserved.
              </p>
              <h5 className="sub-text">Amit Kumar</h5>
              <h6 className="text-color">Ceo and Founder</h6>
              <h6 className="text-gradient2">Shubhlagnam Studio</h6>
            </Col>
            <Col
              xs={11}
              md={6}
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="image-containerAbout d-flex justify-content-center align-items-center">
               
                <img
                  className="bordered-image"
                  src="https://img.freepik.com/free-photo/camera-photographic-with-smartphone-devices-generative-ai_188544-12171.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=sph"
                  height="350px"
                  width="100%"
                  alt="about_sub"
                  style={{ zIndex: "1000" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </motion.div>

      <div className="mt-5"></div>
      <MultiItemCarousel />
      <div className="mt-5"></div>
    </div>
  );
};

export default About;
