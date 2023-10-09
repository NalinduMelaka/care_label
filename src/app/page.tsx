'use client'
import Image from 'next/image'
import { useState, useRef } from 'react'

import { createstroke } from './actions/api/createstroke'
import Contract from './components/Contract';

export default function Home() {
  const [strokeno, setStrokeno] = useState('');
  const [showtable1, setShowtable1] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);


  const handleInputChange = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  
    if (inputRef.current) {
      setStrokeno(inputRef.current.value);
      const result = await createstroke(strokeno);
      if(result === "Successfully created new strokeno"){
        setShowtable1(true);
      }
    }
  };

 

  return (
    <div className='h-screen'>
      <div className='flex flex-row justify-between bg-cyan-600 text-slate-100  content-center'>
        <div className='flex flex-row items-center '>
          <div className='border m-1 p-3'>
          <label>STROKE NO</label>
          <input className='focus:border-blue-400 border text-black w-20 mx-2' ref={inputRef}/>
          <button className='border hover:bg-sky-700' onClick={handleInputChange}>SEARCH ORDER</button>
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
          <div className='basis-1/6 bg-slate-200'>{showtable1 && <Contract strokeno={strokeno} />}</div>
          <div className='basis-1/6 bg-slate-200'></div>
          <div className='basis-1/6 bg-slate-200'></div>
          <div className='basis-3/6 bg-slate-200'></div>
        </div>
      </div>
      <div className='col-span-1 bg-blue-300'><Image src={"/img.png"}
      alt='image' width={300} height={500}/></div>
    </div>

      <div className='flex flex-row justify-center bg-blue-300'>
        <button className='bg-sky-600 m-1 p-1 border-2 border-white'>PROCESS PROOF SHEET</button>
        <button className='bg-sky-600 m-1 p-1 border-2 border-white'>UNKNOWN</button>
      </div>
    </div>
  )
}
