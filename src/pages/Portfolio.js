import React from 'react'
import Testomonial from './Testomonial'
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
const Portfolio = () => {
  return (
    <div>
        <Testomonial/>
      {/* POrtfolio */}
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
      {/* Portfolio End */}
    </div>
  )
}

export default Portfolio