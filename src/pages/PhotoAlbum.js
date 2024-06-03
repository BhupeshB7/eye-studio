import React, { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import PhotoAlbum from "react-photo-album";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://studio-n1sc.onrender.com/api/portfolio/post/images"
        );
        const data = await response.json();

        // Check if data is defined before mapping over it
        const fetchedPhotos =
          data.data &&
          data.data
            .map((item, index) => {
              const images = item.images;
              return (
                images &&
                images.map((image, imageIndex) => {
                  // Generate random dimensions for each image
                  const width = getRandomNumber(400, 600); // Adjust the range as needed
                  const height = getRandomNumber(300, 400); // Adjust the range as needed

                  return {
                    src: image,
                    width,
                    height,
                    key: `image_${index}_${imageIndex}`,
                  };
                })
              );
            })
            .flat(); // Flatten the array to remove undefined elements

        setPhotos(fetchedPhotos || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Function to generate a random number within a specified range
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div>
      <Container className="mt-3 mb-3">
        <p className="text-gradient2 ">Updated All Portfolio Images...</p>
        <div className="line2 mb-3"></div>
        {photos.length > 0 ? (
          <PhotoAlbum layout="rows" photos={photos} />
        ) : (
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
        )}
      </Container>
    </div>
  );
};

export default Gallery;



// import React, { useState, useEffect } from "react";
// import { Container, Spinner } from "react-bootstrap";
// import PhotoAlbum from "react-photo-album";
// import Modal from "react-modal";
// import Zoom from "react-medium-image-zoom";
// import "react-medium-image-zoom/dist/styles.css";

// const Gallery = () => {
//   const [photos, setPhotos] = useState([]);
//   const [selectedPhoto, setSelectedPhoto] = useState(null);
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://studio-n1sc.onrender.com/api/portfolio/post/images"
//         );
//         const data = await response.json();

//         const fetchedPhotos =
//           data.data &&
//           data.data
//             .map((item, index) => {
//               const images = item.images;
//               return (
//                 images &&
//                 images.map((image, imageIndex) => {
//                   const width = getRandomNumber(400, 600);
//                   const height = getRandomNumber(300, 400);

//                   return {
//                     src: image,
//                     width,
//                     height,
//                     key: `image_${index}_${imageIndex}`,
//                   };
//                 })
//               );
//             })
//             .flat();

//         setPhotos(fetchedPhotos || []);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   const getRandomNumber = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   };

//   const openModal = (photo) => {
//     setSelectedPhoto(photo);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedPhoto(null);
//     setModalIsOpen(false);
//   };

//   return (
//     <div>
//       <Container className="mt-3 mb-3">
//         <p className="text-gradient ">Updated All Portfolio Images...</p>
//         <div className="line2 mb-3"></div>
//         {photos.length > 0 ? (
//           <PhotoAlbum
//             layout="rows"
//             photos={photos}
//             onClick={(photo) => openModal(photo)}
//           />
//         ) : (
//           <div className="spinner_Content mt-5 mb-3">
//             <Spinner
//               animation="border"
//               role="status"
//               className="text-center text-light"
//             >
//               <span className="visually-hidden text-center text-light">
//                 Loading...
//               </span>
//             </Spinner>
//           </div>
//         )}

//         <Modal
//           isOpen={modalIsOpen}
//           onRequestClose={closeModal}
//           contentLabel="Image Modal"
//         >
//           {selectedPhoto && (
//             <Zoom>
//               <img
//                 alt={selectedPhoto.key}
//                 src={selectedPhoto.src}
//                 style={{ width: "100%" }}
//               />
//             </Zoom>
//           )}
//           <button onClick={closeModal}>Close Modal</button>
//         </Modal>
//       </Container>
//     </div>
//   );
// };

// export default Gallery;
