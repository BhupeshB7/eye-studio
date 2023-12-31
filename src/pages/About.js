import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavbarStudio from "../components/NavbarStudio";
import Footer from "../components/Footer";
import Testimonial from "./Testimonial";

const About = () => {
  return (
    <div>
      <NavbarStudio />
      <Container>
        <Row>
          <Col>
            <div className="image-container">
              <img
                src="https://img.freepik.com/free-photo/camera-photographic-with-smartphone-devices-generative-ai_188544-12171.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=sph"
                height="400px"
                width="100%"
                alt="about"
                style={{ borderRadius: "7px" }}
              />
              <div className="centered-card">
                <p>Introduction</p>
                {/* <hr style={{width:'80%'}}/> */}
                <div className="line"></div>
                <p>About Eye Studio</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="mt-3">
          <Col xs={12} md={7} lg={8}>
            <div>
              <p className="text-gradient">
                TOP WEDDING PHOTOGRAPHERS IN PATNA
              </p>
              <div className="line2"></div>
              <p className="sub-text">
                Established In The Year 2008, NK Studio Top Wedding
                Photographers In Patna Is Located In Jamal Road, Patna Is A Top
                Player In The Category Top Wedding Photographers In Patna,
                Commercial Photographers In The Patna. This Well-Known
                Establishment Acts As A One-Stop Destination Servicing Customers
                Both Local And From Other Parts Of Patna. Over The Course Of Its
                Journey, This Business Has Established A Firm Foothold In It’s
                Industry. The Belief That Customer Satisfaction Is As Important
                As Their Products And Services, Have Helped This Establishment
                Garner A Vast Base Of Customers, Which Continues To Grow By The
                Day. This Business Employs Individuals That Are Dedicated
                Towards Their Respective Roles And Put In A Lot Of Effort To
                Achieve The Common Vision And Larger Goals Of The Company. In
                The Near Future, This Business Aims To Expand Its Line Of
                Products And Services And Cater To A Larger Client Base. In
                Patna, This Establishment Occupies A Prominent Location In Jamal
                Road. It Is An Effortless Task In Commuting To This
                Establishment As There Are Various Modes Of Transport Readily
                Available. It Is At Main Road, In Front Of Apple Store I Tech ,
                New Dak Banglow, Which Makes It Easy For First-Time Visitors In
                Locating This Establishment. It Is Known To Provide Top Service
                In The Following Categories: Photographers, Wedding
                Photographers, Wedding Planners, Video Shooting Services, Video
                Editing Services, Drone On Rent, Commercial Photographers,
                Birthday Party Photographers.
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
      <Container className="mt-4">
        <Row>
          <Col xs={11 } md={6} lg={6} className="d-flex justify-content-center align-items-center">
            <div className="image-containerAbout d-flex justify-content-center align-items-center">
              <div className="border1"></div>
              <img
                className="bordered-image"
                src="https://img.freepik.com/free-photo/portrait-happy-bearded-young-man-glasses-standing-outdoors_171337-14763.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=sph"
                height="350px"
                width="90%"
                alt="about_sub"
                style={{ zIndex: "1000" }}
              />
            </div>
          </Col>
          <Col xs={12} md={6} lg={6} className="mt-2 ">
            <p className="text-gradient">Our Story</p>
            <div className="line2"></div>
            <h6 className="sub-text">
              We are making photographs to understand what lives mean to us. —
              Ralph Hattersley
            </h6>
            <p className="sub-text">Imagine Waking Up To A Job That Lifts You Up And Transports You To
              A Different World. A World Populated With A Billion Heartfelt
              Feelings And Stories Etched Ceremoniously In Magic, Love And Joie
              De Vivre. Perfect With Its Disney-Like Happy Endings, Sworn Vows
              And The Promises Of Forever. This Is Our World. The NK Studio
              World!
            </p>
            <h5 className="sub-text">Amit Kumar</h5>
            <h6 className="text-color">Ceo and Founder</h6>
            <h6 className="text-gradient2">Eye Studio</h6>
          </Col>
        </Row>
      </Container>
      <Container className="mt-4">
        <Row>
          <Col xs={12} md={6} lg={6} className="mt-2 ">
            <p className="text-gradient">Our Story</p>
            <div className="line2"></div>
            <h6 className="sub-text">
              We are making photographs to understand what lives mean to us. —
              Ralph Hattersley
            </h6>
            <p className="sub-text">Imagine Waking Up To A Job That Lifts You Up And Transports You To
              A Different World. A World Populated With A Billion Heartfelt
              Feelings And Stories Etched Ceremoniously In Magic, Love And Joie
              De Vivre. Perfect With Its Disney-Like Happy Endings, Sworn Vows
              And The Promises Of Forever. This Is Our World. The NK Studio
              World!
            </p>
            <h5 className="sub-text">Amit Kumar</h5>
            <h6 className="text-color">Ceo and Founder</h6>
            <h6 className="text-gradient2">Eye Studio</h6>
          </Col>
          <Col xs={11 } md={6} lg={6} className="d-flex justify-content-center align-items-center">
            <div className="image-containerAbout d-flex justify-content-center align-items-center">
              <div className="border1"></div>
              <img
                className="bordered-image"
                src="https://img.freepik.com/free-photo/portrait-happy-bearded-young-man-glasses-standing-outdoors_171337-14763.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=sph"
                height="350px"
                width="90%"
                alt="about_sub"
                style={{ zIndex: "1000" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="mt-5"></div>
      <Testimonial/>
      <div className="mt-5"></div>
      <Footer/>
    </div>
  );
};

export default About;
