// import React from "react";
// import Footer from "../components/Footer";
// import { Col, Container, Row } from "react-bootstrap";

// const images = [
//   {
//     _id:1,
//     img: "https://img.freepik.com/free-photo/ritual-with-coconut-leaves-during-traditional-hindu-wedding-ceremony_8353-8909.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=sph",
//   },
//   {_id:2,
//     img: "https://img.freepik.com/premium-photo/traditional-indian-wedding-ceremony-groom-holding-hand-bride-hand_96696-808.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=sph",
//   },
//   {
//     _id:3,
//     img: "https://img.freepik.com/free-photo/closeup-hands-pretty-hindu-bride-with-henna-tattoo_8353-8931.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=sph",
//   },
//   {
//     _id:4,
//     img: "https://media.istockphoto.com/id/1573335975/photo/bride-holding-beautiful-bouquet-of-wedding-flowers.webp?b=1&s=170667a&w=0&k=20&c=2rRVtzdzLwSTj-OeYnKlhwN2O4b-Gtq96h2vhRxB9o0=",
//   },
// ];

// const ImageGallery = () => {
//   return (
//     <>
//       <h5 className="text-gradient2 text-center pt-3">Beautiful memories</h5>
//       <Container>
//         <Row>
//           {images.map((image, index) => (
//             <Col key={index} xs={6} sm={6} md={4} lg={3}>
//               <div className="imageGallery">
//                 <div className="card m-2">
//                   <img
//                     src={image.img}
//                     className="card-img-top"
//                     alt="Sunset Over the Sea"
//                   />
//                 </div>
//               </div>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//       <Footer />
//     </>
//   );
// };

// export default ImageGallery;

import React, { useState } from "react";
import Footer from "../components/Footer";
import { Col, Container, Row } from "react-bootstrap";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
    {
      _id:1,
      img: "https://img.freepik.com/free-photo/ritual-with-coconut-leaves-during-traditional-hindu-wedding-ceremony_8353-8909.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=sph",
    },
    {_id:2,
      img: "https://img.freepik.com/premium-photo/traditional-indian-wedding-ceremony-groom-holding-hand-bride-hand_96696-808.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=sph",
    },
    {
      _id:3,
      img: "https://img.freepik.com/free-photo/closeup-hands-pretty-hindu-bride-with-henna-tattoo_8353-8931.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=sph",
    },
    {
      _id:4,
      img: "https://media.istockphoto.com/id/1573335975/photo/bride-holding-beautiful-bouquet-of-wedding-flowers.webp?b=1&s=170667a&w=0&k=20&c=2rRVtzdzLwSTj-OeYnKlhwN2O4b-Gtq96h2vhRxB9o0=",
    },
    {
      _id:5,
      img: "https://img.freepik.com/free-photo/all-indian-family-women-hold-spices-their-palms_8353-742.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=ais",
    },
    {
      _id:6,
      img: "https://img.freepik.com/free-photo/authentic-indian-tray-with-traditional-sacred-objects-wedding-ceremony_8353-9781.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=ais",
    },
    {
      _id:7,
      img: "https://img.freepik.com/free-photo/wedding-ritual-putting-ring-finger-india_8353-10048.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=ais",
    },
  ];

const ImageGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxOpen(true);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxIndex(0);
  };

  return (
    <>
      <h5 className="text-gradient2 text-center pt-3">Beautiful memories</h5>
      <Container>
        <Row>
          {images.map((image, index) => (
            <Col key={index} xs={6} sm={6} md={4} lg={3}>
              <div
                className="imageGallery"
                onClick={() => openLightbox(index)}
              >
                <div className="card m-2">
                  <img
                    src={image.img}
                    className="card-img-top"
                    alt="Sunset Over the Sea"
                  />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {lightboxOpen && (
        <Lightbox
          mainSrc={images[lightboxIndex].img}
          nextSrc={images[(lightboxIndex + 1) % images.length].img}
          prevSrc={
            images[(lightboxIndex + images.length - 1) % images.length].img
          }
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setLightboxIndex((lightboxIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setLightboxIndex((lightboxIndex + 1) % images.length)
          }
          enableZoom={true} // Enable zooming
        />
      )}

      <Footer />
    </>
  );
};

export default ImageGallery;
