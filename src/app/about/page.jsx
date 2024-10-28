"use client"
import React, { useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import AboutCards from './AboutCards';
import {  } from '../../../data/data';
import { aboutBannerData, aboutData, QuestionAndAnswer } from '../../../data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';

export default function About() {
  const [isOpen, setIsOpen] = useState(null);

  const handleOpen = (id) => {
    setIsOpen(isOpen === id ? null : id);
  }

  return (
    <div className='about-wrapper'>
      <HeroBanner
        bannerData={aboutBannerData}
        customClass="about-banner"
      />
      <div className='md:px-20'>
        <AboutCards data={aboutData}/>
      </div>
      <div>
        <h3 className='sm:text-[2rem] font-extrabold text-center py-2
          text-gray-500'>
          FREQUENTLY ASKED QUESTIONS
        </h3>
        <ul className='sm:px-32 pb-8 max-[640px]:px-5'>
          {QuestionAndAnswer.map(item => (
            <li className='pb-5 md:w-1/2'
              key={item.id}>
              <div className='border-b-[4px] pb-3'>
                <div className='text-gray-600 sm:font-extrabold max-[640px]:font-bold'>
                  {item.question}
                  <span className='ml-5 text-[#fff]'
                    onClick={() => handleOpen(item.id)}
                  >
                    <FontAwesomeIcon className='block bg-gray-600 p-1 rounded-[30px]'
                      icon={faChevronDown}
                    />
                  </span>
                </div>
                {isOpen === item.id && (
                  <div>
                    {item.answer}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        
      </div>
    </div>
  )
}
