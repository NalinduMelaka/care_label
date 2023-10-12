'use client'
import Image from 'next/image'
import { useState } from 'react'

import { createstroke } from '../actions/api/createstroke'
import Contract from '../components/Contract';
import Strokein from './Strokein';
import Care from './Care';
import Other from './Other';
import Quantity from './Quantity'
import { useMyContext } from '../context/MyContext';

export default function Maini() {
  const { state1, state2, setState1, setState2 } = useMyContext();
  const [strokeno, setStrokeno] = useState('');
  const [showtable1, setShowtable1] = useState(false);
  console.log('stroke is running on maini')

  const handleInputChange = async () => {
    try{
   if (strokeno) {
     const result = await createstroke(strokeno);
     if(result === "Successfully created new strokeno"){
       setShowtable1(true);
     }
   }
  }catch (error) {
     console.error('Error:', error);
   }
 };


 

  return (
    <div className='h-screen'>
      <div className='flex flex-row justify-between bg-cyan-600 text-slate-100  content-center'>
        <div className='flex flex-row items-center '>
          <div className='border m-1 p-3'>
          <label>STROKE NO</label>
          <input onChange={(e) => {e.preventDefault()
                                  setStrokeno(e.target.value)}} className='focus:border-blue-400 border text-black w-20 mx-2'/>
          <button className='border hover:bg-sky-700' onClick={handleInputChange} >SEARCH ORDER</button>
          </div>
         <div>
          <div className='flex flex-col'>RUN MODE</div>
          <div className='border'><input type='radio' id='1'/><label>AUTO</label><input type='radio' /><label>MANUAL</label></div>
         </div>
          </div>


        <div className='flex flex-row items-center px-2'>
          <div>
          <button className='border m-2 w-32'>UPDATE ORDER FILe</button>
          <button className='border m-2 w-32'>VARIABLE DATA UPDATES</button>
          <button className='border m-2 w-32'>REQUEST ARTWORD</button>
          </div>
          <div><p>ONLINE VERSION</p></div>
        </div>
      </div>

    <div className='lg:grid grid-cols-2 grid-rows-1 lg:h-[540px]'>
      <div className='col-span-1 bg-blue-300'>
        <div className='flex flex-col gap-3 h-full'>
          <div className='basis-1/6 bg-slate-200 overflow-auto'>{showtable1 && <Contract strokeno={strokeno} />}</div>
          <div className='basis-1/6 bg-slate-200 overflow-auto'>{showtable1 && <Care/>}</div>
          <div className='basis-1/6 bg-slate-200 overflow-auto'>{showtable1 && <Other/>}</div>
          <div className='basis-3/6 bg-slate-200 overflow-auto'>{showtable1 && <Quantity/>}</div>
        </div>
      </div>
      <div className='col-span-1 bg-blue-300'></div>
    </div>

      <div className='flex flex-row justify-center bg-blue-300'>
        <button className='bg-sky-600 m-1 p-1 border-2 border-white'>PROCESS PROOF SHEET</button>
        <button className='bg-sky-600 m-1 p-1 border-2 border-white'>UNKNOWN</button>
      </div>
    </div>
  )
}


