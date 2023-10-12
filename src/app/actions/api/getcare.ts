'use server';

import prisma from '@/app/lib/prisma'

export const getcare =async (state1: string) => {
  const cares = await prisma.carelabel.findMany({
    where: {
      contract_id: state1,
    },
  });
 
  return cares;
  
}