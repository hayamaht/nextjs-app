import { Metadata } from 'next';
import Image from 'next/image'
import React from 'react'

export const metadata:Metadata = {
  title: "About Page",
  description: "About description",
};

export default function AboutPage() {
  return (
    <div className='container mx-auto p-10 sm:flex gap-10'>
      <div className='flex-1 flex flex-col gap-5'>
        <h2 className='text-3xl font-bold'>About Agency</h2>
        <h3 className='text-green-500 text-2xl'>We create digital ideas that are bigger, bolder, braver and better.</h3>
        <p className='text-lg'>We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services
        </p>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col gap-4'>
            <h2 className='text-primary'>10 K+</h2>
            <p>Year of experience</p>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-primary'>10 K+</h3>
            <p>Year of experience</p>
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='text-primary'>10 K+</h3>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className='relative flex-1 h-96'>
        <Image src={'/about.png'} alt='About Image' 
          fill priority 
          className='object-contain'
        />
      </div>
    </div>
  )
}
