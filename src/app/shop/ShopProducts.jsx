"use client";
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import PagePagination from '../components/PagePagination';

export default function ShopProducts({products}) {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [currentPage]);

  return (
    <div>
      <ul className='card-list'>
        {currentItems.map(product => (
          <li key={product.id}>
            <ProductCard customHref="product-details" data={product}/>
          </li>
        ))}
      </ul>
      <PagePagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  )
}
