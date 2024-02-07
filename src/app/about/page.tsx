import { Metadata } from 'next';
import Image from 'next/image'
import React from 'react'

export const metadata:Metadata = {
  title: "About Page",
  description: "About description",
};

export default function AboutPage() {
  return (
    <div className='container mx-auto p-10 sm:flex gap-10 space-y-10 sm:space-y-0'>
      <div className='flex-1 flex flex-col gap-5'>
        <h2 className='text-xl font-bold text-primary'>About Agency</h2>
        <h3 className='text-4xl font-black'>We create digital ideas that are bigger, bolder, braver and better.</h3>
        <p className='text-lg'>We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services
        </p>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col gap-4'>
            <h2 className='text-primary font-black text-2xl'>10 K+</h2>
            <p>Year of experience</p>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-primary font-black text-2xl'>10 K+</h3>
            <p>Year of experience</p>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-primary font-black text-2xlK'>10 K+</h3>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className='relative flex-1 h-96'>
        <Image src={'/about.png'} alt='About Image' 
          fill priority sizes='500px'
          className='object-contain'
        />
      </div>
    </div>
  )
}
