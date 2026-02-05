import React from 'react';

import AboutUsImage from '@/public/images/about.jpg';
import HeroSection from '../general/HeroSection';

export default function AboutIUsMainPage() {
  return (
    <section>
      <HeroSection
        heroImage={AboutUsImage}
        heading='About Upline Systems & IT Consulting'
        subheading='At Upline Systems & IT Consulting, we are dedicated to providing top-notch IT and systems solutions tailored to your business needs. Our team of experienced professionals works closely with clients to understand their unique challenges and deliver customized strategies that drive efficiency and growth.'
      />
    </section>
  );
}
