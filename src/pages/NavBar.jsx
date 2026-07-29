import React from 'react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = React.memo(() => {
  return (
    <header className='sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl'>
      <nav className='mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8'>
        <a href='#top' className='text-base font-semibold tracking-wide text-white sm:text-lg'>
          Aleksander Phan
        </a>
        <div className='flex flex-wrap items-center justify-end gap-2 text-sm text-slate-300 sm:gap-6'>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className='transition hover:text-white'
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
});

export default Navbar;
