import CountChart from '@/components/CountChart'
import UserCard from '@/components/UserCard'
import React from 'react'

function page() {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* LEFT */}
      <div className='flex flex-col gap-8'>
        <div className='flex items-center gap-4 flex-wrap'>
          <UserCard type={"Students"} />
          <UserCard type={"teachers"} />
          <UserCard type={"Staffs"} />
          <UserCard type={"Parents"} />
        </div>

        <div>

          {/* COUNT CHART */}
          <div className='w-full lg:w-1/3 h-112.5'>
            <CountChart />
          </div>

          {/* ATTENDECE CHART */}
          <div>
            
          </div>
        </div>

        {/* BOTTOM CHART */}
        <div>

        </div>
      </div>

      {/* RIGHT */}
      <div>

      </div>
    </div>

  )
}

export default page
