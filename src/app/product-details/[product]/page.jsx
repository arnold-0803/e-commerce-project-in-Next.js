import React from 'react';
import { notFound } from 'next/navigation';
import AddToCartForm from '@/app/components/AddToCartForm';
import { productData } from '../../../../data/db';

export const dynamicParams =true;

export async function generateStaticParams(){
  // placholder for fetching data from external api

  // const response = await fetch("external API endpoints");
  // const data = await response.json();
  // return data.map(item => ({id: item.id}));

  // current implementation using local data
  return productData.map(item => ({product: item.id.toString()}));
}

async function getDetailsData(id){
  // placholder for fetching data from external api
  // const response = await fetch("URL from external source/${id}", {
  //   next: {
  //     revalidate: 60
  //   }
  // });

  // if(!response.ok){
  //   notFound()
  // }

  // const data = await response.json();

  // return data;

  // current implementation using local data
  const item = productData.find(item => item.id === Number(id));
  return item;
}

export default async function ProductDetails({params}) {

  const data = await getDetailsData(params.product);

  if(!data){
    notFound()
  }

  return (
    <div className='md:px-[80px] max-[769px]:px-[20px]'>
      <h1 className='heading'>{data.title}</h1>
      <div className='flex flex-wrap py-[30px] max-[600px]:flex-col gap-[1rem]'>
        <div className='flex-1'>
          <img className='border-[1px] border-gray-300' src={data.src} alt="" />
          <p className='text-gray-500 text-[1.2rem]'>
            {data.subtitle}
          </p>
        </div>
        <AddToCartForm data={data}/>
      </div>
    </div>
  )
}
