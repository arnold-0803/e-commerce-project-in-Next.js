"use client";
import React from 'react'
import { useCart } from '../context/CartProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

export default function AddToCartForm({data}) {

  const {cartItems,addToCart} = useCart();
  const itemInCart = cartItems.find((item) => item.id === data.id);
  const itemQuantity = itemInCart ? itemInCart.quantity : 0;
  const router = useRouter();

  const handleInput = (event) => {
    event.preventDefault();
  }

  const handleAddToCart = () => {
    addToCart(data);
    router.push("/cart");
  }

  return (

    <div className='flex-1'>
      <form className='border-[1.3rem] border-[#b3b1b1] flex flex-col  justify-center
        items-center p-10 shadow-[5px_5px_10px_#8080808a]'
        onSubmit={handleInput}  
      >
        <p className='text-left w-full pb-1 text-red-900'>
          Paint
        </p>
        <select className='w-full h-12 outline-none px-2 mb-3'
          name="colors" id="">
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
        </select>
        <p>or</p>
        <input className='w-full h-12 outline-none border-[0.5px] border-gray-400 px-2 m-3'
          type="text"
          placeholder='Type Paint'
        />
        <div className='w-full mt-8'>
          <p className='text-center p-3'>
            <b className='font-extrabold'>
              KES {data.price}
            </b>
          </p>
          <button className='block w-full py-3 bg-red-900 text-center text-[#fff]'
            onClick={handleAddToCart}
          >
            Add to cart
            <FontAwesomeIcon icon={faShoppingCart}/>
            ({itemQuantity})
          </button>
        </div>
      </form>
      <p className='mt-5 p-4 border-[1px] border-[solid #e3e3e6] rounded-md
        shadow-[0_8px_16px_#8c99a726]'>
        {data.details}
      </p>
  </div>
  )
}
