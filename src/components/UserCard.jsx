import Image from 'next/image'
import React from 'react'

function UserCard({ type }) {
    return (
        <div className='rounded-xl odd:bg-lamaPurple even:bg-lamaYellow min-w-55 p-4'>
            <div className='flex justify-between items-center'>
                <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
                    2025/05
                </span>
                <Image src={"/more.png"} alt='dots' width={20} height={20} />
            </div>
            <h1 className="text-2xl font-semibold my-4">1,234</h1>
            <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
        </div>
    )
}

export default UserCard
