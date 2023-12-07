import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { LinkContainer } from "react-router-bootstrap";
export default function Footer() {
  return (
    <MDBFooter
      bgColor="dark"
      className="text-center text-light text-lg-start text-muted"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span className="text-secondary">
            Get connected with us on social networks:
          </span>
        </div>

        <div>
          <a href="" className="me-4 text-secondary ">
            <MDBIcon fab icon="facebook" />
          </a>
          <a href="" className="me-4  text-secondary">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4  text-secondary">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-secondary">
            <MDBIcon fab icon="whatsapp" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer
          className="text-center text-secondary text-md-start mt-5"
          style={{ textDecoration: "none !important" }}
        >
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase text-light fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Eye Studio
              </h6>
              <p className="text-light">
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>

            <MDBCol
              md="2"
              lg="2"
              xl="2"
              className="mx-auto mb-4"
              style={{ textDecoration: "none" }}
            >
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <LinkContainer
                  to="/portfolio"
                  className="text-reset"
                  style={{ textDecoration: "none" }}
                >
                  <span>Portfolio </span>
                </LinkContainer>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-reset"
                  style={{ textDecoration: "none " }}
                >
                  Package
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-reset"
                  style={{ textDecoration: "none" }}
                >
                  Stories
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-reset"
                  style={{ textDecoration: "none" }}
                >
                  Portfolio
                </a>
              </p>
              <p>
                <a
                  href="#!"
                  className="text-reset"
                  style={{ textDecoration: "none " }}
                >
                  Images
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <LinkContainer
                  to="/about"
                  className="text-reset"
                  style={{ textDecoration: "none" }}
                >
                  <span>About us</span>
                </LinkContainer>
              </p>
              <p>
                <LinkContainer
                  to="/contact"
                  className="text-reset"
                  style={{ textDecoration: "none" }}
                >
                  <span>Contact us</span>
                </LinkContainer>
              </p>
              <p>
                <LinkContainer
                  to="/help"
                  className="text-reset"
                  style={{ textDecoration: "none" }}
                >
                  <span>Help </span>
                </LinkContainer>
              </p>
              
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}
