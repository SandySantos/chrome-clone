import React from 'react';
import { Card, Card2 } from './Card';

const Updates = () => {
  return (
    <>
      <div className='mx-auto w-full grid justify-center m-8 gap-3 text-gray-800'>
        <div className='text-center text-6xl font-bold tracking-tight'>
          Discover the latest
        </div>
        <div className='text-center text-6xl font-bold tracking-tight flex items-center gap-3'>
          <span className='text-[#1967D2] text-[3.25rem] font-medium bg-blue-100 flex items-center justify-center gap-1 rounded-full w-fit pr-6'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 72 72'
              width='72'
              height='72'
              preserveAspectRatio='xMidYMid meet'
              // style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"
            >
              <defs>
                <clipPath id='__lottie_element_84'>
                  <rect width='72' height='72' x='0' y='0'></rect>
                </clipPath>
              </defs>
              <g clipPath='url(#__lottie_element_84)'>
                <g
                  transform='matrix(1,0,0,1,36,36)'
                  opacity='1'
                  // style="display: block;"
                >
                  <g opacity='1' transform='matrix(1,0,0,1,0,0)'>
                    <path
                      strokeLinecap='butt'
                      strokeLinejoin='miter'
                      fillOpacity='0'
                      strokeMiterlimit='4'
                      stroke='rgb(25,103,210)'
                      strokeOpacity='1'
                      strokeWidth='4'
                      d=' M16,0 C16,8.836999893188477 8.836999893188477,16 0,16 C-8.836999893188477,16 -16,8.836999893188477 -16,0 C-16,-8.836999893188477 -8.836999893188477,-16 0,-16 C6.456999778747559,-16 12.020999908447266,-12.175000190734863 14.548999786376953,-6.666999816894531'
                    ></path>
                  </g>
                </g>
                <g
                  // style="display: block;"
                  transform='matrix(1,0,0,1,39.02000045776367,39.66999816894531)'
                  opacity='1'
                >
                  <g opacity='1' transform='matrix(1,0,0,1,0,0)'>
                    <path
                      fill='rgb(25,103,210)'
                      fillOpacity='1'
                      d=' M-2.1449999809265137,-3.369999885559082 C-2.1449999809265137,-3.369999885559082 -5.019999980926514,-1.6699999570846558 -5.019999980926514,-1.6699999570846558 C-5.019999980926514,-1.6699999570846558 3.4800000190734863,3.369999885559082 3.4800000190734863,3.369999885559082 C3.4800000190734863,3.369999885559082 5.019999980926514,0.8100000023841858 5.019999980926514,0.8100000023841858 C5.019999980926514,0.8100000023841858 -2.1449999809265137,-3.369999885559082 -2.1449999809265137,-3.369999885559082z'
                    ></path>
                  </g>
                </g>
                <g
                  // style="display: block;"
                  transform='matrix(1,0,0,1,35.5,33)'
                  opacity='0.99'
                >
                  <g opacity='1' transform='matrix(1,0,0,1,0,0)'>
                    <path
                      fill='rgb(25,103,210)'
                      fillOpacity='1'
                      d=' M1.5,-5 C1.5,-5 -1.5,-5 -1.5,-5 C-1.5,-5 -1.5,5 -1.5,5 C-1.5,5 1.5,4.955999851226807 1.5,4.955999851226807 C1.5,4.955999851226807 1.5,-5 1.5,-5z'
                    ></path>
                  </g>
                </g>
                <g
                  // style="display: block;"
                  transform='matrix(1,0,0,1,36,36)'
                  opacity='1'
                >
                  <g opacity='1' transform='matrix(1,0,0,1,0,0)'>
                    <path
                      fill='rgb(25,103,210)'
                      fillOpacity='1'
                      d=' M18,-4 C18,-4 18,-18 18,-18 C18,-18 4,-4 4,-4 C4,-4 18,-4 18,-4z'
                    ></path>
                  </g>
                </g>
              </g>
            </svg>{' '}
            updates
          </span>
          from Chrome
        </div>
      </div>
      <div className='grid grid-cols-2 gap-10 p-20 mt-10 '>
        <Card2 />
        <Card />
      </div>
    </>
  );
};

export default Updates;
