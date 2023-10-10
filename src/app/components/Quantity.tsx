import React from 'react'

type Props = {}

const Quantity = (props: Props) => {
  return (
    <table className="border-separate border border-slate-500 text-xs">
      <thead>
        <tr>
          <th className='border border-black font-thin w-10'></th>
          <th className='border border-black font-thin w-20'>Color Code</th>
          <th className='border border-black font-thin w-20'>Color Name</th>
          <th className='border border-black font-thin w-20'>UPC No</th>
          <th className='border border-black font-thin w-20'>Primary Size</th>
          <th className='border border-black font-thin w-20'>Secondary Size</th>
          <th className='border border-black font-thin w-20'>Selling Price</th>
          <th className='border border-black font-thin w-20'>ORDER QTY</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
  )
}

export default Quantity