const Footer = () => {
  const footerData = {
    'Chrome Family': [
      'Other Platforms',
      'Chromebooks',
      'Chromecast',
      'Chrome Web Store',
    ],
    Enterprise: [
      'Download Chrome Browser',
      ' Chrome Browser for Enterprise',
      ' Chrome Devices',
      ' ChromeOS',
      'Google Cloud',
      'Google Workspace',
    ],
    Education: ['Google for Education', 'Devices for schools'],
    'Dev and Partners': [
      'Chromium',
      'ChromeOS',
      'Chrome Web Store',
      'Chrome Experiments',
      'Chrome Beta',
      'Chrome Dev',
      'Chrome Canary',
    ],
    Support: [
      'Chrome Help',
      ' Update Chrome',
      'Chrome Tips',
      'Google Chrome Blog',
    ],
  };
  return (
    <section className='bg-[#F1F3F4] w-full h-full py-8'>
      <div className=' flex gap-5 items-center px-10 '>
        <div className='font-semibold'>Follow us</div>
        <div className='flex gap-5'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='#000000'
            viewBox='0 0 256 256'
            className='w-6 h-6'
          >
            <path d='M234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-73.74,65-40,28A8,8,0,0,1,108,156V100a8,8,0,0,1,12.59-6.55l40,28a8,8,0,0,1,0,13.1Z'></path>
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6'
            fill='#000000'
            viewBox='0 0 256 256'
          >
            <path d='M245.66,77.66l-29.9,29.9C209.72,177.58,150.67,232,80,232c-14.52,0-26.49-2.3-35.58-6.84-7.33-3.67-10.33-7.6-11.08-8.72a8,8,0,0,1,3.85-11.93c.26-.1,24.24-9.31,39.47-26.84a110.93,110.93,0,0,1-21.88-24.2c-12.4-18.41-26.28-50.39-22-98.18a8,8,0,0,1,13.65-4.92c.35.35,33.28,33.1,73.54,43.72V88a47.87,47.87,0,0,1,14.36-34.3A46.87,46.87,0,0,1,168.1,40a48.66,48.66,0,0,1,41.47,24H240a8,8,0,0,1,5.66,13.66Z'></path>
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6'
            fill='#000000'
            viewBox='0 0 256 256'
          >
            <path d='M232,128a104.16,104.16,0,0,1-91.55,103.26,4,4,0,0,1-4.45-4V152h24a8,8,0,0,0,8-8.53,8.17,8.17,0,0,0-8.25-7.47H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,8-8.53A8.17,8.17,0,0,0,167.73,80H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0-8,8.53A8.17,8.17,0,0,0,96.27,152H120v75.28a4,4,0,0,1-4.44,4A104.15,104.15,0,0,1,24.07,124.09c2-54,45.74-97.9,99.78-100A104.12,104.12,0,0,1,232,128Z'></path>
          </svg>
        </div>
      </div>
      <hr className='h-0.5 my-8 bg-gray-400 ' />
      <div className='grid grid-cols-5 gap-8 px-10'>
        {Object.keys(footerData).map((data) => (
          <div className='space-y-6'>
            <div className='font-semibold'>{data}</div>
            <div className='space-y-3'>
              {footerData[data].map((el) => (
                <div className='font-medium  text-gray-500'>{el}</div>
              ))}
            </div>
          </div>
        ))}
        <div className=''></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <hr className='h-px my-8 bg-gray-400 ' />
      <div className='space-y-8'>
        <div className='flex gap-12 items-center px-10  '>
          <div className=' font-semibold text-3xl text-gray-600 hover:text-black'>
            Google
          </div>
          <div className='flex gap-4 items-center mt-2'>
            <div className='font-medium text-gray-600 hover:text-black'>
              Privacy and Terms
            </div>
            <div className='font-medium text-gray-600 hover:text-black'>
              About Google
            </div>
            <div className='font-medium text-gray-600 hover:text-black'>
              Google Products
            </div>
          </div>
        </div>
        <div className=' flex gap-3 px-10 items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            className='w-8 h-8 fill-gray-500 stroke-white'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z'
            />
          </svg>
          <div className='font-medium text-gray-600 hover:text-black'>Help</div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
