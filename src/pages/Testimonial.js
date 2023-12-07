import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function Testimonial() {
  return (
    <div>
      <div className="text-color text-center heading">Testimonial</div>
      <div className="testimonial">
        <div className="testimonial-body">
          <MDBCarousel showControls interval={3000} style={{ height: "350px" }}>
            <MDBCarouselItem itemId={1} interval={3000}>
              <div className="testimonial-card">
                <div>
                  <h6 className="text-color color2">"</h6>
                </div>
                <div className="sub-text">
                  We are overjoyed with the stunning photos captured by the
                  talented team at XYZ Photography! They beautifully documented
                  every moment of our wedding day, turning precious memories
                  into timeless art.
                </div>
                <div className="text-color">
                  <b className="testimonial-a">@</b>john steve
                </div>
              </div>
            </MDBCarouselItem>
            <MDBCarouselItem itemId={2} interval={3000}>
              <div className="testimonial-card">
                <div>
                  <h6 className="text-color color2">"</h6>
                </div>
                <div className="sub-text">
                  We are overjoyed with the stunning photos captured by the
                  talented team at XYZ Photography! They beautifully documented
                  every moment of our wedding day, turning precious memories
                  into timeless art.
                </div>
                <div className="text-color">
                  <b className="testimonial-a">@</b>john steve
                </div>
              </div>
            </MDBCarouselItem>
            <MDBCarouselItem itemId={3} interval={3000}>
              <div className="testimonial-card">
                <div>
                  <h6 className="text-color color2">"</h6>
                </div>
                <div className="sub-text">
                  We are overjoyed with the stunning photos captured by the
                  talented team at XYZ Photography! They beautifully documented
                  every moment of our wedding day, turning precious memories
                  into timeless art.
                </div>
                <div className="text-color">
                  <b className="testimonial-a">@</b>john steve
                </div>
              </div>
            </MDBCarouselItem>
          </MDBCarousel>
        </div>
      </div>
    </div>
  );
}
