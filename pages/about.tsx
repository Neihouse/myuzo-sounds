import React from 'react';
import TeamSection from '../components/TeamSection';

export default function About() {
  return (
    <div className='my-8'>
      <h1 className='text-4xl font-bold text-center mb-8'>About Us</h1>
      <p className='text-lg mb-8'>
        Myuzo Sounds is the premier destination for high-quality music samples. Our mission is to provide
        music creators with the resources they need to produce outstanding work. Whether you're a professional
        producer or just starting out, you'll find a wide selection of samples that fit your creative needs.
      </p>
      <TeamSection />
    </div>
  );
}