'use client';
import React from 'react'
import dynamic from 'next/dynamic'

const EventCalander = dynamic(
  () => import('./EventCalander'),
  {
    ssr: false,
    loading : ()=> <p>Calander loading....</p>,
  }
);

function EventCalanderWraper() {
  return (
   <EventCalander />
  )
}

export default EventCalanderWraper
