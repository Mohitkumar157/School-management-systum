import Menu from '@/components/Menu';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function DeskboardLayout({ children }) {
  return (
    <div className='w-full h-screen flex'>

      <div className='w-[14%] md:w-[14%] lg:w-[16%] xl:w-[14%]'>
        <Link
          href={"/"}
          className='flex items-center justify-center gap-2 p-4'
        >
          <Image src={"/school-logo.png"} alt='logo' width={40} height={40} loading='eager' className= "rounded-full overflow-hidden" />
          <span className='hidden lg:block'>Borcelle School</span>
        </Link>
        <Menu />
      </div>


      <div className='w-[86%] md:w-[86%] lg:w-[84%] xl:w-[86%] bg-[#f3f3f3] overflow-y-scroll'>
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default DeskboardLayout;
