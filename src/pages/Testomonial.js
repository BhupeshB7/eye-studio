import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { Container } from 'react-bootstrap';
function Testomonial() {
  return (
    <Container className="container1">
      <h5 className="heading">Image Gallery</h5>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src='https://img.freepik.com/free-photo/closeup-hands-pretty-hindu-bride-with-henna-tattoo_8353-8931.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=sph' height='200px' width='100px' alt="slide_image" />
         </SwiperSlide>
        <SwiperSlide>
          <img src='https://img.freepik.com/free-photo/wedding-ritual-putting-ring-finger-india_8353-10048.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=ais'height='300px' width='150px' alt="slide_image" />
         </SwiperSlide>
        <SwiperSlide>
          <img src='https://images.pexels.com/photos/12153938/pexels-photo-12153938.jpeg?auto=compress&cs=tinysrgb&w=600 'height='200px' width='100px' alt="slide_image" />
         </SwiperSlide>
        <SwiperSlide>
          <img src='https://img.freepik.com/premium-photo/realistic-floral-spring-background_208978-458.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=sph'height='300px' width='150px' alt="slide_image" />
          </SwiperSlide>
        <SwiperSlide>
          <img src='https://img.freepik.com/free-photo/floral-arrangement-with-trendy-colors-viva-magenta-generative-ai_169016-29021.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=sph'height='300px' width='150px' alt="slide_image" />
       </SwiperSlide>
       <SwiperSlide>
          <img src='https://img.freepik.com/free-photo/ritual-with-coconut-leaves-during-traditional-hindu-wedding-ceremony_8353-8909.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=sph' height='300px' width='150px' alt="slide_image" />
         </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </Container>
  );
}

export default Testomonial;