import React from 'react';
import AboutUsImage from '@/public/images/about.jpg';
import HeroSection from '../general/HeroSection';
import { Award, Heart, Lightbulb, Target } from 'lucide-react';
import Image from 'next/image';
import Companies from '../general/Companies';

export default function AboutUsMainPage() {
  const coreValues = [
    {
      icon: <Award className='w-12 h-12' />,
      title: 'Professionalism',
      description:
        'We maintain the highest standards of professionalism in every interaction, delivering reliable and quality service to our clients.',
    },
    {
      icon: <Target className='w-12 h-12' />,
      title: 'Integrity',
      description:
        'We conduct our business with honesty and transparency, building trust through ethical practices and accountability.',
    },
    {
      icon: <Heart className='w-12 h-12' />,
      title: 'Passion',
      description:
        'We are passionate about technology and dedicated to helping businesses leverage IT solutions for maximum impact.',
    },
    {
      icon: <Lightbulb className='w-12 h-12' />,
      title: 'Excellence',
      description:
        'We strive for excellence in everything we do, continuously improving and delivering solutions that exceed expectations.',
    },
  ];

  return (
    <main>
      <HeroSection
        heroImage={AboutUsImage}
        heading='About Upline Systems & IT Consulting'
        subheading='At Upline Systems & IT Consulting, we are dedicated to providing top-notch IT and systems solutions tailored to your business needs. Our team of experienced professionals works closely with clients to understand their unique challenges and deliver customized strategies that drive efficiency and growth.'
      />

      {/* Core Values Section */}
      <section className='py-20 px-6 bg-gradient-to-b from-gray-50 to-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              Our Core Values
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              These principles guide everything we do and define who we are as a
              company
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {coreValues.map((value, index) => (
              <div
                key={index}
                className='bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300'
              >
                <div className='mb-6 text-primary'>{value.icon}</div>
                <h3 className='text-2xl font-bold mb-3'>{value.title}</h3>
                <p className='text-gray-600'>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className='py-20 px-6 bg-secondary'>
        <div className='max-w-5xl mx-auto text-center'>
          <h2 className='text-4xl font-bold mb-6'>Why Choose Us?</h2>
          <p className='text-lg text-gray-600 mb-8'>
            We bring a unique combination of technical expertise, industry
            knowledge, and a client-first approach. Our solutions are not just
            about technology—they're about understanding your business and
            creating value that lasts.
          </p>
          <div className='grid md:grid-cols-3 gap-6 text-left'>
            <div className='bg-white p-6 rounded-lg shadow'>
              <h3 className='font-bold text-xl mb-2'>Experienced Team</h3>
              <p className='text-gray-600'>
                Our professionals bring years of industry experience and proven
                expertise.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow'>
              <h3 className='font-bold text-xl mb-2'>Tailored Solutions</h3>
              <p className='text-gray-600'>
                We customize our approach to fit your specific business needs
                and goals.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow'>
              <h3 className='font-bold text-xl mb-2'>Ongoing Support</h3>
              <p className='text-gray-600'>
                We provide continuous support to ensure your systems run
                smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Companies />
    </main>
  );
}
