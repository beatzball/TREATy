import React from 'react';
import Intro from '~/components/Intro';
import Footer from '~/components/Footer';

const App: React.FC = () => {
  return (
    <section className='h-full flex flex-col'>
      <Intro />
      <Footer />
    </section>
  );
};

export default App;
