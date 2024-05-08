import React from 'react';

const FrequentlyAsked = () => {
  const questions = [
    'How do I make Chrome my default web browser?',
    'How can I customize Chrome?',
    `What are Chrome's safety settings?`,
    `What is Chrome’s password manager?`,
    `How do I add a browser extension to Chrome?`,
    `How do I update Chrome?`,
  ];
  return (
    <>
      <div className='bg-[#F8F9FA] px-32 py-10 space-y-20'>
        <div className='text-center font-bold text-5xl    '>
          Frequently asked questions
        </div>
        <div className=''>
          {questions.map((question) => (
            <>
              <div className='flex justify-between font-bold text-2xl text-[#1967D2]'>
                <div className=''>{question}</div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-8 h-8'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 4.5v15m7.5-7.5h-15'
                  />
                </svg>
              </div>
              <hr className='h-0.5 my-8 bg-gray-400 ' />
            </>
          ))}
        </div>
      </div>
      <div className='px-16 py-10 bg-[#F8F9FA]'>
        <div className='bg-[#1A73E8] rounded-3xl w-full h-full overflow-hidden pt-24 px-48 '>
          <div className='font-bold text-center text-7xl text-white'>
            Take your browser with you
          </div>
          <div className='text-white mt-8 text-center text-xl'>
            Download Chrome on your mobile device or tablet and sign into your
            account for the same browser experience, everywhere.
          </div>
          <div className='flex justify-center mt-8'>
            <div className='bg-white px-6 py-4 rounded-full flex gap-3 text-[#1A73E8] font-semibold'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3'
                />
              </svg>
              Download Chrome
            </div>
          </div>
          <div className=' flex justify-end'>
            <div className='bg-white p-3 px-6 rounded-t-2xl w-36 flex flex-col justify-center '>
              <img
                src={
                  'https://www.google.com/chrome/static/images/go-mobile-qrs/qr-take-it-with-you-2x.webp'
                }
                alt='qrcode'
                className='w-24 h-24'
              />
              <div className='text-center'>Scan for the chrome app </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrequentlyAsked;
