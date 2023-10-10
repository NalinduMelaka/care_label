import React from 'react'
import Userinputforother from './Userinputforother'

type Props = {}

const Other = (props: Props) => {
  return (
    <table className="border-separate border border-slate-500 text-xs">
      <thead>
        <tr>
          <th className='border border-black font-thin w-14'>Ref No</th>
          <th className='border border-black font-thin w-44'>LABEL_TYPE</th>
        </tr>
      </thead>
      <tbody>
          <Userinputforother />
      </tbody>
    </table>
  )
}

export default Other