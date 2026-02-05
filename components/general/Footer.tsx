import React from 'react';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import Image from 'next/image';
import Logo from '@/public/logo.png';
import Link from 'next/link';

type Props = {};

export default function Footer({}: Props) {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/service', label: 'Service' },
    { href: '/contact-us', label: 'Contact Us' },
    { href: '/about-us', label: 'About Us' },
  ];

  return (
    <footer className='bg-gray-900 text-white py-12 px-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid md:grid-cols-4 gap-8 mb-8'>
          {/* Logo & Description */}
          <div>
            <Image
              src={Logo}
              alt='Upline Systems Consulting Logo'
              width={50}
              height={50}
              className='mb-4'
            />
            <p className='text-gray-400 text-sm'>
              System & IT Consulting for Business Excellence
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2 text-sm text-gray-400'>
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='hover:text-white transition-colors'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='font-semibold mb-4'>Contact Us</h3>
            <div className='space-y-3 text-sm text-gray-400'>
              <div className='flex items-center gap-2'>
                <Phone className='w-4 h-4' />
                <span>+234 XXX XXX XXXX</span>
              </div>
              <div className='flex items-center gap-2'>
                <Mail className='w-4 h-4' />
                <span>info@uplinesystems.com</span>
              </div>
              <div className='flex items-center gap-2'>
                <MapPin className='w-4 h-4' />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className='font-semibold mb-4'>Follow Us</h3>
            <div className='flex gap-4'>
              <a href='#' className='hover:text-blue-400 transition-colors'>
                <Facebook className='w-5 h-5' />
              </a>
              <a href='#' className='hover:text-blue-400 transition-colors'>
                <Twitter className='w-5 h-5' />
              </a>
              <a href='#' className='hover:text-blue-400 transition-colors'>
                <Linkedin className='w-5 h-5' />
              </a>
              <a href='#' className='hover:text-blue-400 transition-colors'>
                <Instagram className='w-5 h-5' />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='border-t border-gray-800 pt-8 text-center text-sm text-gray-400'>
          <p>
            &copy; {new Date().getFullYear()} Upline Systems Consulting. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
