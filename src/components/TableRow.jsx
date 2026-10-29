import Image from 'next/image'
import React from 'react'
import ActionButton from './ActionButton'
import Link from 'next/link'
import { role } from '@/lib/data'

function TableRow({ data, columns }) {
   
    console.log("Mohit", data);

    return (
        <tr className={`hover:bg-gray-200 duration-200 ease-in-out border-b border-gray-200 even:bg-gray-100 odd:bg-[#e8f3ff]`}>
            <td className='flex items-center gap-4'>
                {data.photo && <Image
                    src={data.photo}
                    alt={data.name}
                    width={40}
                    height={40}
                    className='w-10 h-10 object-cover rounded-full md:hidden xl:block'
                />}

                <div>
                    <h3 className='text-[#444444] font-semibold'>{data.name}</h3>
                    <span className='text-lamaText text-xs'>{data.email}</span>
                </div>

            </td>
            {data.subject && <td className={`text-sm text-[#444444] font-semibold ${columns[2].className}`}>{data.subject}</td>}
            {data.class && <td className={`text-sm text-[#444444] font-semibold ${columns[2].className}`}>{data.class}</td>}
            {data.teacher && <td className={`text-sm text-[#444444] font-semibold ${columns[2].className}`}>{data.teacher}</td>}
            {data.capacity && <td className={`text-sm text-[#444444] font-semibold ${columns[1].className}`}>{data.capacity}</td>}
            {data.teachers && <td className={`text-sm text-[#444444] font-semibold ${columns[1].className}`}>{data.teachers?.join(",")}</td>}
            {data.subjects && <td className={`text-sm text-[#444444] ${columns[2].className}`}>{data.subjects?.join(",")}</td>}
            {data.students && <td className={`text-sm text-[#444444] ${columns[1].className}`}>{data.students?.join(",")}</td>}
            {data.personId && <td className={`text-sm text-[#444444] font-semibold ${columns[1].className}`}>{data.personId}</td>}
            {data.grade && <td className={`text-sm text-[#444444] ${columns[2].className}`}>{data.grade}</td>}
            {data.supervisor && <td className={`text-sm text-[#444444] font-semibold ${columns[1].className}`}>{data.supervisor}</td>}
            {data.phone && <td className={`text-sm text-[#444444] ${columns[3].className}`}>{data.phone}</td>}
            {data.classes && <td className={`text-sm text-[#444444] ${columns[3].className}`}>{data.classes?.join(",")}</td>}
            {data.address && <td className={`text-sm text-[#444444] ${columns[2].className}`}>{data.address}</td>}
            <td className='text-sm text-[#444444]'>
                <div className='flex items-center  gap-2'>
                    <Link
                        href={`/list/teachers/${data.id}`}
                        className='cursor-pointer'
                    >
                        <ActionButton data={{
                            svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 12C2 12 5.5 5 12 5C18.5 5 22 12 22 12C22 12 18.5 19 12 19C5.5 19 2 12 2 12Z"
                                    stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2" />
                            </svg>, className: "bg-lamaBlue"
                        }} />
                    </Link>
                    {role === "admin" && <ActionButton data={{
                        svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 7H20"
                                stroke="white" strokeWidth="2" strokeLinecap="round" />
                            <path d="M10 11V17M14 11V17"
                                stroke="white" strokeWidth="2" strokeLinecap="round" />
                            <path d="M6 7L7 20H17L18 7"
                                stroke="white" strokeWidth="2" strokeLinejoin="round" />
                            <path d="M9 7V4H15V7"
                                stroke="white" strokeWidth="2" strokeLinejoin="round" />
                        </svg>, className: "bg-lamaPurple"
                    }} />}
                </div>
            </td>
        </tr>
    )
}

export default TableRow
