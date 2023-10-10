'use server';
import prisma from '@/app/lib/prisma'

export const createother = async (refno: string, labeltype: string, carelabel_id: number) => {
 
   if(refno && labeltype && carelabel_id){
    await prisma.otherlabel.create({
      data: {
        fef_no: refno,
        label_type: labeltype,
        carelabel_id,
      }
    });
    return "Successfully created new strokeno";
  }else{
    return "Something wrong!";
  }
}