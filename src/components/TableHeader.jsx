import Image from 'next/image'
import React from 'react'
import TableSearch from './TableSearch'

function TableHeader({title = "Title"}) {
    return (
        <div className='flex justify-between items-center flex-col md:flex-row'>
            <h1 className='hidden md:block text-lg font-semibold text-lamaText'>{title}</h1>
            <div className='flex flex-col sm:flex-row md:justify-between justify-end items-center gap-4 w-full md:w-fit'>
                <TableSearch />
                <div className='flex items-center justify-end gap-2  w-full'>
                    <button
                        aria-label='filter-button'
                        className='p-2 rounded-full bg-lamaYellow text-white active:translate-y-1 active:opacity-90 duration-300 ease-in-out'
                    >
                        <Image src={"/filter.png"}
                            alt='filter-icon'
                            width={14}
                            height={14}
                            className='w-3.5 h-3.5 object-cover'
                        />
                    </button>
                    <button
                        className='p-2 rounded-full bg-lamaYellow active:translate-y-1 active:opacity-90 duration-300 ease-in-out'
                        aria-label='sort-button'>
                        <Image src={"/sort.png"}
                            alt='sort-btn-icon'
                            width={14}
                            height={14}
                            className='w-3.5 h-3.5 object-cover'
                        />
                    </button>
                    <button
                        className='p-2 rounded-full bg-lamaYellow active:translate-y-1 active:opacity-90 duration-300 ease-in-out'
                        aria-label='add button'>
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 5V19M5 12H19"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TableHeader;
