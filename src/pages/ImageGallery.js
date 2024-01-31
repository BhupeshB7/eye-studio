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

import React, { useState } from "react"; // Replace with actual import for Footer
import { Col, Container, Row } from "react-bootstrap";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
// import "react-image-lightbox/style.css"; // Replace with actual import for NavbarStudio
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const images = [
  {
    _id: 1,
    img: "https://img.freepik.com/free-photo/ritual-with-coconut-leaves-during-traditional-hindu-wedding-ceremony_8353-8909.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=sph",
  },
  {
    _id: 2,
    img: "https://img.freepik.com/premium-photo/traditional-indian-wedding-ceremony-groom-holding-hand-bride-hand_96696-808.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=sph",
  },
  {
    _id: 3,
    img: "https://img.freepik.com/free-photo/closeup-hands-pretty-hindu-bride-with-henna-tattoo_8353-8931.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=sph",
  },
  {
    _id: 4,
    img: "https://media.istockphoto.com/id/1573335975/photo/bride-holding-beautiful-bouquet-of-wedding-flowers.webp?b=1&s=170667a&w=0&k=20&c=2rRVtzdzLwSTj-OeYnKlhwN2O4b-Gtq96h2vhRxB9o0=",
  },
  {
    _id: 5,
    img: "https://img.freepik.com/free-photo/all-indian-family-women-hold-spices-their-palms_8353-742.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=ais",
  },
  {
    _id: 6,
    img: "https://img.freepik.com/free-photo/authentic-indian-tray-with-traditional-sacred-objects-wedding-ceremony_8353-9781.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=ais",
  },
  {
    _id: 7,
    img: "https://img.freepik.com/free-photo/wedding-ritual-putting-ring-finger-india_8353-10048.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=ais",
  },
  {
    _id: 8,
    img: "https://media.istockphoto.com/id/1452134932/photo/indian-wedding-ritual-closeup-detail-photo-bride-hand-haldi-ceremony-stock-photo.jpg?s=612x612&w=0&k=20&c=JTmxdHAGCqquymPEWEA8LVRO20w3HdVR7B2Wvt5p6Tk=",
  },
  {
    _id: 9,
    img: "https://images.pexels.com/photos/12153938/pexels-photo-12153938.jpeg?auto=compress&cs=tinysrgb&w=600 ",
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
      <Container>
        <p
          className="text-gradient text-center pt-3"
          style={{ textTransform: "upperCase", fontSize: "20px" }}
        >
          Memories are timeless treasures of the heart.
        </p>
        <h5 className="text-gradient2 text-center ">
          Our Beautiful Visual Gallery...
        </h5>
        <p className="text-center p-text">
          Our minds are the canvases, and every image memory is a masterpiece,
          telling the story of a moment that became a part of us. Images are the
          bookmarks of our minds, allowing us to revisit the chapters of our
          lives whenever we choose. The beauty of image memories lies in their
          ability to transport us back in time, allowing us to relive the magic
          of moments long gone.
        </p>
        <Row>
          {images.map((image, index) => (
            <Col xs={6} md={4} lg={3}>
              <ImageContainer
                key={index}
                image={image}
                index={index}
                openLightbox={openLightbox}
              />
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
            setLightboxIndex(
              (lightboxIndex + images.length - 1) % images.length
            )
          }
          onMoveNextRequest={() =>
            setLightboxIndex((lightboxIndex + 1) % images.length)
          }
          enableZoom={true}
        />
      )}
    </>
  );
};

const ImageContainer = ({ image, index, openLightbox }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      initial={{ opacity: 0, translateX: -50, translateY: -50 }}
      animate={{
        opacity: inView ? 1 : 0,
        translateX: inView ? 0 : -50,
        translateY: inView ? 0 : -50,
      }}
      transition={{ duration: 0.3, delay: index * 0.5 }}
      ref={ref}
    >
      <div className="imageGallery" onClick={() => openLightbox(index)}>
        <div className="card m-2">
          <img
            src={image.img}
            className="card-img-top"
            alt="Sunset Over the Sea"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ImageGallery;
