import React, { useState } from 'react'
import { useMyContext } from '../context/MyContext';
import { createcare } from '../actions/api/createcare';

type Props = {}

const Userinputforcare = (props: Props) => {
  const [refno, setRefno] = useState('');
  const [washsymbol, setWashsymbol] = useState("");
  const [fibre, setFibre] = useState("");
  const [zoordes, setZoordes] = useState("");
  const [mpart, setMpart] = useState("");
  const [coo, setCoo] = useState("");
  const [caretext, setCaretext] = useState("");
  const [contract_id, setContract_id] = useState('');
  const { state1, inputState2, setInputState2} = useMyContext();


  const handleenterpress = async (e: React.KeyboardEvent) => {
    if(e.key === "Enter"){
      if(refno && washsymbol && fibre && zoordes && mpart && coo && caretext && state1){
        const result = await createcare(refno,washsymbol,fibre,zoordes,mpart, coo,caretext,state1);

        if(result === "Successfully created new strokeno"){
          setRefno('');
          setWashsymbol('');
          setFibre('');
          setZoordes('');
          setMpart('');
          setCoo('');
          setCaretext('');
          setInputState2(!inputState2);
        }else{
          alert(result);
        }
      }else{
        alert("please fill in all fields.");
      }
    }
  }

  return (
    <tr>
      <td><input type='text' className='w-14' value={refno} onChange={(e) => setRefno(e.target.value)}/></td>
      <td><input type='text' className='w-14' value={washsymbol} onChange={(e) => setWashsymbol(e.target.value)}/></td>
      <td><input type='text' className='w-28' value={fibre} onChange={(e) => setFibre(e.target.value)}/></td>
      <td><input type='text' className='w-14' value={zoordes} onChange={(e) => setZoordes(e.target.value)}/></td>
      <td><input type='text' className='w-14' value={mpart} onChange={(e) => setMpart(e.target.value)}/></td>
      <td><input type='text' className='w-14' value={coo} onChange={(e) => setCoo(e.target.value)}/></td>
      <td><input type='text' className='w-14' value={caretext} onChange={(e) => setCaretext(e.target.value)} onKeyPress={handleenterpress}/></td>
    </tr>
  )
}

export default Userinputforcare