import React, { Suspense } from 'react';
import SearchedProducts from './SearchedProducts';
import { productData } from '../../../data/db';
import Loading from '../components/Loading';


async function getProducts(){
  // Placeholder for fetching data from external API
  // Uncomment and adjust when integrating with an external API
  /*
  try{
    const response = await fetch("https://your-api-endpoint.com/products", {
      next: { revalidate: 0 }, // Adjust revalidation as needed
    });

    if(!response.ok){
      throw new Error("There was an error while fetching data");
    }

    const data = await response.json();
    return data.products; // Adjust based on API response structure

  } catch(error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
  */

  // Current implementation using local data
  return productData || [];
}


export default async function Searched() {

  const products = await getProducts();

  return (
    <div className='list-holder max-[640px]:px-[5px]'>
      <h2 className='heading'>SEARCHED PRODUCTS</h2>
      <Suspense fallback={<Loading/>}>
        <div className='pb-20'>
          <SearchedProducts products={products}/>
        </div>
      </Suspense>
    </div>
  )
}
