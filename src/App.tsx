import React from 'react';

const App: React.FC = () => {
  return (
    <section className='h-full flex flex-col'>
      <div className='flex flex-1 flex-col items-center justify-center bg-white'>
        <h1 className='text-5xl text-primary-500'>TREATy</h1>
        <img className='py-4' src='/static/beachball-192.png' alt='logo' />
        <h3 className='text-lg'>
          <a
            className='text-primary-800 hover:text-primary-400'
            href='https://tailwindcss.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Tailwind CSS
          </a>{' '}
          :{' '}
          <a
            className='text-primary-800 hover:text-primary-400'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            React
          </a>{' '}
          :{' '}
          <a
            className='text-primary-800 hover:text-primary-400'
            href='https://www.typescriptlang.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            TypeScript
          </a>
        </h3>
      </div>

      <footer className='flex justify-center'>
        <a
          className='items-center p-5 flex hover:text-secondary-600'
          href='https://github.com/beatzball/TREATy'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            alt='github'
            height='32'
            width='32'
            src='https://unpkg.com/simple-icons@latest/icons/github.svg'
          />
          <h2 className='text-md px-2'>by @beatzball</h2>
        </a>
      </footer>
    </section>
  );
};

export default App;
