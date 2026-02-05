'use client';

import React, { useState } from 'react';
import HeroSection from '../general/HeroSection';
import ContactUsHero from '@/public/images/contact.jpg';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

type Props = {};

export default function ContactUsMainPage({}: Props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link
    const mailtoLink = `mailto:info@uplinesystems.com?subject=${encodeURIComponent(
      formData.subject,
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`,
    )}`;

    window.location.href = mailtoLink;

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <section>
      <HeroSection
        heroImage={ContactUsHero}
        heading='Contact Us'
        subheading='Get in touch with us'
      />

      <div className='max-w-7xl mx-auto px-6 py-20'>
        <div className='grid md:grid-cols-2 gap-12'>
          {/* Contact Information */}
          <div>
            <h2 className='text-3xl font-bold mb-6'>Get In Touch</h2>
            <p className='text-gray-600 mb-8'>
              Have a question or want to discuss your IT needs? We'd love to
              hear from you. Send us a message and we'll respond as soon as
              possible.
            </p>

            <div className='space-y-6'>
              <div className='flex items-start gap-4'>
                <div className='bg-light-primary p-3 rounded-lg'>
                  <Mail className='w-6 h-6 text-primary' />
                </div>
                <div>
                  <h3 className='font-semibold mb-1'>Email</h3>
                  <p className='text-gray-600'>info@uplinesystems.com</p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='bg-light-primary p-3 rounded-lg'>
                  <Phone className='w-6 h-6 text-primary' />
                </div>
                <div>
                  <h3 className='font-semibold mb-1'>Phone</h3>
                  <p className='text-gray-600'>+234 XXX XXX XXXX</p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='bg-light-primary p-3 rounded-lg'>
                  <MapPin className='w-6 h-6 text-primary' />
                </div>
                <div>
                  <h3 className='font-semibold mb-1'>Location</h3>
                  <p className='text-gray-600'>Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='bg-white p-8 rounded-xl shadow-lg'>
            <h2 className='text-3xl font-bold mb-6'>Send Us A Message</h2>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <Label htmlFor='name'>Full Name *</Label>
                <Input
                  id='name'
                  name='name'
                  type='text'
                  placeholder='John Doe'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='mt-2'
                />
              </div>

              <div>
                <Label htmlFor='email'>Email Address *</Label>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='john@example.com'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='mt-2'
                />
              </div>

              <div>
                <Label htmlFor='phone'>Phone Number</Label>
                <Input
                  id='phone'
                  name='phone'
                  type='tel'
                  placeholder='+234 XXX XXX XXXX'
                  value={formData.phone}
                  onChange={handleChange}
                  className='mt-2'
                />
              </div>

              <div>
                <Label htmlFor='subject'>Subject *</Label>
                <Input
                  id='subject'
                  name='subject'
                  type='text'
                  placeholder='How can we help you?'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className='mt-2'
                />
              </div>

              <div>
                <Label htmlFor='message'>Message *</Label>
                <Textarea
                  id='message'
                  name='message'
                  placeholder='Tell us about your project or inquiry...'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className='mt-2'
                />
              </div>

              <Button
                type='submit'
                className='w-full'
                size='lg'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className='ml-2 w-4 h-4' />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
