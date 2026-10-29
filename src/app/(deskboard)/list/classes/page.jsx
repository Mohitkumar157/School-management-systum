import Pagination from '@/components/Pagination'
import TableHeader from '@/components/TableHeader'
import React from 'react'
import { classesData, role } from '@/lib/data';
import Table from '@/components/Table';
import ActionButton from '@/components/ActionButton';
import Link from 'next/link';


const columns = [
  {
    header: "Class Name",
    accessor: "name",
  },
  {
    header: "Capacity",
    accessor: "capacity",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];
function page() {
 const renderRow = (item) => {
 
   
    return (
      <tr
        className=' hover:bg-gray-200 duration-200 ease-in-out border-b border-gray-200 even:bg-gray-100 odd:bg-[#e8f3ff]'
        key={item.id}>
        <td className='p-3'>
          <div className='flex items-center gap-2'>
            {item.photo && <Image
              src={item.photo}
              alt={item.name}
              width={40}
              height={40}
              className='w-10 h-10 object-cover rounded-full md:hidden xl:block'
            />}
            <div>
              {item.name &&<h3 className='text-[#444444] font-semibold'>{item?.name}</h3>}
              {item.email && <span className='text-lamaText text-xs'>{item?.email}</span>}
            </div>
          </div>

        </td>
         <td className="hidden md:table-cell text-sm text-[#444444] font-semibold">{item.capacity}</td>
         <td className="hidden md:table-cell text-sm text-[#444444] font-semibold">{item.grade}</td>
         <td className="hidden md:table-cell text-sm text-[#444444] font-semibold">{item.supervisor}</td>
       
        <td className='text-sm text-[#444444]'>
          <div className='flex items-center  gap-2'>
            <Link
              href={`/list/teachers/${item.id}`}
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

  return (
    <div className='p-4'>
      {/* top */}
      <TableHeader title='All Classes' />

      {/* List */}
      <Table columns={columns} renderRow={renderRow} data={classesData} />
      {/* pagination */}
      <Pagination />
    </div>
  )
}

export default page
