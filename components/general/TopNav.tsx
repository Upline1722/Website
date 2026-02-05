'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { ArrowRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Logo from '../../public/logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {};

export default function TopNav({}: Props) {
  const [isFixed, setIsFixed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/service', label: 'Service' },
    { href: '/contact-us', label: 'Contact Us' },
    { href: '/about-us', label: 'About Us' },
  ];

  return (
    <>
      {/* Mobile Menu - Fixed and Non-scrollable */}
      {isMobileMenuOpen && (
        <div className='fixed inset-0 bg-white z-[90] md:hidden overflow-hidden'>
          <div className='flex flex-col items-center justify-center h-full space-y-8'>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-medium transition-opacity hover:opacity-100 ${
                  pathname === link.href
                    ? 'opacity-60 text-blue-600'
                    : 'opacity-100 text-gray-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant={'outline'}
              className='rounded-full mt-8'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start a Project <ArrowRight />
            </Button>
          </div>
        </div>
      )}

      <nav
        className={`w-full transition-all duration-300 z-[100] ${
          isFixed
            ? 'fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-md shadow-md px-6 py-4'
            : 'absolute top-0 left-0 right-0 bg-transparent px-6 py-4'
        }`}
      >
        <div className='max-w-[1400px] mx-auto flex items-center justify-between'>
          {/* Logo */}
          <Link href='/'>
            <Image
              src={Logo}
              alt='Upline Systems Consulting Logo'
              width={24}
              height={24}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-8'>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm ${
                  isFixed ? 'text-deep-primary' : 'text-white'
                } font-medium transition-opacity hover:opacity-100 ${
                  pathname === link.href ? 'opacity-60' : 'opacity-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <Link href='/contact-us'>
            <Button
              variant={'outline'}
              className={`bg-transparent hidden md:flex rounded-full cursor-pointer ${
                isFixed ? 'text-deep-primary border-deep-primary' : 'text-white'
              }`}
            >
              Start a Project <ArrowRight />
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden z-[110] relative ${
              isFixed ? 'text-deep-primary' : 'text-white'
            } ${isMobileMenuOpen ? 'text-gray-800' : ''}`}
          >
            {isMobileMenuOpen ? (
              <X className='w-6 h-6' />
            ) : (
              <Menu className='w-6 h-6' />
            )}
          </button>
        </div>
      </nav>
    </>
  );
}
