'use client';

import React from 'react';
import {
  Building2,
  HeartPulse,
  GraduationCap,
  Landmark,
  ShoppingCart,
  Factory,
  Plane,
  Smartphone,
  Forklift,
} from 'lucide-react';

type Props = {};

interface Industry {
  icon: React.ReactNode;
  name: string;
}

export default function ClientsWeServe({}: Props) {
  const industries: Industry[] = [
    {
      icon: <Building2 className='w-12 h-12' />,
      name: 'Real Estate',
    },
    {
      icon: <Forklift className='w-12 h-12' />,
      name: 'Logistics & Supply Chain',
    },
    {
      icon: <GraduationCap className='w-12 h-12' />,
      name: 'Education',
    },
    {
      icon: <Landmark className='w-12 h-12' />,
      name: 'Finance & Banking',
    },
    {
      icon: <ShoppingCart className='w-12 h-12' />,
      name: 'Retail & E-commerce',
    },
    {
      icon: <Factory className='w-12 h-12' />,
      name: 'Manufacturing',
    },
    {
      icon: <Plane className='w-12 h-12' />,
      name: 'Travel & Hospitality',
    },
    {
      icon: <Smartphone className='w-12 h-12' />,
      name: 'Technology',
    },
  ];

  return (
    <section className='py-20 px-6 bg-secondary'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            Serving Our Clients Across Diverse Industries
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            We provide tailored IT solutions to businesses across various
            sectors
          </p>
        </div>

        {/* Industries Grid */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          {industries.map((industry, index) => (
            <div
              key={index}
              className='group flex flex-col items-center justify-center p-8 rounded-xl bg-white hover:bg-deep-primary transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl hover:-translate-y-1'
            >
              {/* Icon */}
              <div className='mb-4 text-deep-primary group-hover:text-white group-hover:scale-110 transition-all duration-300'>
                {industry.icon}
              </div>

              {/* Industry Name */}
              <h3 className='text-center font-semibold text-gray-800 group-hover:text-white transition-colors duration-300'>
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
