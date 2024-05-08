// import React from "react";
const StickyNavbar = () => {
  const navbar = ['Updates', 'Yours', 'Safe', 'Fast', 'By Google'];
  return (
    <>
      <div className='bg-white p-2 rounded-full shadow-sm mx-auto sticky top-7 flex items-center w-fit'>
        {navbar.map((nav, i) => (
          <a
            href='h'
            key={i}
            className='py-2 px-5 hover:bg-[#f8f9fa] rounded-full font-medium text-[#5f6368]'
          >
            {nav}
          </a>
        ))}
      </div>
    </>
  );
};

export default StickyNavbar;
