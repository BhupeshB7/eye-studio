import React from "react";
import NavbarStudio from "../components/NavbarStudio";
import Footer from "../components/Footer";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div>
      <NavbarStudio />
      <Container>
        <Row>
          <Col>
            <div className="image-container">
              <img
                src="https://img.freepik.com/premium-photo/close-up-contact-us-word_352439-2475.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=sph"
                height="320px"
                width="90%"
                alt="about"
                style={{ borderRadius: "7px" }}
              />
              <div className="centered-card card2">
                <p>Introduction</p>
                {/* <hr style={{width:'80%'}}/> */}
                <div className="line"></div>
                <p>About Eye Studio</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="mt-4">
        <Row>
          <Col xs={12} md={6} lg={5}>
            <p className="text-gradient">Contact Us</p>
            <div className="line2"></div>
            <p className="text-color">I’d love to tell your story.</p>
            <p className="sub-text">
              I’m Excited To Go Wherever Your Love Story Is Taking Me And
              Looking Forward To Hearing From You! We'd Love To Hear From You!
              Please Fill Out The Form Below Or Send A Note Directly With As
              Much Details As Possible To Info@Nkstudio.In
            </p>
          </Col>
          <Col xs={10} md={5} lg={6} className="m-1">
            <div className="card mb-3" style={{ minWidth: "350px" }}>
              <ContactForm />
            </div>
          </Col>
        </Row>
      </Container>
      <div>
        <div>
          <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.86724397117!2d85.06064115679558!3d25.608169162537095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29937c52d4f05%3A0x831a0e05f607b270!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1701938567759!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
