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
    <Container className="container1w">
      <h1 className="heading">Flower Gallery</h1>
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
          {/* <img src='https://img.freepik.com/free-photo/wallpaper-with-floral-pattern-that-says-spring_1340-25738.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=sph' height='300px' width='150px' alt="slide_image" /> */}
          <h6>LOremfdkjsdnfnsdkfnklsdnflkdnklfndklfnklnfklndklnfkldancLOremfdkjsdnfnsdkfnklsdnflkdnklfndklfnklnfklndklnfkldancLOremfdkjsdnfnsdkfnklsdnflkdnklfndklfnklnfklndklnfkldancLOremfdkjsdnfnsdkfnklsdnflkdnklfndklfnklnfklndklnfkldanc aklfnlknknklcnkn</h6>
          <p>sfnsjnvksnvskonfsdvknsknsokvnsvkdnkdnnnvksdnvndsvsklvklvllv</p>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src='https://img.freepik.com/premium-photo/beautiful-lotus-flowers-illustration_692702-7435.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=sph' height='300px' width='150px' alt="slide_image" /> */}
          <h6>LOremfdkjsdnfnsdkfnklsdnflkdnklfndklfnklnfklndklnfkldancLOremfdkjsdnfnsdkfnklsdnflkdnklfndklfnklnfklndklnfkldancLOremfdkjsdnfnsdkfnklsdnflkdnklfndklfnklnfklndklnfkldancLOremfdkjsdnfnsdkfnklsdnflkdnklfndklfnklnfklndklnfkldanc aklfnlknknklcnkn</h6>
          <p>sfnsjnvksnvskonfsdvknsknsokvnsvkdnkdnnnvksdnvndsvsklvklvllv</p>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src='https://img.freepik.com/premium-photo/haughty-beautiful-transparent-luminous-yellow-peacock-generative-ai_791316-4928.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=sph'height='300px' width='150px' alt="slide_image" /> */}
          <h6>LOremfdkjsdnfnsdkfnklsdnflkdnklfndklfnklnfklndklnfkldancLOremfdkjsdnfnsdkfnklsdnflkdnklfndklfnklnfklndklnfkldancLOremfdkjsdnfnsdkfnklsdnflkdnklfndklfnklnfklndklnfkldancLOremfdkjsdnfnsdkfnklsdnflkdnklfndklfnklnfklndklnfkldanc aklfnlknknklcnkn</h6>
          <p>sfnsjnvksnvskonfsdvknsknsokvnsvkdnkdnnnvksdnvndsvsklvklvllv</p>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src='https://img.freepik.com/free-photo/closeup-textural-bright-exotic-flowers-generative-al_169016-28576.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=sph'height='300px' width='150px' alt="slide_image" /> */}
          <h6>LOremfdkjsdnfnsdkfnklsdnflkdnklfndklfnklnfklndklnfkldancLOremfdkjsdnfnsdkfnklsdnflkdnklfndklfnklnfklndklnfkldancLOremfdkjsdnfnsdkfnklsdnflkdnklfndklfnklnfklndklnfkldancLOremfdkjsdnfnsdkfnklsdnflkdnklfndklfnklnfklndklnfkldanc aklfnlknknklcnkn</h6>
          <p>sfnsjnvksnvskonfsdvknsknsokvnsvkdnkdnnnvksdnvndsvsklvklvllv</p>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src='https://img.freepik.com/premium-photo/realistic-floral-spring-background_208978-458.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=sph'height='300px' width='150px' alt="slide_image" /> */}
          <h6>LOremfdkjsdnfnsdkfnklsdnflkdnklfndklfnklnfklndklnfkldancLOremfdkjsdnfnsdkfnklsdnflkdnklfndklfnklnfklndklnfkldancLOremfdkjsdnfnsdkfnklsdnflkdnklfndklfnklnfklndklnfkldancLOremfdkjsdnfnsdkfnklsdnflkdnklfndklfnklnfklndklnfkldanc aklfnlknknklcnkn</h6>
          <p>sfnsjnvksnvskonfsdvknsknsokvnsvkdnkdnnnvksdnvndsvsklvklvllv</p>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src='https://img.freepik.com/free-photo/floral-arrangement-with-trendy-colors-viva-magenta-generative-ai_169016-29021.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=sph'height='300px' width='150px' alt="slide_image" /> */}
          <h6>LOremfdkjsdnfnsdkfnklsdnflkdnklfndklfnklnfklndklnfkldancLOremfdkjsdnfnsdkfnklsdnflkdnklfndklfnklnfklndklnfkldancLOremfdkjsdnfnsdkfnklsdnflkdnklfndklfnklnfklndklnfkldancLOremfdkjsdnfnsdkfnklsdnflkdnklfndklfnklnfklndklnfkldanc aklfnlknknklcnkn</h6>
          <p>sfnsjnvksnvskonfsdvknsknsokvnsvkdnkdnnnvksdnvndsvsklvklvllv</p>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src='https://img.freepik.com/free-photo/floral-arrangement-with-trendy-colors-viva-magenta-generative-ai_169016-29023.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=sph'height='300px' width='150px' alt="slide_image" /> */}
          <h6>LOremfdkjsdnfnsdkfnklsdnflkdnklfndklfnklnfklndklnfkldancLOremfdkjsdnfnsdkfnklsdnflkdnklfndklfnklnfklndklnfkldancLOremfdkjsdnfnsdkfnklsdnflkdnklfndklfnklnfklndklnfkldancLOremfdkjsdnfnsdkfnklsdnflkdnklfndklfnklnfklndklnfkldanc aklfnlknknklcnkn</h6>
          <p>sfnsjnvksnvskonfsdvknsknsokvnsvkdnkdnnnvksdnvndsvsklvklvllv</p>
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