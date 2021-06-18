import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ totalItems }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    console.log(menuOpen);
  }, [menuOpen]);

  return (
    <nav className='bg-white mx-auto px-6 py-3 shadow w-screen sticky top-0 z-50'>
      <div className='FlexContainer flex justify-between items-center'>
        <div>
          <Link
            className='text-gray-800 text-xl font-bold md:text-2xl hover:text-yellow-900'
            to='/'
          >
            SAPONIFY
          </Link>
        </div>

        {/* <!-- Cart & Menu --> */}
        <div className='CartAndMenu flex flex-row-reverse md:flex-row'>
          {/* <!-- Mobile menu button --> */}
          <div className='flex ml-5 md:hidden' onClick={handleToggle}>
            <button
              type='button'
              className='text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition ease-out duration-500'
              aria-label='toggle menu'
            >
              {' '}
              {menuOpen ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg viewBox='0 0 24 24' className='h-6 w-6 fill-current'>
                  <path
                    fill-rule='evenodd'
                    d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                  ></path>
                </svg>
              )}
            </button>
          </div>
          {/* PUT MENU BAR AND CART HERE */}
          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
          <div
            className={
              'MenuPanel mt-9 md:mt-0 md:flex items-center shadow md:shadow-none absolute md:relative left-0 md:right-0 z-10 w-screen md:w-auto bg-white transition ease-out duration-500 ' +
              (menuOpen ? 'block' : 'hidden')
            }
          >
            <div className='flex flex-col text-center md:flex-row md:mx-6'>
              <Link
                className='my-1 text-sm text-gray-700 font-medium hover:text-yellow-900 md:mx-4 md:my-0'
                to='/'
              >
                Home
              </Link>
              <a
                className='my-1 text-sm text-gray-700 font-medium hover:text-yellow-900 md:mx-4 md:my-0'
                href='/#products'
              >
                Shop
              </a>
              <a
                className='my-1 text-sm text-gray-700 font-medium hover:text-yellow-900 md:mx-4 md:my-0'
                href='/#contact'
              >
                Contact
              </a>
              <Link
                className='my-1 text-sm text-gray-700 font-medium hover:text-yellow-900 md:mx-4 md:my-0'
                to='/about'
              >
                About
              </Link>
            </div>
          </div>
          <div className='flex justify-center md:block'>
            {location.pathname === '/cart' ||
            location.pathname === '/checkout' ? null : (
              <Link
                className='relative inline-block text-gray-700 hover:text-yellow-900'
                to='/cart'
              >
                <svg
                  className='h-5 w-5'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>

                {totalItems === 0 ? null : (
                  <span class='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full'>
                    {totalItems}
                  </span>
                )}
              </Link>
            )}
          </div>
        </div>

        {/* END OF CART  */}
      </div>
    </nav>
  );
};

export default Navbar;
