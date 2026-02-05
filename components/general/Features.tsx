'use client';

import React from 'react';
import { Code2, Zap, Shield, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

type Props = {};

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

export default function Features({}: Props) {
  const features: Feature[] = [
    {
      icon: <Code2 className='w-12 h-12' />,
      title: 'Custom System Development',
      description:
        'Tailored IT solutions designed specifically for your business needs and workflows.',
      benefits: [
        'Scalable architecture',
        'Seamless integration',
        'Future-proof technology',
      ],
    },
    {
      icon: <Zap className='w-12 h-12' />,
      title: 'Performance Optimization',
      description:
        'Boost productivity and efficiency with optimized systems and streamlined processes.',
      benefits: ['Faster operations', 'Reduced downtime', 'Increased ROI'],
    },
    {
      icon: <Shield className='w-12 h-12' />,
      title: 'Enterprise Security',
      description:
        'Protect your business with robust security measures and compliance standards.',
      benefits: ['Data protection', 'Risk mitigation', 'Regulatory compliance'],
    },
  ];

  return (
    <section className='py-20 px-6 bg-gradient-to-b from-white to-gray-50'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            Why Choose Upline Systems
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            We deliver excellence through innovative solutions that transform
            your business operations
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid md:grid-cols-3 gap-8 mb-12'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'
            >
              {/* Animated Icon Container */}
              <div className='mb-6 text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300'>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className='text-2xl font-bold mb-3 group-hover:text-primary transition-colors'>
                {feature.title}
              </h3>

              {/* Description */}
              <p className='text-gray-600 mb-4'>{feature.description}</p>

              {/* Benefits List */}
              <ul className='space-y-2'>
                {feature.benefits.map((benefit, idx) => (
                  <li
                    key={idx}
                    className='flex items-center text-sm text-gray-700'
                  >
                    <ArrowRight className='w-4 h-4 mr-2 text-primary group-hover:translate-x-1 transition-transform' />
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* Hover Border Effect */}
              <div className='absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary transition-colors duration-300'></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className='w-full flex justify-center'>
          <Link className='text-center' href='/service'>
            <Button size='lg' className='group rounded-full cursor-pointer'>
              Explore Our Services
              <ArrowRight className='ml-2 group-hover:translate-x-1 transition-transform' />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
