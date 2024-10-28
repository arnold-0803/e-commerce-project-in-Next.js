"use client";
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { navItemsData } from '../../../data/data';

export default function Navbar() {

  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => {
    return pathname === href;
  };

  return (
    <nav className='relative flex justify-center items-center z-10
      max-[768px]:mb-[70px] border-b border-gray-200'>
      <ul className={toggle ? "show-menu" : "hide-menu"}>
        {navItemsData.map(item => (
          <li className='nav-link' key={item.id}>
            <Link 
              className={`${isActive(item.href) ? "active" : ""}`}
              href={item.href}>{item.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="absolute top-[15px] z-50 right-5 min-[769px]:hidden text-[1.5rem]
      text-blackColor" 
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? <FontAwesomeIcon icon={faXmark}/> : <FontAwesomeIcon icon={faBars}/>}
      </div>
    </nav>
  )
}
