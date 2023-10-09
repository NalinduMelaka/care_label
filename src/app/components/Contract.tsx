import React, { useState } from 'react'
import { createtable1 } from '../actions/api/createtabel1';

type Props = {
  strokeno: string;
}

const Contract: React.FC<Props> = ({ strokeno })  => {
  
  const [constractno, setConstractno] = useState('');
  const [season, setSeason] = useState('');
  const [tdept, setTdept] = useState('');
  const [prodesc, setProdesc] = useState('');
  const[strokedesc, setStrokedesc] = useState('');
  const stroke = strokeno;

  const handleenterpress = async (e: React.KeyboardEvent) => {
    if(e.key === "Enter"){
      if(constractno && season && tdept && prodesc && strokedesc && stroke){
        const result = await createtable1(constractno,season,tdept,prodesc,strokedesc, stroke);

        if(result === "Successfully created new strokeno"){
          setConstractno('');
          setSeason('');
          setTdept('');
          setProdesc('');
          setStrokedesc('');
        }else{
          alert(result);
        }
      }else{
        alert("please fill in all fields.");
      }
    }
  }
 
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
          <td></td>
          <td >{strokeno}</td>
          <td ><input className='w-20'
          type='text'
          value={constractno}
          onChange={(e) => setConstractno(e.target.value)}
          /></td>
          <td><input className='w-20'
          type='text'
          value={season}
          onChange={(e) => setSeason(e.target.value)}/></td>
          <td ><input className='w-20'
          type='text'
          value={tdept}
          onChange={(e) => setTdept(e.target.value)}/></td>
          <td><input className='w-20' type='text'
          value={prodesc}
          onChange={(e) => setProdesc(e.target.value)}/></td>
          <td><input className='w-20' type='text'
          value={strokedesc}
          onChange={(e) => setStrokedesc(e.target.value)
          }
          onKeyPress={handleenterpress}/></td>
        </tbody>
      </table>
    </div>
  )
}

export default Contract