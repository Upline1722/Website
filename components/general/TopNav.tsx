'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Logo from '../../public/logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {};

export default function TopNav({}: Props) {
  const [isFixed, setIsFixed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/service', label: 'Service' },
    { href: '/contact-us', label: 'Contact Us' },
    { href: '/clients', label: 'Clients' },
    { href: '/about-us', label: 'About Us' },
  ];

  return (
    <nav
      className={`w-full transition-all duration-300 z-[100] ${
        isFixed
          ? 'fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-md shadow-md z-50 px-6 py-4'
          : 'absolute top-0 left-0 right-0 bg-transparent px-6 py-4'
      }`}
    >
      <div className='w-[1400px] mx-auto flex items-center justify-between'>
        <Image
          src={Logo}
          alt='Upline Systems Consulting Logo'
          width={24}
          height={24}
        />

        <div className='flex items-center gap-8'>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm ${isFixed ? 'text-deep-primary' : 'text-white'} font-medium transition-opacity hover:opacity-100 ${
                pathname === link.href ? 'opacity-60' : 'opacity-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Button variant={'outline'} className='rounded-full'>
          Start a Project <ArrowRight />
        </Button>
      </div>
    </nav>
  );
}
