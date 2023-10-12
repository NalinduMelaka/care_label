
import { useState, useEffect} from 'react'
import prisma from '../lib/prisma'
import { getcontract } from '../actions/api/getcontract';
import { useMyContext } from '../context/MyContext';

type Contract = {
  constractno: string;
  season: string;
  stroke_desc: string;
  prodesc: string;
  tdept: string;
  stroke_id: string;
  createdAt: Date;
  updatedAt: Date;
}

type Props = {
  strokeno: string;
}

export default  function Contractdata({ strokeno }: Props) {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const { state1,setState1, inputState1 } = useMyContext();
  console.log('setcontract is running...')

  const handleRowClick = (contractNo: string) => {
    console.log('Clicked on contract number:', contractNo);
    setState1(contractNo);
  };
  console.log(state1);
  
  useEffect(() => {
    const fetchContracts = async () => {
      const fetchedContracts = await getcontract(strokeno);
      setContracts(fetchedContracts);
      console.log('useEffect is running!')
    };
    fetchContracts();
  },[strokeno,inputState1]);

    
  return (
    <>
    {contracts.map(contract => (
      <tr key={contract.constractno} onClick={() => handleRowClick(contract.constractno)}>
        <td className='border border-black'></td>
        <td className='border border-black'>{contract.stroke_id}</td>
        <td className='border border-black'>{contract.constractno}</td>
        <td className='border border-black'>{contract.season}</td>
        <td className='border border-black'>{contract.tdept}</td>
        <td className='border border-black'>{contract.prodesc}</td>
        <td className='border border-black'>{contract.stroke_desc}</td>
      </tr>
    ))}</>
  )
}
