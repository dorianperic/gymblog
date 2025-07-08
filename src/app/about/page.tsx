"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import FoundersSection from '../../../components/AboutComponents/Founders'

const InteractiveMap = dynamic(
  () => import('../../../components/AboutComponents/InteractiveMap'),
  { ssr: false }
)

const AboutPage = () => {
  return (
    <div className="p-6">
      <FoundersSection/>
      <h1 className="text-4xl font-bold my-16 text-center">Fit <span className='text-red-500 ml-[-10px]'>Zone</span> Locations</h1>
      <InteractiveMap />
    </div>
  )
}

export default AboutPage
