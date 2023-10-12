'use server';

import prisma from '@/app/lib/prisma'

export const getquntity =async (state3: number) => {
  const cares = await prisma.contity.findMany({
    where: {
      otherlabel_id: state3,
    },
  });
 
  return cares;
  
}