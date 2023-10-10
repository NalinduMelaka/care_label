'use server';
import prisma from '@/app/lib/prisma'

export const createquantity = async (colorcode: string, colorname: string, upcno: string, primarysize: string, secondarysize: string, sellingprice: number, orderqty: string, otherlabel_id: number) => {
 
   if(colorcode && colorname && upcno && primarysize && secondarysize && sellingprice && orderqty && otherlabel_id){
    await prisma.contity.create({
      data: {
        color_code: colorcode,
        color_name: colorname,
        upc_no: upcno,
        primary_size: primarysize,
        secondary_size: secondarysize,
        selling_price: sellingprice,
        order_qty: orderqty,
        otherlabel_id: otherlabel_id
      }
    });
    return "Successfully created new strokeno";
  }else{
    return "Something wrong!";
  }
}