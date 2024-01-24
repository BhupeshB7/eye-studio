// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { MDBCard, MDBCardImage, MDBRipple } from "mdb-react-ui-kit";
// import { useInView } from "react-intersection-observer";
// import { Col, Container, Row } from "react-bootstrap";
// const PortfolioList = () => {
//   const [posts, setPosts] = useState([]);
//   const [showMore, setShowMore] = useState(false);
//   useEffect(() => {
//     // Fetch posts when the component mounts
//     fetchPosts();
//   }, []);

//   useEffect(() => {
//     // Initialize the carousel after posts are loaded
//     const carousels = document.querySelectorAll(".carousel");
//     carousels.forEach((carousel) => {
//       new window.bootstrap.Carousel(carousel, {
//         interval: 2000, // Adjust the interval as needed
//       });
//     });
//   }, [posts]);

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get(
//         "https://studio-n1sc.onrender.com/api/portfolio/posts"
//       );
//       const data = response.data;

//       if (data.success) {
//         setPosts(data.data);
//       } else {
//         console.error("Failed to fetch posts:", data.error);
//       }
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//     }
//   };

//   const handleDeletePost = async (postId) => {
//     try {
//       const response = await axios.delete(
//         `https://studio-n1sc.onrender.com/api/portfolio/posts/${postId}`
//       );
//       const data = response.data;

//       if (data.success) {
//         // If the deletion was successful, fetch the updated list of posts
//         fetchPosts();
//       } else {
//         console.error("Failed to delete post:", data.error);
//       }
//     } catch (error) {
//       console.error("Error deleting post:", error);
//     }
//   };

//   return (
//     <Container>
//         <Row>
//       <p className="text-gradient text-center p-2">Latest Portfolio</p>
//       {posts.map((post) => (
//         <div key={post._id} className="mb-4">
//           <div
//             id={`carousel-${post._id}`}
//             className="carousel slide"
//             data-bs-ride="carousel"
//           >
//             <div className="carousel-inner">
//               {post.images.map((image, index) => (
//                 <div
//                   key={index}
//                   className={`carousel-item ${index === 0 ? "active" : ""}`}
//                 >
//                   <img
//                     src={image}
//                     className="d-block w-100"
//                     alt={`Image ${index}`}
//                     style={{ maxHeight: "300px", objectFit: "cover" }}
//                   />
//                 </div>
//               ))}
//             </div>
//             <button
//               className="carousel-control-prev"
//               type="button"
//               data-bs-target={`#carousel-${post._id}`}
//               data-bs-slide="prev"
//             >
//               <span
//                 className="carousel-control-prev-icon"
//                 aria-hidden="true"
//               ></span>
//               <span className="visually-hidden">Previous</span>
//             </button>
//             <button
//               className="carousel-control-next"
//               type="button"
//               data-bs-target={`#carousel-${post._id}`}
//               data-bs-slide="next"
//             >
//               <span
//                 className="carousel-control-next-icon"
//                 aria-hidden="true"
//               ></span>
//               <span className="visually-hidden">Next</span>
//             </button>
//           </div>
//           <p className="text-gradient2">Title: {post.title}</p>
//           <div className="line2"></div>
//           <p className="p-text">Details: {post.details}</p>
//           <p className="p-text">Content: {post.content}</p>
//           <Col className="portofolio-card">
//               {post.images.map((item, index) => (
//                 <Images key={index} item={item} showMore={showMore} />
//               ))}
//             </Col>
//             <button
//               onClick={() => setShowMore(!showMore)}
//               className="btn btn-info mt-2"
//             >
//               {showMore ? "View Less" : "View More"}
//             </button>
//           <button
//             onClick={() => handleDeletePost(post._id)}
//             className="btn btn-danger mt-2"
//           >
//             Delete
//           </button>
//         </div>
//       ))}
//         </Row>
//     </Container>
//   );
// };

// const Images = ({ item, index }) => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//   });

//   return (
//         <div>
//           <motion.div
//             initial={{ opacity: 0, translateX: -50, translateY: -50 }}
//             animate={{
//               opacity: inView ? 1 : 0,
//               translateX: inView ? 0 : -50,
//               translateY: inView ? 0 : -50,
//             }}
//             transition={{ duration: 0.3, delay: index * 0.5 }}
//             className="portfolioCard_subItem"
//             style={{ width: "300px" }}
//             ref={ref}
//           >
//             <div>
//               <div >
//                 <img src={item}  alt="..."  style={{borderRadius:'5px'}}/>

//               </div>
//             </div>
//           </motion.div>
//         </div>
//   );
// };
// export default PortfolioList;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import Footer from "../components/Footer";
import NavbarStudio from "../components/NavbarStudio";
import Portfolio from "./Portfolio";

const PortfolioList = () => {
  const [posts, setPosts] = useState([]);
  const [showMore, setShowMore] = useState({});

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        "https://studio-n1sc.onrender.com/api/portfolio/posts"
      );
      const data = response.data;

      if (data.success) {
        setPosts(data.data);
        const initialShowMoreState = data.data.reduce(
          (acc, post) => ({ ...acc, [post._id]: false }),
          {}
        );
        setShowMore(initialShowMoreState);
      } else {
        console.error("Failed to fetch posts:", data.error);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      const response = await axios.delete(
        `https://studio-n1sc.onrender.com/api/portfolio/posts/${postId}`
      );
      const data = response.data;

      if (data.success) {
        fetchPosts();
      } else {
        console.error("Failed to delete post:", data.error);
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const toggleShowMore = (postId) => {
    setShowMore((prevShowMore) => ({
      ...prevShowMore,
      [postId]: !prevShowMore[postId],
    }));
  };

  return (
    <div>
<NavbarStudio/>
    <Container>
      <Row>
        <p className="text-gradient text-center p-2">Latest Portfolio</p>
        {posts.map((post) => (
          <div key={post._id} className="mb-4">
            <div
              id={`carousel-${post._id}`}
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {post.images.map((image, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <img
                      src={image}
                      className="d-block w-100"
                      alt={`Image ${index}`}
                      style={{ maxHeight: "300px", objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target={`#carousel-${post._id}`}
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target={`#carousel-${post._id}`}
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <p className="text-gradient2">Title: {post.title}</p>
            <div className="line2"></div>
            <p className="p-text">Details: {post.details}</p>
            <p className="p-text">Content: {post.content}</p>

            <div>
              {posts.map((post) => (
                <div key={post._id} className="mb-4">
                  <Col className="portofolio-card">
                    {post.images.map((item, index) => (
                      <Images
                        key={index}
                        item={item}
                        showMore={showMore[post._id]}
                      />
                    ))}
                  </Col>
                  <button
                    onClick={() => toggleShowMore(post._id)}
                    className="btn btn-info mt-2 m-1"
                  >
                    {showMore[post._id] ? "View Less" : "View More"}
                  </button>
                  <button
                    onClick={() => handleDeletePost(post._id)}
                    className="btn btn-danger mt-2 m-1"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Row>
    </Container>
    <Portfolio/>
    <Footer/>
    </div>
  );
};

const Images = ({ item, showMore }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div>
      {showMore && (
        <motion.div
          initial={{ opacity: 0, translateX: -50, translateY: -50 }}
          animate={{
            opacity: inView ? 1 : 0,
            translateX: inView ? 0 : -50,
            translateY: inView ? 0 : -50,
          }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="portfolioCard_subItem"
          style={{ width: "300px" }}
          ref={ref}
        >
          <div>
            <div>
              <img src={item} alt="..." style={{ borderRadius: "5px" }} />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default PortfolioList;
