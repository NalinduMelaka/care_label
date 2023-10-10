import React, { useState } from 'react'

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

  return (
    <tr>
      <td><input type='text' className='w-14'/></td>
      <td><input type='text' className='w-14'/></td>
      <td><input type='text' className='w-28'/></td>
      <td><input type='text' className='w-14'/></td>
      <td><input type='text' className='w-14'/></td>
      <td><input type='text' className='w-14'/></td>
      <td><input type='text' className='w-14'/></td>
    </tr>
  )
}

export default Userinputforcare