'use client';

import Image from "next/image";

function ActionButton({data}) {
  return (
    <button className={`active:translate-y-1 active:opacity-90 duration-300 ease-in-out cursor-pointer w-7 h-7 rounded-full flex justify-center items-center ${data?.className}`}>
       {data.svg}
    </button>
  )
}

export default ActionButton
