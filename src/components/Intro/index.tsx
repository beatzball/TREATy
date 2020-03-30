import React from 'react';

export default () => (
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
);
