
import { useState, useEffect} from 'react'
import prisma from '../lib/prisma'
import { getcontract } from '../actions/api/getcontract';

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

  useEffect(() => {
    const fetchContracts = async () => {
      const fetchedContracts = await getcontract(strokeno);
      setContracts(fetchedContracts);
    };
    fetchContracts();
  }, [strokeno]);

    
  return (
    <>
    {contracts.map(contract => (
      <tr key={contract.constractno}>
        <td></td>
        <td>{contract.stroke_id}</td>
        <td>{contract.constractno}</td>
        <td>{contract.season}</td>
        <td>{contract.tdept}</td>
        <td>{contract.prodesc}</td>
        <td>{contract.stroke_desc}</td>
      </tr>
    ))}</>
  )
}
