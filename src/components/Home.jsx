import StickyNavbar from './StickyNavbar';

const Home = () => {
  return (
    <>
      <div className='mx-auto w-full grid justify-center m-8 gap-3 text-gray-800'>
        <div className='flex justify-center'>
          <img
            src={
              'https://www.google.com/chrome/static/images/chrome-logo-m100.svg'
            }
            alt='logo'
          />
        </div>

        <div className='text-center text-6xl font-bold tracking-tight'>
          The browser
        </div>
        <div className='text-center text-6xl font-bold tracking-tight'>
          built to be yours
        </div>
      </div>
      <StickyNavbar />
      <p className=' py-4 w-full flex justify-center items-center mx-auto text-gray-600 font-normal'>
        Need the Chrome installer?{' '}
        <a href='#l' className='text-blue-600'>
          Download here{' '}
        </a>
      </p>
    </>
  );
};

export default Home;
