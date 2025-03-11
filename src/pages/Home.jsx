import React, { useEffect } from 'react';

function Home() {
  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 20,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    const handleScroll = (event) =>
      handleSmoothScroll(event, event.target.getAttribute('href'));

    links.forEach((link) => link.addEventListener('click', handleScroll));

    return () => {
      links.forEach((link) => link.removeEventListener('click', handleScroll));
    };
  }, []);

  return (
    <div className='min-h-screen flex flex-col items-center bg-gray-100 text-gray-800'>
      <div className='w-full bg-gray-900 text-white shadow sticky top-0 rounded-b-lg'>
        <nav className='container mx-auto flex justify-center space-x-8 py-2'>
          <a
            href='#about'
            className='hover:text-gray-300'
            onClick={(e) => handleSmoothScroll(e, '#about')}
          >
            About
          </a>
          <a
            href='#projects'
            className='hover:text-gray-300'
            onClick={(e) => handleSmoothScroll(e, '#projects')}
          >
            Projects
          </a>
          <a
            href='#contact'
            className='hover:text-gray-300'
            onClick={(e) => handleSmoothScroll(e, '#contact')}
          >
            Contact
          </a>
        </nav>
      </div>

      <section
        id='about'
        className='container mx-auto py-16 flex flex-col items-center'
      >
        <h2 className='text-4xl font-bold mb-4'>About Me</h2>
        <p className='text-lg text-gray-600 max-w-2xl text-center mb-8'>
          I am a full-stack developer with a passion for learning and exploring
          new things.
        </p>
        <p>
          This website created using{' '}
          <a
            href='https://react.dev/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-cyan-600 font-semibold hover:underline'
          >
            React
          </a>
          {''} and{' '}
          <a
            href='https://tailwindcss.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-cyan-600 font-semibold hover:underline'
          >
            Tailwind CSS
          </a>
          .
        </p>

        <section id='skills' className='container w-full py-8'>
          <h2 className='text-3xl font-bold mb-6 text-center'>Skills</h2>
          <div className='mb-8'>
            <h3 className='text-2xl font-bold mb-4 text-center'>
              Ready To Work With
            </h3>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 text-center'>
              <div className='flex flex-col items-center'>
                <div className='flex flex-row items-center'>
                  <i className='fab fa-c fa-2x mb-2 text-purple-600'></i>
                  <i className='fab fa-hashtag fa-2x mb-2 text-purple-600'></i>
                </div>
                <p className='text-lg text-gray-700'>C#</p>
              </div>
              <div className='flex flex-col items-center'>
                <div className='flex flex-row items-center'>
                  <i className='fab fa-v fa-2x mb-2 text-blue-600'></i>
                  <i className='fab fa-b fa-2x mb-2 text-blue-600'></i>
                </div>
                <p className='text-lg text-gray-700'>VB.NET</p>
              </div>
              <div className='flex flex-col items-center'>
                <i className='fab fa-js fa-2x mb-2 text-yellow-500'></i>
                <p className='text-lg text-gray-700'>JavaScript</p>
              </div>
              <div className='flex flex-col items-center'>
                <i className='fas fa-database fa-2x mb-2 text-blue-600'></i>
                <p className='text-lg text-gray-700'>SQL Server</p>
              </div>
            </div>
          </div>

          <div className='mb-8'>
            <h3 className='text-2xl font-bold mb-4 text-center'>
              Currently Learning
            </h3>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 text-center'>
              <div className='flex flex-col items-center'>
                <i className='fab fa-at fa-2x mb-2 text-purple-600'></i>
                <p className='text-lg text-gray-700'>Blazor</p>
              </div>
              <div className='flex flex-col items-center'>
                <i className='fab fa-docker fa-2x mb-2 text-blue-600'></i>
                <p className='text-lg text-gray-700'>Docker</p>
              </div>
              <div className='flex flex-col items-center'>
                <i className='fab fa-react fa-2x mb-2 text-blue-600'></i>
                <p className='text-lg text-gray-700'>React</p>
              </div>
              <div className='flex flex-col items-center'>
                <i className='fab fa-node fa-2x mb-2 text-green-600'></i>
                <p className='text-lg text-gray-700'>Node.js</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-2xl font-bold mb-4 text-center'>
              Plan To Learn
            </h3>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 text-center'>
              <div className='flex flex-col items-center'>
                <i className='fab fa-rust fa-2x mb-2 text-orange-500'></i>
                <p className='text-lg text-gray-700'>Rust</p>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section id='projects' className='container mx-auto py-16'>
        <h2 className='text-4xl font-bold text-center mb-8'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <img
              src='https://stock-watch-sand.vercel.app/'
              alt='Project Image'
              className='w-full h-48 object-cover mb-4 rounded-t-lg'
            />
            <a
              href='https://stock-watch-idx.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-2xl font-bold mb-2 hover:underline'
            >
              Stock Watch
            </a>
            <p className='text-gray-600 mb-4'>
              IDX Stock Watcher (Work in Progress)
            </p>
            <a
              href='https://github.com/aleksanderphan/stock-watch'
              target='_blank'
              rel='noopener noreferrer'
              className='block bg-slate-800 hover:bg-slate-900 text-white py-2 px-4 rounded-lg transition duration-300 text-center'
            >
              <i className='fab fa-lg fa-github mr-2'></i>View on GitHub
            </a>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <img
              src='https://via.placeholder.com/1920x1080'
              alt='Project Image'
              className='w-full h-48 object-cover mb-4 rounded-t-lg'
            />
            <h3 className='text-2xl font-bold mb-2'>This Website</h3>
            <p className='text-gray-600 mb-4'>
              But, using{' '}
              <span className='text-purple-800 font-semibold'>Blazor</span>{' '}
              ASP.NET Core
            </p>
            <a
              href='https://github.com/aleksanderphan/blazor-test'
              target='_blank'
              rel='noopener noreferrer'
              className='block bg-slate-800 hover:bg-slate-900 text-white py-2 px-4 rounded-lg transition duration-300 text-center'
            >
              <i className='fab fa-lg fa-github mr-2'></i>View on GitHub
            </a>
          </div>
        </div>
      </section>

      <section id='contact' className='mx-auto py-16'>
        <h2 className='text-4xl font-bold mb-4 text-center'>Contact Me</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <a
            href='mailto:aleksanderphan11@gmail.com'
            className='contact-item bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center transition-colors duration-300 w-80 md:w-auto'
          >
            <i className='fa fa-envelope mr-2'></i> Email
          </a>
          <a
            href='https://id.linkedin.com/in/aleksander-phan-b51855287'
            target='_blank'
            rel='noopener noreferrer'
            className='contact-item bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center transition-colors duration-300 w-80 md:w-auto'
          >
            <i className='fa fa-linkedin mr-2'></i> LinkedIn
          </a>
          <a
            href='https://wa.me/+6282361944211'
            target='_blank'
            rel='noopener noreferrer'
            className='contact-item bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center transition-colors duration-300 w-80 md:w-auto'
          >
            <i className='fa fa-whatsapp mr-2'></i> WhatsApp
          </a>
        </div>
      </section>

      <footer className='w-full bg-white py-4 text-center'>
        <p className='text-gray-600'>&copy; 2024. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
