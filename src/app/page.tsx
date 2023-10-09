import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-screen'>
      <div className='flex flex-row justify-between bg-cyan-600 text-slate-100  content-center'>
        <div className='flex flex-row items-center '>
          <div className='border m-1 p-3'>
          <label>STROKE NO</label>
          <input className='focus:border-blue-400 border text-black w-20 mx-2'/>
          <button className='border hover:bg-sky-700'>SEARCH ORDER</button>
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

    <div className='lg:grid grid-cols-2 grid-rows-1 lg:h-[540px] gap-1'>
      <div className='col-span-1 bg-blue-300'></div>
      <div className='col-span-1 bg-blue-300'></div>
    </div>

      <div className='flex flex-row justify-center bg-blue-300'>
        <button className='bg-sky-600 m-1 p-1 border-gray-300'>PROCESS PROOF SHEET</button>
        <button className='bg-sky-600 m-1 p-1 border-gray-300'>UNKNOWN</button>
      </div>
    </div>
  )
}
