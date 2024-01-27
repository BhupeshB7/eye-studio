import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

export default function CarouselHome() {
  return (
    <MDBCarousel showIndicators showControls fade style={{height:'500px'}}>
      <MDBCarouselItem itemId={1} >
        <img src='https://img.freepik.com/free-photo/ritual-with-coconut-leaves-during-traditional-hindu-wedding-ceremony_8353-8909.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=sph' className='d-block w-100'style={{height:'500px'}} alt='...' />
        {/* <MDBCarouselCaption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </MDBCarouselCaption> */}
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src='https://img.freepik.com/free-photo/wedding-ritual-putting-ring-finger-india_8353-10048.jpg?size=626&ext=jpg&ga=GA1.1.260354095.1700988836&semt=ais' className='d-block w-100' alt='...'style={{height:'500px'}} />
        {/* <MDBCarouselCaption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MDBCarouselCaption> */}
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src='https://media.istockphoto.com/id/1452134932/photo/indian-wedding-ritual-closeup-detail-photo-bride-hand-haldi-ceremony-stock-photo.jpg?s=612x612&w=0&k=20&c=JTmxdHAGCqquymPEWEA8LVRO20w3HdVR7B2Wvt5p6Tk=' className='d-block w-100' alt='...' style={{height:'500px'}}/>
        {/* <MDBCarouselCaption>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </MDBCarouselCaption> */}
      </MDBCarouselItem>
      <MDBCarouselItem itemId={4}>
        <img src='https://images.pexels.com/photos/12153938/pexels-photo-12153938.jpeg?auto=compress&cs=tinysrgb&w=600 ' className='d-block w-100' alt='...' style={{height:'500px'}}/>
        {/* <MDBCarouselCaption>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </MDBCarouselCaption> */}
      </MDBCarouselItem>
    </MDBCarousel>
  );
}