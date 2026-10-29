import React from 'react'

function Pagination() {
  return (
    <div className='p-4 flex justify-between items-center'>
      <button disabled className='opacity-50 px-3 py-1 rounded-md bg-lamaBlue text-white font-semibold text-sm'>Prev</button>
       
       <div className='flex items-center gap-4'>
        <button className='text-lamaText font-semibold cursor-pointer bg-lamaSkyLight'>1</button>
        <button className='text-lamaText font-semibold cursor-pointer'>2</button>
        <button className='text-lamaText font-semibold cursor-pointer'>3</button>
         ...
         <button className='text-lamaText font-semibold cursor-pointer'>10</button>
       </div>


      <button className='px-3 cursor-pointer py-1 rounded-md bg-lamaBlue text-white font-semibold text-sm'>Next</button>
    </div>
  )
}

export default Pagination
