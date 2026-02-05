import React from 'react';
import Hero from '@/public/images/hero.jpg';
import Image from 'next/image';
import HeroSection from '../general/HeroSection';
import Features from '../general/Features';
import ClientsWeServe from './ClientsWeServe';
import Companies from '../general/Companies';

type Props = {};

export default function HomeMainPage({}: Props) {
  return (
    <section className=''>
      <HeroSection
        heroImage={Hero}
        heading='Systems & IT Consulting Excellence'
        subheading='We are here to meet your systems and information technology needs, bringing productivity and excellence to your business.'
      />

      <Features />
      <ClientsWeServe />
      <Companies />
    </section>
  );
}
