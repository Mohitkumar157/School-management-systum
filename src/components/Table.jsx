import React from 'react'
import TableRow from './TableRow';
function Table({columns , data , renderRow}) {
   console.log("Data" , data);
   
  return (
    <table className='w-full mt-4'>
     <thead>
        <tr>
            {columns?.map((col)=> (
                <th key={col.accessor} className={`${col.className} text-lamaText text-left text-sm`}>
                    {col.header}
                </th>
            ))}
        </tr>
     </thead>

     <tbody>
        {data?.map((data)=> (
            renderRow(data)
        ))}
     </tbody>
    </table>
  )
}

export default Table;
