import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const LandingPageSlide = () => {
  return (
    <div className='mt-10 flex gap-10 overflow-hidden'>
      <img
        src='https://www.google.com/chrome/static/images/dev-components/chrome-gallery-2-2x.webp'
        alt='image1'
        className=' border rounded-2xl  h-96 '
      />{' '}
      <img
        src='https://www.google.com/chrome/static/images/dev-components/chrome-gallery-3-2x.webp'
        alt='image2'
        className=' border rounded-2xl h-96'
      />{' '}
      <img
        src='https://www.google.com/chrome/static/images/dev-components/chrome-gallery-4-2x.webp'
        alt='image3'
        className='border rounded-2xl h-96'
      />
      <img
        src='https://www.google.com/chrome/static/images/dev-components/chrome-gallery-5-2x.webp'
        className='border rounded-2xl h-96'
        alt=''
      />
    </div>
  );
};

export default LandingPageSlide;
/* <Swiper
        // spaceBetween={2}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        style={{ zIndex: -10 }}
      >
        <SwiperSlide>
          <div>
            {' '}
            <img
              src='https://www.google.com/chrome/static/images/dev-components/chrome-gallery-2-2x.webp'
              alt='image1'
              className=' border rounded-2xl max-w-full '
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src='https://www.google.com/chrome/static/images/dev-components/chrome-gallery-3-2x.webp'
              alt='image2'
              className=' border rounded-2xl max-w-full'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src='https://www.google.com/chrome/static/images/dev-components/chrome-gallery-4-2x.webp'
              alt='image3'
              className='border rounded-2xl max-w-full'
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper> */
