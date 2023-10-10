'use server';
import prisma from '@/app/lib/prisma'

export const createcare = async (refno: string, washsymbol: string, fibre: string, zoordes: string, mpart: string, coo: string, caretext: string, contractid: string) => {
 
   if(refno && washsymbol && fibre && zoordes && mpart && coo && caretext && contractid){
    await prisma.carelabel.create({
      data: {
        ref_no: refno,
        wash_symbol: washsymbol,
        fibre,
        zoordes,
        mpart_fw: mpart,
        coo,
        caretext,
        contract_id: contractid
      }
    });
    return "Successfully created new strokeno";
  }else{
    return "Something wrong!";
  }
}