// import React, { useEffect, useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn,
//   MDBRipple,
// } from "mdb-react-ui-kit";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Link } from "react-router-dom";
// import { LinkContainer } from "react-router-bootstrap";

// const Portfolio = () => {
//   const [portfolioItems, setPortfolioItems] = useState([]);

//   useEffect(() => {
//     const fetchPortfolioItems = async () => {
//       try {
//         const response = await fetch(
//           "https://studio-n1sc.onrender.com/api/portfolio/recent"
//         ); // Replace with your backend API endpoint
//         const data = await response.json();
//         if (data.success) {
//           setPortfolioItems(data.data);
//         } else {
//           console.error(data.error);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchPortfolioItems();
//   }, []);

//   return (
//     <div>
//       <Container>
//         <Row>
//           <p className="text-gradient text-center mt-3">Recent Portfolios...</p>
//           <Col className="portofolio-card">
//             {portfolioItems.map((item, index) => (
//               <PortfolioCard key={index} item={item} index={index} />
//             ))}
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// const PortfolioCard = ({ item, index }) => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//   });

//   return (
//     <motion.div
//       initial={{ opacity: 0, translateX: -50, translateY: -50 }}
//       animate={{
//         opacity: inView ? 1 : 0,
//         translateX: inView ? 0 : -50,
//         translateY: inView ? 0 : -50,
//       }}
//       transition={{ duration: 0.3, delay: index * 0.5 }}
//       className="card-subitem"
//       style={{ width: "300px" }}
//       ref={ref}
//     >
//       <MDBCard>
//         <MDBRipple
//           rippleColor="light"
//           rippleTag="div"
//           className="bg-image hover-overlay card-image-home"
//         >
//           <MDBCardImage src={item.coverImage} fluid alt="..." />
//           <a>
//             <div
//               className="mask"
//               style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
//             ></div>
//           </a>
//         </MDBRipple>
//         <MDBCardBody>
//           <MDBCardTitle>{item.title}</MDBCardTitle>
//           <MDBCardText>{item.details}</MDBCardText>
//           <LinkContainer to={`/portfolio/${item._id}`}>
//             <MDBBtn className="contact-button p-2" style={{ width: "100px" }}>
//               View
//             </MDBBtn>
//           </LinkContainer>
//         </MDBCardBody>
//       </MDBCard>
//     </motion.div>
//   );
// };

// export default Portfolio;



import React, { useEffect, useState } from "react";
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
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    const fetchPortfolioItems = async () => {
      try {
        const response = await fetch(
          "https://studio-n1sc.onrender.com/api/portfolio/recent"
        ); // Replace with your backend API endpoint
        const data = await response.json();
        if (data.success) {
          setPortfolioItems(data.data);
        } else {
          console.error(data.error);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPortfolioItems();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <p className="text-gradient text-center mt-3">Recent Portfolios...</p>
          <Col className="portofolio-card">
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={index} item={item} index={index} />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const PortfolioCard = ({ item, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (inView) {
      const img = new Image();
      img.onload = () => {
        setImageLoaded(true);
      };
      img.src = item.coverImage;
    }
  }, [inView, item.coverImage]);

  return (
    <motion.div
      initial={{ opacity: 0, translateX: -50, translateY: -50 }}
      animate={{
        opacity: inView ? 1 : 0,
        translateX: inView ? 0 : -50,
        translateY: inView ? 0 : -50,
      }}
      transition={{ duration: 0.3, delay: index * 0.5 }}
      className="card-subitem"
      style={{ width: "300px" }}
      ref={ref}
    >
      <MDBCard>
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image hover-overlay card-image-home"
        >
          {imageLoaded ? (
            <MDBCardImage src={item.coverImage} fluid alt="..." />
          ) : (
            <div style={{ height: "200px", position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                Loading...
              </div>
            </div>
          )}
          <a>
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle>{item.title}</MDBCardTitle>
          <MDBCardText>{item.details}</MDBCardText>
          <LinkContainer to={`/portfolio/${item._id}`}>
            <MDBBtn className="contact-button p-2" style={{ width: "100px" }}>
              View
            </MDBBtn>
          </LinkContainer>
        </MDBCardBody>
      </MDBCard>
    </motion.div>
  );
};

export default Portfolio;
