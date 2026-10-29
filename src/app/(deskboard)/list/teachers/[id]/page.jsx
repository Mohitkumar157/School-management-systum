
import React from 'react'
import { teachersData } from '@/lib/data';
import Image from 'next/image';
async function teacherDetailPage({ params }) {
  const { id } = await params;

  const teacher = teachersData.find((teacher) => teacher.id === Number(id));


  return (
    <div className='p-4 flex-1 flex flex-col lg:flex-row gap-4'>
      <div className='lg:w-2/3 w-full bg-amber-400'>
        <div className='flex  gap-4 md:flex-row flex-col'>
          <div>
            <div className='flex items-start justify-center gap-2 w-full p-4'>
              {/* Teacher Profile picture */}
              <div className="w-40 h-40 shrink-0 rounded-full overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Teacher profile picture"
                  width={144}
                  height={144}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Teacher details */}
              <div>
                <h1>Teacher Name</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                <div className='grid grid-cols-2 gap-2'>
                 

                    <div className='flex items-center gap-2'>
                      <Image
                        src={"/blood.png"}
                        alt='blood group'
                        width={20}
                        height={20}
                        className='w-3.5 h-3.5 object-cover '
                      />
                      <span className='text-[12px] font-semibold text-[#444444]'>A+</span>
                    </div>

                    <div className='flex items-center gap-2'>
                      <Image
                        src={"/calendar.png"}
                        alt='calender'
                        width={20}
                        height={20}
                        className='w-3.5 h-3.5 object-cover'
                      />
                      <span className='text-[12px] font-semibold text-[#444444]'>January 2025</span>
                    </div>


                  

                 

                    <div className='flex items-center gap-2'>
                      <Image
                        src={"/mail.png"}
                        alt='email'
                        width={20}
                        height={20}
                        className='w-3.5 h-3.5 object-cover '
                      />
                      <span className='text-[12px] font-semibold text-[#444444]'>elem@gmail.com</span>
                    </div>

                    <div className='flex items-center gap-2'>
                      <Image
                        src={"/phone.png"}
                        alt='phone'
                        width={20}
                        height={20}
                        className='w-3.5 h-3.5 object-cover '
                      />
                      <span className='text-[12px] font-semibold text-[#444444]'>8851801918</span>
                    </div>


                  

                </div>
              </div>

            </div>
          </div>
          <div className=' w-full'>
            <div className='grid grid-cols-2 gap-4'>
              <div className='bg-white'>1</div>
              <div className='bg-white'>2</div>
              <div className='bg-white'>3</div>
              <div className='bg-white'>4</div>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:w-1/3 w-full bg-gray-600'>right</div>
    </div>
  )
}

export default teacherDetailPage;