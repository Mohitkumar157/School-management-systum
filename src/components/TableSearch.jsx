import Image from 'next/image'
import React from 'react'

function TableSearch() {
    return (
       
            <div className=' md:max-w-80 w-full flex items-center gap-2 text-xs rounded-full bg-white ring-[1.5px] ring-[#f5f5f5] px-2!'>
                <Image src="/search.png" alt="" width={14} height={14} />
                <input type="text" placeholder="Search..." className="w-50 p-2 bg-transparent outline-none text-[12px] font-medium text-[#444444]" />
            </div>
       
    )
}

export default TableSearch
