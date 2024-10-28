import React from 'react'
import ShopProducts from './ShopProducts';
import HeroBanner from '../components/HeroBanner';
import { productData } from '../../../data/db';
import { shopBannerData } from '../../../data/data';


async function getProducts(){
  // placholder for fetching data from external api

  // try{
  //   const response = await fetch("for example; https://pixabay.com/api/?key=43296904-a69d2147a6885fcb843b07884&q=yellow+flowers&image_type=photo", {
  //     next: {revalidate: 0,}
  //   });

  //   if(!response.ok){
  //     throw new Error("There was an error while fetching data");
  //   }

  //   const data = await response.json();
  //   return data.hits;

  // }catch(error) {
  //   console.error("Faild to fetch gallery data");
  //   return [];
  // }

  // current implementation using local data
  return productData;
}

export default async function Shop() {

  const products = await getProducts();

  return (
    <div>
      <HeroBanner 
        bannerData={shopBannerData}
        customClass="shop-wrapper"
      />
      <div className="list-holder max-[640px]:px-[5px] mt-[10px]">
        <div className='pb-5'>
          <h2 className="heading">
            SHOP STORE
          </h2>
          <ShopProducts products={products}/>
        </div>
      </div>
    </div>
  )
}
