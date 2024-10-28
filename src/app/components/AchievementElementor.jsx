"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';


const Counter = ({start, end, duration=4, icon, symbol, description}) => {
  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return(
    <div className='flex flex-col justify-center items-center'
      ref={ref}
    >
      <div className='flex justify-center items-center'>
        <FontAwesomeIcon className='icon'
          icon={icon}
        />
        {inView && (
          <CountUp className='text-[#fff] font-semibold ml-[6px] max-[640px]:text-[1.2rem] sm:text-[2rem]' 
            start={start}
            end={end}
            duration={duration}
          />
        )}
        <span className='text-[#fff] text-[1.5rem]'>
          {symbol}
        </span>
      </div>
      <p className='text-center text-[#fff] font-semibold max-[640px]:text-[0.9rem]'>
        {description}
      </p>
    </div>
  );
}


export default function AchievementElementor({data}) {
  return (
    <div className='achievement bg-red-900'>
      <div>
        <h2 className='heading'>OUR ACHIEVEMENTS</h2>
      </div>
      <ul className='pt-5 pb-10 px-2 grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))]
        justify-center items-center gap-[0.5rem]'>
        {data.map(element => (
          <li key={element.id}>
            <Counter
              start={element.start}
              end={element.end}
              icon={element.icon}
              symbol={element.symbol}
              description={element.description}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
