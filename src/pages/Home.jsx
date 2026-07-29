import React from 'react';

const skillGroups = [
  {
    title: 'Ready to work with',
    items: [
      { name: 'C#', icon: 'fa-c', accent: 'text-purple-400' },
      { name: 'VB.NET', icon: 'fa-v', accent: 'text-sky-400' },
      { name: 'TypeScript', icon: 'fa-code', accent: 'text-cyan-400' },
      { name: 'SQL Server', icon: 'fa-database', accent: 'text-amber-400' },
    ],
  },
  {
    title: 'Currently learning',
    items: [
      { name: 'Blazor', icon: 'fa-bolt', accent: 'text-fuchsia-400' },
      { name: 'Docker', icon: 'fa-docker', accent: 'text-sky-400' },
      { name: 'React/Next.js', icon: 'fa-react', accent: 'text-cyan-400' },
      { name: 'Node.js', icon: 'fa-node-js', accent: 'text-emerald-400' },
    ],
  },
  {
    title: 'Next up',
    items: [{ name: 'Rust', icon: 'fa-rust', accent: 'text-orange-400' }],
  },
];

const projects = [
  {
    title: 'T3ddit',
    image: 't3ddit.png',
    description: 'A Reddit-inspired social app built with the T3 stack.',
    link: 'https://t3ddit.vercel.app/',
    badge: 'Full-stack app',
  },
  {
    title: 'ThreeJS Tree & Lantern',
    image: 'lantern.png',
    description: 'An immersive 3D experience using Three.js and Blender assets.',
    link: 'https://three-lantern.vercel.app/',
    badge: '3D experience',
  },
  {
    title: 'Stock Watch',
    image: 'stock-watch.png',
    description: 'A stock monitoring dashboard for tracking market moves.',
    link: 'https://github.com/aleksanderphan/stock-watch',
    badge: 'In progress',
  },
  {
    title: 'This website',
    image: 'blazor.png',
    description: 'A Blazor version of my portfolio exploring a different stack.',
    link: 'https://github.com/aleksanderphan/blazor-test',
    badge: 'Experimental',
  },
];

const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:aleksanderphan11@gmail.com',
    icon: 'fa-envelope',
    color: 'bg-rose-600 hover:bg-rose-700',
  },
  {
    label: 'LinkedIn',
    href: 'https://id.linkedin.com/in/aleksander-phan-b51855287',
    icon: 'fa-linkedin',
    color: 'bg-sky-600 hover:bg-sky-700',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/+6282361944211',
    icon: 'fa-whatsapp',
    color: 'bg-emerald-600 hover:bg-emerald-700',
  },
];

function Home() {
  return (
    <main id='top' className='min-h-screen bg-slate-950 text-slate-100'>
      <section className='relative overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.18),_transparent_30%)]' />
        <div className='relative mx-auto flex max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28'>
          <div className='grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10'>
            <div className='mx-auto max-w-2xl text-center sm:mx-0 sm:text-left'>
              <p className='mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200'>
                Full-stack developer • Portfolio
              </p>
              <h1 className='text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl'>
                Building thoughtful digital experiences with modern tools.
              </h1>
              <p className='mt-6 text-base leading-8 text-slate-300 sm:text-lg'>
                I'm Aleksander, a developer who enjoys turning ideas into useful,
                polished web apps while continuously learning and improving.
              </p>
              <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
                <a
                  href='#projects'
                  className='w-full rounded-full bg-white px-6 py-3 text-center font-medium text-slate-900 transition hover:bg-slate-200 sm:w-auto'
                >
                  Explore projects
                </a>
                <a
                  href='#contact'
                  className='w-full rounded-full border border-white/20 px-6 py-3 text-center font-medium text-white transition hover:border-cyan-400/60 hover:text-cyan-300 sm:w-auto'
                >
                  Get in touch
                </a>
              </div>
            </div>

            <div className='rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur sm:p-8'>
              <p className='text-sm uppercase tracking-[0.3em] text-slate-400'>
                Currently focused on
              </p>
              <ul className='mt-6 space-y-4 text-slate-200'>
                <li className='flex items-center gap-3'>
                  <span className='h-2.5 w-2.5 rounded-full bg-cyan-400' />
                  C#, .NET, React, TypeScript and Tailwind
                </li>
                <li className='flex items-center gap-3'>
                  <span className='h-2.5 w-2.5 rounded-full bg-fuchsia-400' />
                  Full-stack ideas with clean architecture and UX in mind
                </li>
                <li className='flex items-center gap-3'>
                  <span className='h-2.5 w-2.5 rounded-full bg-emerald-400' />
                  Shipping useful products and learning through practice
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id='about' className='scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-10 max-w-3xl'>
            <p className='text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300'>
              About me
            </p>
            <h2 className='mt-3 text-3xl font-semibold text-white sm:text-4xl'>
              Curious, hands-on, and always improving.
            </h2>
            <p className='mt-4 text-lg leading-8 text-slate-300'>
              I enjoy working across the full stack and building apps that are not only functional, but also pleasant to use. My background blends practical development work with a strong interest in modern frameworks, UI craft, and continuous experimentation.
            </p>
          </div>

          <div className='grid gap-6 lg:grid-cols-2'>
            <div className='rounded-3xl border border-white/10 bg-slate-900/70 p-8'>
              <h3 className='text-xl font-semibold text-white'>What I bring</h3>
              <p className='mt-4 text-slate-300'>
                I like creating clean interfaces, making ideas tangible, and learning quickly when a new stack opens up better possibilities.
              </p>
            </div>
            <div className='rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8'>
              <h3 className='text-xl font-semibold text-white'>Tools I enjoy</h3>
              <p className='mt-4 text-slate-300'>
                C#, .NET, React, TypeScript, Tailwind CSS and modern deployment workflows are where I spend most of my time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='skills' className='px-4 py-6 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8 lg:p-10'>
          <div className='mb-8 text-center'>
            <p className='text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300'>
              Skills
            </p>
            <h2 className='mt-3 text-3xl font-semibold text-white'>
              A growing toolkit for building modern products.
            </h2>
          </div>

          <div className='grid gap-6 lg:grid-cols-3'>
            {skillGroups.map((group) => (
              <div key={group.title} className='rounded-2xl border border-white/10 bg-slate-950/70 p-5 sm:p-6'>
                <h3 className='text-xl font-semibold text-white'>{group.title}</h3>
                <div className='mt-5 flex flex-wrap gap-3'>
                  {group.items.map((item) => (
                    <div key={item.name} className='flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm text-slate-300'>
                      <i className={`fa-solid ${item.icon} ${item.accent}`} />
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id='projects' className='scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-10 max-w-3xl'>
            <p className='text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300'>
              Projects
            </p>
            <h2 className='mt-3 text-3xl font-semibold text-white sm:text-4xl'>
              Recent experiments and side projects.
            </h2>
          </div>

          <div className='grid gap-6 md:grid-cols-2'>
            {projects.map((project) => (
              <article key={project.title} className='flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-xl shadow-slate-950/20'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='h-52 w-full object-cover'
                  loading='lazy'
                />
                <div className='flex flex-1 flex-col p-6'>
                  <div className='mb-3 inline-flex w-fit rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200'>
                    {project.badge}
                  </div>
                  <h3 className='text-2xl font-semibold text-white'>{project.title}</h3>
                  <p className='mt-3 flex-1 text-slate-300'>{project.description}</p>
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='mt-6 inline-flex items-center gap-2 font-medium text-cyan-300 transition hover:text-cyan-200'
                  >
                    <span>View project</span>
                    <i className='fa-solid fa-arrow-up-right-from-square' />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id='contact' className='scroll-mt-24 px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8'>
        <div className='mx-auto max-w-7xl rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/80 p-6 sm:p-8 lg:p-10'>
          <div className='max-w-2xl'>
            <p className='text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300'>
              Contact
            </p>
            <h2 className='mt-3 text-3xl font-semibold text-white sm:text-4xl'>
              Let's build something meaningful together.
            </h2>
            <p className='mt-4 text-lg leading-8 text-slate-300'>
              If you want to connect, collaborate, or talk through an idea, feel free to reach out.
            </p>
          </div>

          <div className='mt-8 grid gap-4 md:grid-cols-3'>
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                className={`flex items-center justify-center gap-2 rounded-2xl px-4 py-4 font-semibold text-white transition ${link.color}`}
              >
                <i className={`fa-solid ${link.icon}`} />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className='border-t border-white/10 px-4 py-8 text-center text-sm text-slate-400 sm:px-6 lg:px-8'>
        <p>© 2026 Aleksander Phan. Built with React and Tailwind CSS.</p>
      </footer>
    </main>
  );
}

export default Home;
