import React from 'react';

import Image, { StaticImageData } from 'next/image';

type Props = {
  heroImage: StaticImageData;
  heading: string;
  subheading: string;
};

export default function HeroSection({ heroImage, heading, subheading }: Props) {
  return (
    <div className='relative w-full h-[80vh]'>
      <Image
        src={heroImage}
        alt='Hero Image'
        fill
        className='object-cover'
        priority
      />
      <div className='absolute inset-0 bg-black/50'></div>

      <div className='relative z-10 flex flex-col items-center justify-center h-full text-white px-6'>
        <h1 className='text-5xl md:text-6xl font-bold text-center mb-4'>
          {heading}
        </h1>
        <p className='text-lg md:text-xl text-center max-w-2xl'>{subheading}</p>
      </div>
    </div>
  );
}
