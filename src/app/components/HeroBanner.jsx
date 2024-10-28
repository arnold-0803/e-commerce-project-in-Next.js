import React from 'react'

export default function HeroBanner({bannerData, customClass}) {
  return (
    <div className={`hero-banner ${customClass}`}>
      {bannerData.map(item => (
        <div className='flex flex-wrap sm:px-5 pt-2 max-[700px]:flex-col'
          key={item.id}>
          <div className='flex-1 relative'>
            <img className=''
              src={item.imageBanner} alt="Hero Banner"
            />
            <div className='gradient absolute flex flex-col top-0 w-full h-full
              justify-center items-center p-5'>
              <h1 className='heading'>{item.heading}</h1>
              <p className='py-6 text-[#fff] sm:text-[1.2rem] font-semibold'>
                <b className='md:text-[2rem] max-[768px]:text-[1.5rem] font-extrabold'>
                  {item.offPercentage}
                </b> {item.paragraphOne}
              </p>
            </div>
          </div>
          <div className='colored flex-1 flex flex-col justify-center items-center p-5
            sm:text-[1.2rem]'>
            <h3 className='heading'>{item.subHeading}</h3>
            <p className='py-6 md:text-[1.2rem] text-[#fff]'>
              {item.paragraphTwo}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
