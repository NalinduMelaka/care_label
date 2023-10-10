
import React, { useState } from 'react'
import { createtable1 } from '../actions/api/createtabel1';
import prisma from '../lib/prisma';
import Userinputforcon from './Userinputforcon';
import Contractdata from './Contractdata';

type Props = {
  strokeno: string;
}

const Contract = ({ strokeno }: Props)  => {
  const stroke = strokeno;
  
 
  return (
    <div>
      <table className="border-separate border border-slate-500 text-xs">
        <thead>
        <tr>
          <th className='border border-black font-thin w-14'></th>
          <th className='border border-black font-thin w-14'>StrokeNO</th>
          <th className='border border-black font-thin w-14'>Contract No</th>
          <th className='border border-black font-thin w-14'>SEASON</th>
          <th className='border border-black font-thin w-14'>TDEPT</th>
          <th className='border border-black font-thin w-14'>PRODESC</th>
          <th className='border border-black font-thin w-14'>STROKE_DESC</th>
        </tr>
        </thead>
        <tbody>
          <Contractdata strokeno = {stroke}/>
          <Userinputforcon strokeno={stroke} />

     
        </tbody>
      </table>
    </div>
  )
}

export default Contract