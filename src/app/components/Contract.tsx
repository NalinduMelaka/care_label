
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
      <table className="border-collapse border border-slate-500 text-xs ">
        <thead>
        <tr>
          <th className='border border-black  w-14 bg-slate-200'></th>
          <th className='border border-black  w-14 bg-slate-200'>StrokeNO</th>
          <th className='border border-black  w-14 bg-slate-200'>Contract No</th>
          <th className='border border-black  w-14 bg-slate-200'>SEASON</th>
          <th className='border border-black  w-14 bg-slate-200'>TDEPT</th>
          <th className='border border-black  w-14 bg-slate-200'>PRODESC</th>
          <th className='border border-black  w-14 bg-slate-200'>STROKE_DESC</th>
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