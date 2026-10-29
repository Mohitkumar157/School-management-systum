
import Announcement from '@/components/Announcement'
import AttendanceChart from '@/components/AttendanceChart'
import CountChart from '@/components/CountChart'
import EventCalanderWraper from '@/components/eventCalander/EventCalanderWraper'
import FinanceChart from '@/components/FinanceChart'
import UserCard from '@/components/UserCard'
import React from 'react'

function page() {
  return (
    <div className='p-4 w-full flex gap-4 flex-col md:flex-row'>
      {/* LEFT */}
      <div className='flex flex-col gap-8 w-full md:w-[65%]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          <UserCard type={"Students"} className={"bg-lamaPurpleLight"} />
          <UserCard type={"teachers"} className={"bg-lamaPurple"} />
          <UserCard type={"Staffs"} className={"bg-lamaYellow"} />
          <UserCard type={"Parents"} className={"bg-lamaRed"} />
        </div>

        <div className='flex flex-col items-start lg:flex-row gap-4'>

          {/* COUNT CHART */}
          <div className='w-full lg:w-1/3 lg:h-90 h-112.5'>
            <CountChart />
          </div>

          {/* ATTENDECE CHART */}
          <div className='w-full lg:w-2/3 lg:h-90 h-112.5'>
            <AttendanceChart />
          </div>
        </div>

        {/* BOTTOM CHART */}
        <div className="w-full lg:h-90 h-112.5">
          <FinanceChart />
        </div>
      </div>

      {/* RIGHT */}
      <div className='w-full md:w-[35%] flex flex-col gap-4'>
        {/* CALANDER */}
        <EventCalanderWraper />
        <Announcement />
      </div>
    </div>

  )
}

export default page
