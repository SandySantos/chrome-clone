const Navbar = () => {
  const navbar = ['AI Innovations', 'Features', 'Safety', 'By Google'];
  return (
    <>
      <div className='w-full bg-white flex items-center justify-start gap-3 p-2 sticky top-0 shadow-sm roboto-medium'>
        <div className='flex justify-center items-center gap-3 '>
          <img
            className='w-9 h-10'
            src={
              'https://www.google.com/chrome/static/images/chrome-logo-m100.svg'
            }
            alt='logo'
          />
          <span className='text-[1.6rem] font-normal text-[#656363]'>
            chrome
          </span>
        </div>
        <div className='mt-1'>
          {navbar.map((nav, i) => (
            <a
              href='k'
              key={i}
              className='p-3  hover:bg-[#f8f9fa] rounded-md font-medium text-[#5f6368]'
            >
              {nav}
            </a>
          ))}
        </div>
        <a
          href='#href'
          className='p-3 mt-1 hover:bg-[#f8f9fa] rounded-md font-medium text-[#5f6368]'
        >
          <span className='flex gap-0 items-center'>
            Extensions
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-5 h-5'
            >
              <path
                fillRule='evenodd'
                d='M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z'
                clipRule='evenodd'
              />
            </svg>
          </span>
        </a>
      </div>
    </>
  );
};

export default Navbar;
