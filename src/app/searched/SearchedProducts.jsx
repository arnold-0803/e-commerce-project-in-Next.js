"use client";
import React from 'react'
import { useSearchParams } from 'next/navigation';
import ProductCard from '../components/ProductCard';

export default function SearchedProducts({products}) {

  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const lowerCaseQuery = query.toLowerCase().trim();

  const filteredData = products.filter(product => 
    product.title && product.title.toLowerCase().includes(lowerCaseQuery) ||
    product.subtitle && product.subtitle.toLowerCase().includes(lowerCaseQuery)
  );

  return (
    <div>
      <ul className='card-list ju'>
        {filteredData.length > 0 ? 
          (filteredData.map(product => (
            <li className='max-w-[290px]' 
             key={product.id}>
              <ProductCard customHref="product-details" data={product}/>
            </li>
          ))
        ) : (
          <li className='empty-page'>No Items Found</li>
        )}
      </ul>
    </div>
  )
}
