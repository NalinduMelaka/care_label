import { useState } from 'react'

type Props = {}

const Userinputforother = (props: Props) => {

  const [refno, setRefno] = useState('');
  const [labeltype, setLabeltype] = useState("");
  return (
    <tr>
      <td><input type='text' className='w-14'/></td>
      <td><input type='text' className='w-44'/></td>
    </tr>
  )
}

export default Userinputforother