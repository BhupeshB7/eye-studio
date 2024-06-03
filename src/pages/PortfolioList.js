// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { Col, Container, Navbar, Row, Spinner } from "react-bootstrap";
// import { useInView } from "react-intersection-observer";
// import Footer from "../components/Footer";
// import NavbarStudio from "../components/NavbarStudio";
// import PhotoAlbum from "./PhotoAlbum";

// const PortfolioList = () => {
//   const [posts, setPosts] = useState([]);
//   const [showMore, setShowMore] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:5000/api/portfolio/posts"
//       );
//       const data = response.data;

//       if (data.success) {
//         setPosts(data.data);
//         const initialShowMoreState = data.data.reduce(
//           (acc, post) => ({ ...acc, [post._id]: false }),
//           {}
//         );
//         setShowMore(initialShowMoreState);
//       } else {
//         console.error("Failed to fetch posts:", data.error);
//       }
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const toggleShowMore = (postId) => {
//     setShowMore((prevShowMore) => ({
//       ...prevShowMore,
//       [postId]: !prevShowMore[postId],
//     }));
//   };

//   return (
//     <div>
//       <NavbarStudio />

//       <Container>
//         <Row>
//           <p className="text-gradient text-center p-2">Latest Portfolio</p>
//           {loading ? (
//             <div className="spinner_Content mt-5 mb-3">
//             <Spinner animation="border" role="status" className="text-center text-light">
//               <span className="visually-hidden text-center text-light">Loading...</span>
//             </Spinner>
//             </div>
//           ) : (
//             posts.map((post) => (
//               <div key={post._id} className="mb-4">
//                 <p className="text-gradient2">Title: {post.title}</p>
//                 <div className="line2"></div>
//                 <p className="p-text">Details: {post.details}</p>
//                 <p className="p-text">Content: {post.content}</p>
//                 <div>
//                   <Col className="portofolio-card">
//                     {post.images.map((item, index) => (
//                       <Images
//                         key={index}
//                         item={item}
//                         showMore={showMore[post._id]}
//                       />
//                     ))}
//                   </Col>
//                   <button
//                     onClick={() => toggleShowMore(post._id)}
//                     className="btn btn-info mt-2 m-1"
//                   >
//                     {showMore[post._id] ? "View Less" : "View More"}
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </Row>
//       </Container>
//       <PhotoAlbum/>
//       <Footer />
//     </div>
//   );
// };

// const Images = ({ item, showMore }) => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//   });

//   return (
//     <div>
//       {showMore && (
//         <motion.div
//           initial={{ opacity: 0, translateX: -50, translateY: -50 }}
//           animate={{
//             opacity: inView ? 1 : 0,
//             translateX: inView ? 0 : -50,
//             translateY: inView ? 0 : -50,
//           }}
//           transition={{ duration: 0.3, delay: 0.5 }}
//           className="portfolioCard_subItem"
//           style={{ width: "300px" }}
//           ref={ref}
//         >
//           <div>
//             <div>
//               <img src={item} alt="..." style={{ borderRadius: "5px" }} />
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default PortfolioList;

// File: src/components/PortfolioList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import PhotoAlbum from "./PhotoAlbum";
import NavbarStudio from "../components/NavbarStudio";

const PortfolioList = () => {
  const [posts, setPosts] = useState([]);
  const [showMore, setShowMore] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        `https://studio-n1sc.onrender.com/api/portfolio/posts?page=${currentPage}`
      );
      const data = response.data;

      if (data.success) {
        setPosts(data.data);
        const initialShowMoreState = data.data.reduce(
          (acc, post) => ({ ...acc, [post._id]: false }),
          {}
        );
        setShowMore(initialShowMoreState);
        setTotalPages(data.totalPages);
      } else {
        console.error("Failed to fetch posts:", data.error);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleShowMore = (postId) => {
    setShowMore((prevShowMore) => ({
      ...prevShowMore,
      [postId]: !prevShowMore[postId],
    }));
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  
  
  return (
    <div>
<NavbarStudio/>
      <Container>
        <Row>
          <p className="text-gradient text-center p-2">Latest Portfolio</p>
          {loading ? (
            <div className="spinner_Content mt-5 mb-3">
              <Spinner
                animation="border"
                role="status"
                className="text-center text-light"
              >
                <span className="visually-hidden text-center text-light">
                  Loading...
                </span>
              </Spinner>
            </div>
          ) : (
            posts.map((post) => (
              <div key={post._id} className="mb-4">
                <p className="text-gradient2">Title: {post.title}</p>
                <div className="line2"></div>
                <p className="p-text1">Details: {post.details}</p>
                <p className="p-text1">Content: {post.content}</p>
                <div>
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
                </div>
              </div>
            ))
          )}
        </Row>
    
          <Row className="mt-3">
            <Col className="text-center">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className={`btn btn-outline-info m-1 ${
                  currentPage === 1 && "disabled"
                }`}
                disabled={currentPage === 1}
              >
                Previous
              </button>
             <b className="text-warning m-1">{currentPage}/{totalPages}</b> 
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className={`btn btn-outline-info m-1 ${
                  currentPage === totalPages && "disabled"
                }`}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </Col>
          </Row>
        
      </Container>
      <PhotoAlbum />
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
