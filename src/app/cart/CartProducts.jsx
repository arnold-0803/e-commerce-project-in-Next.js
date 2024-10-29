"use client";
import React from 'react'
import { useCart } from '../context/CartProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function CartProducts({product}) {

  const {cartItems, removeFromCart, updateItemQuantity} = useCart();
  const itemInCart = cartItems.find((item) => item.id === product.id);
  const itemQuantity = itemInCart ? itemInCart.quantity : 0;

  const handleDecreaseQuantity = () => {
    if (itemQuantity >= 0) {
      updateItemQuantity(product.id, itemQuantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    updateItemQuantity(product.id, itemQuantity + 1);
  };

  const handleQuantityInputUpdate = (event) => {
    const newQuantity = Number(event.target.value);

    if(newQuantity >= 0){
      updateItemQuantity(product.id, newQuantity)
    }
  }

  return (
    <div className='flex flex-wrap gap-[1rem] max-[655px]:flex-col
      max-w-[1000px] py-4'>
      <div className='flex-1'>
        <div className='flex'>
          <div className='flex-[40%]'>
            <img className='min-w-full'
              src={product.src}
              alt={product.title}
            />
          </div>
          <div className='flex-[60%] flex flex-col justify-center items-center'>
            <h3 className='text-[1.2rem] text-red-900 font-bold'>
              {product.title}
            </h3>
            <h4>
              {product.subtitle}
            </h4>
          </div>
        </div>
      </div>
      <div className='flex-1 relative'>
        <div className='min-[655px]:hidden flex justify-between '>
          <p className=''>
            Quantity
          </p>
          <p>
            Price
          </p>
        </div>
        <div className='flex justify-between mb-[50px]'>
          <p className='ml-[30px] py-3'>
            {itemQuantity}
          </p>
          <p className='py-3'>
            KES {product.price}
          </p>
        </div>
        <div className='absolute bottom-0'>
          <button
            onClick={handleDecreaseQuantity}
          >
            -
          </button>
          <input className='w-[30px] h-full outline-none text-center'
            value={itemQuantity}
            onChange={handleQuantityInputUpdate}
          />
          <button
            onClick={handleIncreaseQuantity}
          >
            +
          </button>
        </div>
        <button className='absolute bottom-0 right-0'
          onClick={() => removeFromCart(product.id)}
        >
          <FontAwesomeIcon icon={faTrash}/>
        </button>
      </div>
    </div>
  )
}
