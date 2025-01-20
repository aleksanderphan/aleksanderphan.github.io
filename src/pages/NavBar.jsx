import React from 'react';

const Navbar = React.memo(() => {
  return (
    <nav className='bg-white border-b border-gray-200'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex-shrink-0 mx-auto'>
              <a className='text-2xl font-bold text-gray-800' href='#'>
                Aleksander Phan
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
});

export default Navbar;
