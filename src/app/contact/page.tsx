import ContactForm from '@/components/forms/contact-form';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react'

export const metadata:Metadata = {
  title: "Contact",
  description: "Contact description",
};

export default function ContactPage() {
  return (
    <div className='container mx-auto p-10 space-y-6 md:flex md:space-y-0 md:space-x-6'>
      <div className='flex-1 relative h-[500px] '>
        <Image src={'/contact.png'} alt='' 
          fill priority sizes='500px'
          className='object-contain'
        />
      </div>
      <div className='flex-1'>
        <ContactForm />
      </div>
    </div>
  )
}
