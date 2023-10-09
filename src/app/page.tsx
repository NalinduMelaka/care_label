import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-screen'>
      <div className='flex flex-row justify-between bg-cyan-600 text-slate-100'>
        <div className='flex flex-row'>
          <div className='border p-3 m-3'>
          <label>STROKE NO</label>
          <input className='focus:border-blue-400 border text-black w-20 mx-2'/>
          <button className='border hover:bg-sky-700'>SEARCH ORDER</button>
          </div>
         <div className='p-3'>
          <div className='flex flex-col'>RUN MODE</div>
          <div className='border'><input type='radio' id='1'/><label>AUTO</label><input type='radio' /><label>MANUAL</label></div>
         </div>
          </div>


        <div>
          <div>
          <button className='border m-2 w-28'>UPDATE ORDER FILe</button>
          <button className='border m-2 w-28'>VARIABLE DATA UPDATES</button>
          <button className='border m-2 w-30'>REQUEST ARTWORD</button>
          </div>
          <div><p>ONLINE VERSION</p></div>
        </div>
      </div>


      <div className='grid lg:grid-cols-2 grid-rows-6'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <div className='flex flex-row justify-center'>
        <button>PROCESS PROOF SHEET</button>
        <button>UNKNOWN</button>
      </div>
    </div>
  )
}
