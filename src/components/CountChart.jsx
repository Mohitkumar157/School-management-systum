"use client";
import React from 'react'
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';
import Image from 'next/image';

// #region Sample data
const data = [
    {
        name: 'Total',
        count: 100,
        fill: "white",
    },
    {
        name: 'Boys',
        count: 50,
        fill: '#C3EBFA',
    },
    {
        name: 'Girls',
        count: 50,
        fill: '#FAE27C',
    }

];

// #endregion
const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};
function CountChart() {
    return (

        <div className='flex flex-col justify-between gap-4 bg-white p-4 rounded-xl h-full'>
            {/* TITLE */}
            <div className='flex items-center justify-between'>
                <h1 className='text-lg font-semibold'>Students</h1>
                <Image
                    src={"/moreDark.png"}
                    alt='dark more dots'
                    width={20}
                    height={20}
                />
            </div>

            {/* CHART */}
            <div className='relative flex justify-center items-center'>
                <RadialBarChart
                    style={{ width: '100%', maxWidth: '700px', maxHeight: '80vh', aspectRatio: 1.618 }}
                    responsive
                    cx="50%"
                    cy="50%"
                    innerRadius="40%"
                    outerRadius="100%"
                    barSize={32}
                    data={data}
                >
                    <RadialBar
                        background dataKey="count"
                    />
                
                    <Tooltip />

                </RadialBarChart>
                <Image 
                src="/maleFemale.png" 
                alt='male-female-icon' 
                width={50}
                height={50}
                className='absolute '/>
            </div>

            {/* BOTTOM */}

            <div className="flex justify-center gap-16">
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-lamaSky rounded-full" />
                    <h2 className="font-bold">1,234</h2>
                    <h3 className="text-xs text-gray-300">Boys (55%)</h3>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-lamaYellow rounded-full" />
                    <h2 className="font-bold">1,234</h2>
                    <h3 className="text-xs text-gray-300">Girls (45%)</h3>
                </div>
            </div>

        </div>




    )
}

export default CountChart
