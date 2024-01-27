import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Card } from 'react-bootstrap';
const MultiItemCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Sample data for the carousel
  const carouselItems = [
    { id: 1, content: '@doe' },
    { id: 2, content: '@jammy' },
    { id: 3, content: '@david' },
    { id: 4, content: '@john' },
    { id: 5, content: '@smith' },
    // Add more items as needed
  ];

  return (
    <section>

    <div className='p-5 m-2 '>
        <p className='text-gradient text-center'>Testimonial</p>
      <Container className="multi-item-carousel-container ">
        <Slider {...settings}>
          {carouselItems.map((item) => (
            <div key={item.id} className="carousel-item">
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>{item.content}</Card.Title>
                  <Card.Text>
                     image is a testament to our commitment to capturing the essence of every moment. From candid emotions to breathtaking landscapes, our gallery is a visual journey through the artistry we bring to every project.
                  </Card.Text>
                  {/* <Card.Footer className='heading'>@ Abc</Card.Footer> */}
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
    </section>
  );
};

export default MultiItemCarousel;
