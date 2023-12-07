import React from "react";
import NavbarStudio from "./NavbarStudio";
import CarouselHome from "./CarouselHome";
import Footer from "./Footer";
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
const Home = () => {
  return (
    <div>
      <NavbarStudio />
      {/* <Testomonial/> */}
      <CarouselHome />
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
      <Container>
        <Row>
          <p className="text-gradient text-center mt-3">Recent Portfolios...</p>
          <Col className="portofolio-card">
            <div className="card-subitem" style={{ width: "300px" }}>
              <MDBCard>
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image hover-overlay"
                >
                  <MDBCardImage
                    src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                    fluid
                    alt="..."
                  />
                  <a>
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </MDBRipple>
                <MDBCardBody>
                  <MDBCardTitle>Wedding</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                  <MDBBtn href="#">View</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="card-subitem" style={{ width: "300px" }}>
              <MDBCard>
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image hover-overlay"
                >
                  <MDBCardImage
                    src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                    fluid
                    alt="..."
                  />
                  <a>
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </MDBRipple>
                <MDBCardBody>
                  <MDBCardTitle>Wedding</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                  <MDBBtn href="#">View</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="card-subitem" style={{ width: "300px" }}>
              <MDBCard>
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image hover-overlay"
                >
                  <MDBCardImage
                    src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                    fluid
                    alt="..."
                  />
                  <a>
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </MDBRipple>
                <MDBCardBody>
                  <MDBCardTitle>Wedding</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                  <MDBBtn href="#">View</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="card-subitem" style={{ width: "300px" }}>
              <MDBCard>
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image hover-overlay"
                >
                  <MDBCardImage
                    src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                    fluid
                    alt="..."
                  />
                  <a>
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </MDBRipple>
                <MDBCardBody>
                  <MDBCardTitle>Wedding</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                  <MDBBtn href="#">View</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
