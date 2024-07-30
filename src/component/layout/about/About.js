// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css'; 
// import 'slick-carousel/slick/slick-theme.css';
// import './style.css';

// const LocationSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     pauseOnHover: true,
//     nextArrow: <button className="slick-next" />,
//     prevArrow: <button className="slick-prev" />,
//     afterChange: (current) => setCurrentSlide(current),
//   };

//   const images = [
//     { src: 'https://media.istockphoto.com/id/1477536010/photo/paris-beautiful-buildings-in-a-luxury-neighborhood.webp?b=1&s=170667a&w=0&k=20&c=OyBQfXQf1R7E1A-AoqIF7t8L7UtXkPAv4KSzFgx3x14=' },
//     { src: 'https://media.istockphoto.com/id/1144469488/photo/map-pin-gps-navigation-technology-and-wireless-technology-in-the-city.jpg?s=612x612&w=0&k=20&c=1IlXo9AKc_oZ8IDCeeU_NzJL8RinT9v7Lxibs0mDqLM=' },
//     { src: 'https://www.kids-world-travel-guide.com/images/xparis_eiffeltower_ssk500.jpeg.pagespeed.ic.03Zne2dW2F.jpg' },
//   ];

//   return (
//     <div className="location-slider">
//       <Slider {...settings}>
//         {images.map((image, index) => (
//           <div key={index} className="slide">
//             <img src={image.src} alt={`Location ${index + 1}`} />
//           </div>
//         ))}
//       </Slider>
//       <div className="pagination">
//         {images.map((_, index) => (
//           <div
//             key={index}
//             className={`dot ${index === currentSlide ? 'active' : ''}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LocationSlider;
import React from 'react'

const About = () => {
  return (
    <div>
      
    </div>
  )
}

export default About
