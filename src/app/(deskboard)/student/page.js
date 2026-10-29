import Announcement from '@/components/Announcement'
import EventCalanderWraper from '@/components/eventCalander/EventCalanderWraper'
import BigCalander from '@/components/student/BigCalander'
import React from 'react'

function page() {
  return (
    <div className='p-4 w-full flex gap-4 flex-col lg:flex-row'>
      {/* left */}
      <div className='w-full lg:w-2/3'>
        <div className='w-full bg-white rounded-md h-full p-4'>
          <h1 className='text-lg font-semibold text-lamaText'>Schedule(4A)</h1>
          <BigCalander />
        </div>
      </div>

      <div className='w-full lg:w-1/3 flex flex-col gap-4'>
        {/* CALANDER */}
        <EventCalanderWraper />
        <Announcement />
      </div>
    </div>
  )
}

export default page
