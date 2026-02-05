import React from 'react';
import Service from '@/public/images/clients.jpg';
import Service2 from '@/public/images/service-2.jpg';

import HeroSection from '../general/HeroSection';
import {
  Network,
  Laptop,
  Camera,
  Lock,
  ShoppingCart,
  Globe,
} from 'lucide-react';
import Image from 'next/image';

type Props = {};

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
}

export default function ServiceMainPage({}: Props) {
  const services: ServiceItem[] = [
    {
      icon: <Network className='w-12 h-12' />,
      title: 'Network Design / Implementation',
      description:
        'We design, build, and manage computer networks and other related equipment like printers, switches, access points, routers, and network storage devices connected together using physical wires and cables or by wireless means.',
      features: [
        'Network architecture design',
        'Infrastructure setup',
        'Wireless & wired solutions',
        'Network optimization',
      ],
    },
    {
      icon: <Laptop className='w-12 h-12' />,
      title: 'Hardware / Software Support',
      description:
        'We provide hardware and software support services that cover all IT hardware and software including networks, servers, desktops, laptops, and printers.',
      features: [
        'Technical troubleshooting',
        'System maintenance',
        'Software installation & updates',
        '24/7 support availability',
      ],
    },
    {
      icon: <Camera className='w-12 h-12' />,
      title: 'CCTV Installation / Maintenance',
      description:
        'We provide CCTV installation & maintenance from consultation to design, professional installation to expert maintenance that suits your needs.',
      features: [
        'Site assessment & consultation',
        'Professional installation',
        'Remote monitoring setup',
        'Regular maintenance & support',
      ],
    },
    {
      icon: <Lock className='w-12 h-12' />,
      title: 'Access Control',
      description:
        'We install physical access control systems that typically include locked gates, doors or barriers which can be opened using identity authentication methods such as RFID access cards, pin codes, face recognition, and fingerprints.',
      features: [
        'RFID card systems',
        'Biometric authentication',
        'PIN code access',
        'Integrated security solutions',
      ],
    },
    {
      icon: <ShoppingCart className='w-12 h-12' />,
      title: 'IT Procurement Services',
      description:
        'We purchase and implement information technology (IT) needs in accordance with organization strategy and process.',
      features: [
        'Vendor management',
        'Cost optimization',
        'Quality assurance',
        'Strategic IT planning',
      ],
    },
    {
      icon: <Globe className='w-12 h-12' />,
      title: 'Web Development / Digital Marketing',
      description:
        "Digital marketing forms part of any company's web development strategy. It is no longer enough to develop a website and just leave it. Digital marketing tactics need to be developed so that the website remains current and can be found.",
      features: [
        'Custom web development',
        'SEO optimization',
        'Social media marketing',
        'Content strategy',
      ],
    },
  ];

  return (
    <main>
      <HeroSection
        heroImage={Service}
        heading='Our Service Offerings'
        subheading='We provide top-notch systems and IT consulting services to help your business thrive in the digital age.'
      />

      {/* Services Grid Section */}
      <section className='py-20 px-6 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold mb-4'>
              Comprehensive IT Solutions
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              From network infrastructure to digital marketing, we offer a full
              suite of services designed to meet your technology needs and drive
              business growth.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map((service, index) => (
              <div
                key={index}
                className='group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-2xl hover:border-primary transition-all duration-300'
              >
                {/* Icon */}
                <div className='mb-6 text-primary group-hover:scale-110 transition-transform duration-300'>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className='text-2xl font-bold mb-4 group-hover:text-primary transition-colors'>
                  {service.title}
                </h3>

                {/* Description */}
                <p className='text-gray-600 mb-6 leading-relaxed'>
                  {service.description}
                </p>

                {/* Features */}
                {service.features && (
                  <ul className='space-y-2'>
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className='flex items-start text-sm text-gray-700'
                      >
                        <span className='text-primary mr-2'>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services Section */}
      <section className='py-20 px-6 bg-secondary'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-4xl font-bold mb-6'>
                Why Choose Our Services?
              </h2>
              <p className='text-gray-600 mb-6'>
                At Upline Systems Consulting, we don't just provide services—we
                deliver solutions that transform your business operations and
                drive measurable results.
              </p>
              <div className='space-y-4'>
                <div className='flex items-start gap-3'>
                  <div className='bg-blue-600 text-white rounded-full p-2 mt-1'>
                    ✓
                  </div>
                  <div>
                    <h4 className='font-semibold mb-1'>Expert Team</h4>
                    <p className='text-gray-600 text-sm'>
                      Certified professionals with years of industry experience
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='bg-blue-600 text-white rounded-full p-2 mt-1'>
                    ✓
                  </div>
                  <div>
                    <h4 className='font-semibold mb-1'>Customized Approach</h4>
                    <p className='text-gray-600 text-sm'>
                      Solutions tailored to your specific business needs
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='bg-blue-600 text-white rounded-full p-2 mt-1'>
                    ✓
                  </div>
                  <div>
                    <h4 className='font-semibold mb-1'>Ongoing Support</h4>
                    <p className='text-gray-600 text-sm'>
                      Continuous maintenance and technical assistance
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='bg-blue-600 text-white rounded-full p-2 mt-1'>
                    ✓
                  </div>
                  <div>
                    <h4 className='font-semibold mb-1'>Quality Assurance</h4>
                    <p className='text-gray-600 text-sm'>
                      Rigorous testing and quality control processes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='relative h-[400px] rounded-xl overflow-hidden shadow-lg'>
              <Image
                src={Service2}
                alt='Our Services'
                fill
                className='object-cover'
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
