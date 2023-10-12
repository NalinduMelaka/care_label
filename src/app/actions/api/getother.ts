'use server';

import prisma from '@/app/lib/prisma'

export const getcare =async (state2: number) => {
  const cares = await prisma.otherlabel.findMany({
    where: {
      carelabel_id: state2,
    },
  });
 
  return cares;
  
}