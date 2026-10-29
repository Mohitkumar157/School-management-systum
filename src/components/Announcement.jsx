import React from 'react'

function Announcement() {
    return (
        <div className='p-4 bg-white rounded-xl'>
            <div className='flex items-center justify-between'>
                <h1 className="text-lg font-semibold text-lamaText">Announcement</h1>
                <span className='text-xs text-[#444444] font-semibold cursor-pointer'>View All</span>
            </div>
                {/* ALL ANNOUNCEMENT */}
            <div className="flex flex-col gap-4 mt-4">
                <div className="bg-lamaBlue rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium text-white">Lorem ipsum dolor sit</h2>
                        <span className="text-xs text-[#444444] bg-white rounded-md px-1 py-1">
                            2025-01-01
                        </span>
                    </div>
                    <p className="text-sm text-white mt-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
                        expedita. Rerum, quidem facilis?
                    </p>
                </div>
                <div className="bg-lamaPurple rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium text-white">Lorem ipsum dolor sit</h2>
                        <span className="text-xs text-[#444444] bg-white rounded-md px-1 py-1">
                            2025-01-01
                        </span>
                    </div>
                    <p className="text-sm text-white mt-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
                        expedita. Rerum, quidem facilis?
                    </p>
                </div>
                <div className="bg-lamaYellow rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium text-white">Lorem ipsum dolor sit</h2>
                        <span className="text-xs text-[#444444] bg-white rounded-md px-1 py-1">
                            2025-01-01
                        </span>
                    </div>
                    <p className="text-sm text-white mt-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
                        expedita. Rerum, quidem facilis?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Announcement
