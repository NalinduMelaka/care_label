import React, { useState } from 'react'

type Props = {}

const Userinputforquntity = (props: Props) => {

  const [colorcode,setColorcode] = useState('');
  const [colorname,setColorname] = useState('');
  const [upcno,setUpcno] = useState('');
  const [primarysize,setPrimarysize] = useState('');
  const [secondarysize,setSecondarysize] = useState('');
  const [sellingprice,setSellingprice] = useState('');
  const [orderqty,setOrderqty] = useState('');
  return (
    <tr>
      <td className='w-14'></td>
      <td><input type='text' className='w-20'/></td>
      <td><input type='text' className='w-20'/></td>
      <td><input type='text' className='w-20'/></td>
      <td><input type='text' className='w-20'/></td>
      <td><input type='text' className='w-20'/></td>
      <td><input type='text' className='w-20'/></td>
      <td><input type='text' className='w-20'/></td>
    </tr>
  )
}

export default Userinputforquntity