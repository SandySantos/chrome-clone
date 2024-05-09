import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

const Fast = () => {
  return (
    <>
      <div className=' grid gap-10 m-8 '>
        <div className='text-center flex flex-col gap-3 items-center font-bold text-6xl'>
          <div className=' flex gap-3 '>
            <span>The</span>
            <span className='bg-[#CEEAD6] px-3  text-green-700 text-[3.25rem] font-medium flex items-center justify-center gap-1 rounded-full w-fit pr-6'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 72 72'
                width='72'
                height='72'
                preserveAspectRatio='xMidYMid meet'
                // style='width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);'
              >
                <defs>
                  <clipPath id='__lottie_element_96'>
                    <rect width='72' height='72' x='0' y='0'></rect>
                  </clipPath>
                  <mask id='__lottie_element_97' mask-type='alpha'>
                    <g
                      // style='display: block;'
                      transform='matrix(0.9902680516242981,0.13917326927185059,-0.13917326927185059,0.9902680516242981,36.46027755737305,35.95879364013672)'
                      opacity='1'
                    >
                      <g opacity='1' transform='matrix(1,0,0,1,0,0)'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='miter'
                          fillOpacity='0'
                          strokeMiterlimit='4'
                          stroke='rgb(255,0,0)'
                          strokeOpacity='1'
                          strokeWidth='14'
                          d=' M-0.125,4.25 C-0.125,4.25 9.5,-7.125 9.5,-7.125'
                        ></path>
                      </g>
                    </g>
                  </mask>
                  <mask id='__lottie_element_103' mask-type='alpha'>
                    <g
                      transform='matrix(1,0,0,1,36,36)'
                      opacity='1'
                      // style='display: block;'
                    >
                      <g opacity='1' transform='matrix(1,0,0,1,0,0)'>
                        <path
                          strokeLinecap='butt'
                          strokeLinejoin='miter'
                          fillOpacity='0'
                          strokeMiterlimit='4'
                          stroke='rgb(255,255,255)'
                          strokeOpacity='1'
                          strokeWidth='14'
                          d=' M14.875,-6.125 C14.875,-6.125 17.118000030517578,-5.285999774932861 17.68400001525879,3.1070001125335693 C18.25,11.5 14.375,14.25 14.375,14.25 C14.375,14.25 -14.375,14.5 -14.375,14.5 C-14.375,14.5 -20.59600067138672,3.9000000953674316 -14.762999534606934,-6.03000020980835 C-11.652999877929688,-11.324000358581543 -6.784999847412109,-13.845999717712402 0.004999999888241291,-14.187000274658203 C3.4010000228881836,-14.357000350952148 5.499000072479248,-13.644000053405762 8.439000129699707,-12.586999893188477'
                        ></path>
                      </g>
                    </g>
                  </mask>
                </defs>
                <g clipPath='url(#__lottie_element_96)'>
                  <g
                    mask='url(#__lottie_element_103)' /* style='display: block;' */
                  >
                    <g
                      transform='matrix(1,0,0,1,36.000999450683594,36)'
                      opacity='1'
                    >
                      <g opacity='1' transform='matrix(1,0,0,1,0,0)'>
                        <path
                          fill='rgb(24,128,56)'
                          fillOpacity='1'
                          d=' M16.78499984741211,-6.881999969482422 C16.78499984741211,-6.881999969482422 14.305000305175781,-3.1619999408721924 14.305000305175781,-3.1619999408721924 C15.491000175476074,-0.7960000038146973 16.07200050354004,1.8279999494552612 15.994999885559082,4.473999977111816 C15.918000221252441,7.119999885559082 15.187000274658203,9.704999923706055 13.864999771118164,11.998000144958496 C13.864999771118164,11.998000144958496 -13.854999542236328,11.998000144958496 -13.854999542236328,11.998000144958496 C-15.572999954223633,9.017999649047852 -16.28499984741211,5.565000057220459 -15.885000228881836,2.1489999294281006 C-15.484999656677246,-1.2669999599456787 -13.994999885559082,-4.464000225067139 -11.63599967956543,-6.9670000076293945 C-9.277000427246094,-9.470000267028809 -6.175000190734863,-11.145000457763672 -2.7880001068115234,-11.746000289916992 C0.5989999771118164,-12.347000122070312 4.089000225067139,-11.840999603271484 7.164999961853027,-10.302000045776367 C7.164999961853027,-10.302000045776367 10.885000228881836,-12.781999588012695 10.885000228881836,-12.781999588012695 C6.943999767303467,-15.336000442504883 2.2290000915527344,-16.422000885009766 -2.431999921798706,-15.848999977111816 C-7.0929999351501465,-15.276000022888184 -11.402999877929688,-13.081999778747559 -14.609000205993652,-9.649999618530273 C-17.815000534057617,-6.2179999351501465 -19.711000442504883,-1.7669999599456787 -19.964000701904297,2.921999931335449 C-20.216999053955078,7.611000061035156 -18.812000274658203,12.239999771118164 -15.994999885559082,15.998000144958496 C-15.994999885559082,15.998000144958496 16.0049991607666,15.998000144958496 16.0049991607666,15.998000144958496 C18.45800018310547,12.720999717712402 19.84600067138672,8.770000457763672 19.98200035095215,4.677999973297119 C20.118000030517578,0.5860000252723694 18.9950008392334,-3.4489998817443848 16.764999389648438,-6.881999969482422 C16.764999389648438,-6.881999969482422 16.78499984741211,-6.881999969482422 16.78499984741211,-6.881999969482422z'
                        ></path>
                      </g>
                    </g>
                  </g>
                  <g mask='url(#__lottie_element_97)'>
                    <g
                      transform='matrix(1,0,0,1,40.9640007019043,34.915000915527344)'
                      opacity='1'
                    >
                      <g opacity='1' transform='matrix(1,0,0,1,0,0)'>
                        <path
                          fill='rgb(24,128,56)'
                          fillOpacity='1'
                          d=' M-7.9029998779296875,7.9029998779296875 C-7.531000137329102,8.274999618530273 -7.091000080108643,8.571000099182129 -6.605000019073486,8.772000312805176 C-6.11899995803833,8.972999572753906 -5.598999977111816,9.07699966430664 -5.072999954223633,9.07699966430664 C-4.546999931335449,9.07699966430664 -4.0279998779296875,8.972999572753906 -3.5420000553131104,8.772000312805176 C-3.055999994277954,8.571000099182129 -2.614000082015991,8.274999618530273 -2.243000030517578,7.9029998779296875 C-2.243000030517578,7.9029998779296875 9.07699966430664,-9.07699966430664 9.07699966430664,-9.07699966430664 C9.07699966430664,-9.07699966430664 -7.9029998779296875,2.243000030517578 -7.9029998779296875,2.243000030517578 C-8.274999618530273,2.615000009536743 -8.571000099182129,3.055999994277954 -8.772000312805176,3.5420000553131104 C-8.972999572753906,4.0279998779296875 -9.07699966430664,4.546999931335449 -9.07699966430664,5.072999954223633 C-9.07699966430664,5.598999977111816 -8.972999572753906,6.11899995803833 -8.772000312805176,6.605000019073486 C-8.571000099182129,7.091000080108643 -8.274999618530273,7.531000137329102 -7.9029998779296875,7.9029998779296875z'
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              fast
            </span>
            <span> way to</span>
          </div>
          <div>do things online</div>
        </div>
        {/* <div className='max-w-6xl mx-auto overflow-hidden rounded-3xl '>
          <video
            autoPlay
            playsInline
            muted
            loop
            className='rounded-3xl w-full h-full'
          >
            <source
              src='https://www.google.com/chrome/static/videos/dev-components/non-chrome.webm'
              type='video/mp4'
            />
          </video>
        </div> */}
      </div>
      <div className=''>
        {/* <div className='my-10 bg-[#ffffff] shadow-sm border max-w-3xl mx-auto rounded-3xl h-full overflow-hidden flex flex-col justify-between'>
          <div className=' p-6 sm:p-10 xl:px-14 py-10 flex items-start justify-between'>
            <h6 className='text-xl font-bold text-gray-900'>
              Prioritize Performance
            </h6>
            <div className='space-y-6 text-sm ml-20'>
              <p className='  text-[#5f6368]'>
                Chrome is built for performance. Optimize your experience with
                features like Energy Saver and Memory Saver.
              </p>
              <a
                href='http://'
                className='group flex gap-2  font-medium text-[#2F75D4]'
              >
                Learn more about Memory and Energy Saver
                <span className='group-hover:-pl-7 -pt-7'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-5 h-5 '
                  >
                    <path
                      fillRule='evenodd'
                      d='M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z'
                      clipRule='evenodd'
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div className='hidden sm:flex justify-end  items-end  -ml-10 -mb-60 mr-20'>
            <video
              autoPlay
              playsInline
              muted
              loop
              className='rounded-3xl w-full h-full'
            >
              <source
                src='https://www.google.com/chrome/static/videos/dev-components/non-chrome.webm'
                type='video/mp4'
              />
            </video>
          </div>
        </div>
        <div className='my-10 bg-[#FDE293] shadow-sm border max-w-3xl mx-auto rounded-3xl h-full overflow-hidden flex flex-col justify-between'>
          <div className=' p-6 sm:p-10 xl:px-14 py-10 flex items-start justify-between'>
            <h6 className='text-xl font-bold text-gray-900'>
              Stay on top of tabs
            </h6>
            <div className='space-y-6 text-sm ml-20'>
              <p className='  text-[#5f6368]'>
                Chrome is built for performance. Optimize your experience with
                features like Energy Saver and Memory Saver.
              </p>
            </div>
          </div>
          <div className='hidden sm:flex justify-end  items-end    '>
            <img
              alt='google.com/chrome'
              src='https://www.google.com/chrome/static/images/homepage/fast/tabs-groups_desktop.png'
              className='w-full h-full'
            />
          </div>
        </div>
        <div className='my-10 bg-[#188038] shadow-sm border max-w-3xl mx-auto rounded-3xl h-full overflow-hidden flex  justify-between'>
          <div className='  max-w-xs'>
            <div className='text-gray-50 space-y-4 p-6 sm:p-10 xl:pl-14 py-10'>
              <h6 className='text-3xl font-bold '>Optimized for your device</h6>
              <p className=' text-base font-medium'>
                Chrome is built to work with your device across platforms. That
                means a smooth experience on whatever you’re working with.
              </p>
            </div>
            <div className='bg-white h-48 mx-14 rounded-t-3xl mr-32 p-4'>
              <div>
                <img
                  src='https://www.google.com/chrome/static/images/campaigns/chrome-download/qr-code.webp'
                  alt='image3'
                />
              </div>
              <div className='text-xs font-medium text-gray-500 mt-2 text-center'>
                Scan for the
              </div>
              <div className='text-xs font-medium text-gray-500 text-center'>
                Chrome app
              </div>
            </div>
          </div>
          <div className='hidden sm:flex justify-end items-end'>
            <img
              alt='google.com/chrome'
              src='https://www.google.com/chrome/static/images/homepage/fast/devices_desktop.webp'
              className='w-full h-full'
            />
          </div>
        </div> */}
        <Swiper
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={50}
          modules={[Pagination]}
          className='mySwiper'
          // style={{ zIndex: -10 }}
          grabCursor={true}
          pagination={{ clickable: true }}
          // pagination={{
          //   clickable: true,
          // }}
        >
          <SwiperSlide className='absolute -z-10'>
            <div className='my-10 bg-[#ffffff] shadow-sm border max-w-3xl mx-auto rounded-3xl h-96 overflow-hidden flex flex-col '>
              <div className=' p-6 sm:p-10 xl:px-14 py-10 flex items-start justify-between mt-10'>
                <h6 className='text-xl font-bold text-gray-900'>
                  Prioritize Performance
                </h6>
                <div className='space-y-6 text-sm ml-20'>
                  <p className='  text-[#5f6368]'>
                    Chrome is built for performance. Optimize your experience
                    with features like Energy Saver and Memory Saver.
                  </p>
                  <a
                    href='http://'
                    className='group flex gap-2  font-medium text-[#2F75D4]'
                  >
                    Learn more about Memory and Energy Saver
                    <span className='group-hover:-pl-7 -pt-7'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-5 h-5 '
                      >
                        <path
                          fillRule='evenodd'
                          d='M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              <div className='hidden sm:flex justify-end  items-end  -ml-10 -mb-60 mr-20'>
                <video
                  autoPlay
                  playsInline
                  muted
                  loop
                  className='rounded-3xl w-full h-full'
                >
                  <source
                    src='https://www.google.com/chrome/static/videos/dev-components/non-chrome.webm'
                    type='video/mp4'
                  />
                </video>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='absolute -z-10'>
            <div className='my-10 bg-[#FDE293] shadow-sm border max-w-3xl mx-auto rounded-3xl h-96 overflow-hidden flex flex-col justify-between '>
              <div className=' px-10 py-5 flex items-start '>
                <h6 className='text-xl font-bold text-gray-900'>
                  Stay on top of tabs
                </h6>
                <div className='space-y-6 text-sm ml-20'>
                  <p className='  text-[#5f6368]'>
                    Chrome is built for performance. Optimize your experience
                    with features like Energy Saver and Memory Saver.
                  </p>
                </div>
              </div>
              <div className='hidden sm:flex justify-end  items-end -mb-64;   '>
                <img
                  alt='google.com/chrome'
                  src='https://www.google.com/chrome/static/images/homepage/fast/tabs-groups_desktop.png'
                  className='w-full h-full'
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='absolute -z-10'>
            <div className='my-10 bg-[#188038] shadow-sm border max-w-3xl mx-auto rounded-3xl h-96 overflow-hidden flex  justify-between'>
              <div className='  max-w-xs'>
                <div className='text-gray-50 space-y-4 p-6 sm:p-10 xl:pl-14 py-10'>
                  <h6 className='text-3xl font-bold '>
                    Optimized for your device
                  </h6>
                  <p className=' text-base font-medium'>
                    Chrome is built to work with your device across platforms.
                    That means a smooth experience on whatever you’re working
                    with.
                  </p>
                </div>
                <div className='bg-white h-48 mx-14 rounded-t-3xl mr-32 p-4'>
                  <div>
                    <img
                      src='https://www.google.com/chrome/static/images/campaigns/chrome-download/qr-code.webp'
                      alt='image3'
                    />
                  </div>
                  <div className='text-xs font-medium text-gray-500 mt-2 text-center'>
                    Scan for the
                  </div>
                  <div className='text-xs font-medium text-gray-500 text-center'>
                    Chrome app
                  </div>
                </div>
              </div>
              <div className='hidden sm:flex justify-end items-end'>
                <img
                  alt='google.com/chrome'
                  src='https://www.google.com/chrome/static/images/homepage/fast/devices_desktop.webp'
                  className='w-full h-full'
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* <Carousel className=''>
        <div className='my-10 bg-[#ffffff] shadow-sm border max-w-3xl mx-auto rounded-3xl h-full overflow-hidden flex flex-col justify-between'>
          <div className=' p-6 sm:p-10 xl:px-14 py-10 flex items-start justify-between'>
            <h6 className='text-xl font-bold text-gray-900'>
              Prioritize Performance
            </h6>
            <div className='space-y-6 text-sm ml-20'>
              <p className='  text-[#5f6368]'>
                Chrome is built for performance. Optimize your experience with
                features like Energy Saver and Memory Saver.
              </p>
              <a
                href='http://'
                className='group flex gap-2  font-medium text-[#2F75D4]'
              >
                Learn more about Memory and Energy Saver
                <span className='group-hover:-pl-7 -pt-7'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-5 h-5 '
                  >
                    <path
                      fillRule='evenodd'
                      d='M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z'
                      clipRule='evenodd'
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div className='hidden sm:flex justify-end  items-end  -ml-10 -mb-60 mr-20'>
            <video
              autoPlay
              playsInline
              muted
              loop
              className='rounded-3xl w-full h-full'
            >
              <source
                src='https://www.google.com/chrome/static/videos/dev-components/non-chrome.webm'
                type='video/mp4'
              />
            </video>
          </div>
        </div>
        <div className='my-10 bg-[#FDE293] shadow-sm border max-w-3xl mx-auto rounded-3xl h-full overflow-hidden flex flex-col justify-between'>
          <div className=' p-6 sm:p-10 xl:px-14 py-10 flex items-start justify-between'>
            <h6 className='text-xl font-bold text-gray-900'>
              Stay on top of tabs
            </h6>
            <div className='space-y-6 text-sm ml-20'>
              <p className='  text-[#5f6368]'>
                Chrome is built for performance. Optimize your experience with
                features like Energy Saver and Memory Saver.
              </p>
            </div>
          </div>
          <div className='hidden sm:flex justify-end  items-end    '>
            <img
              alt='google.com/chrome'
              src='https://www.google.com/chrome/static/images/homepage/fast/tabs-groups_desktop.png'
              className='w-full h-full'
            />
          </div>
        </div>
        <div className='my-10 bg-[#FDE293] shadow-sm border max-w-3xl mx-auto rounded-3xl h-full overflow-hidden flex flex-col justify-between'>
          <div className=' p-6 sm:p-10 xl:px-14 py-10 flex items-start justify-between'>
            <h6 className='text-xl font-bold text-gray-900'>
              Stay on top of tabs
            </h6>
            <div className='space-y-6 text-sm ml-20'>
              <p className='  text-[#5f6368]'>
                Chrome is built for performance. Optimize your experience with
                features like Energy Saver and Memory Saver.
              </p>
            </div>
          </div>
          <div className='hidden sm:flex justify-end  items-end    '>
            <img
              alt='google.com/chrome'
              src='https://www.google.com/chrome/static/images/homepage/fast/tabs-groups_desktop.png'
              className='w-full h-full'
            />
          </div>
        </div>
      </Carousel> */}
    </>
  );
};

export default Fast;

// const CustomPagination = ({ swiper }) => {
//   return (
//     <div>
//       {swiper ? (
//         <>
//           <button onClick={() => swiper.slideTo(0)}>1</button>
//           <button onClick={() => swiper.slideTo(1)}>2</button>
//           <button onClick={() => swiper.slideTo(2)}>3</button>
//         </>
//       ) : null}
//     </div>
//   );
// };

/* <div className='my-10 bg-[#ffffff] shadow-sm border max-w-3xl mx-auto rounded-3xl h-full overflow-hidden flex flex-col justify-between'>
<div className=' p-6 sm:p-10 xl:px-14 py-10 flex items-start justify-between'>
  <h6 className='text-xl font-bold text-gray-900'>
    Prioritize Performance
  </h6>
  <div className='space-y-6 text-sm ml-20'>
    <p className='  text-[#5f6368]'>
      Chrome is built for performance. Optimize your experience with
      features like Energy Saver and Memory Saver.
    </p>
    <a
      href='http://'
      className='group flex gap-2  font-medium text-[#2F75D4]'
    >
      Learn more about Memory and Energy Saver
      <span className='group-hover:-pl-7 -pt-7'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-5 h-5 '
        >
          <path
            fillRule='evenodd'
            d='M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z'
            clipRule='evenodd'
          />
        </svg>
      </span>
    </a>
  </div>
</div>
<div className='hidden sm:flex justify-end  items-end  -ml-10 -mb-60 mr-20'>
  <video
    autoPlay
    playsInline
    muted
    loop
    className='rounded-3xl w-full h-full'
  >
    <source
      src='https://www.google.com/chrome/static/videos/dev-components/non-chrome.webm'
      type='video/mp4'
    />
  </video>
</div>
</div>
<div className='my-10 bg-[#FDE293] shadow-sm border max-w-3xl mx-auto rounded-3xl h-full overflow-hidden flex flex-col justify-between'>
<div className=' p-6 sm:p-10 xl:px-14 py-10 flex items-start justify-between'>
  <h6 className='text-xl font-bold text-gray-900'>
    Stay on top of tabs
  </h6>
  <div className='space-y-6 text-sm ml-20'>
    <p className='  text-[#5f6368]'>
      Chrome is built for performance. Optimize your experience with
      features like Energy Saver and Memory Saver.
    </p>
  </div>
</div>
<div className='hidden sm:flex justify-end  items-end    '>
  <img
    alt='google.com/chrome'
    src='https://www.google.com/chrome/static/images/homepage/fast/tabs-groups_desktop.png'
    className='w-full h-full'
  />
</div>
</div> */
