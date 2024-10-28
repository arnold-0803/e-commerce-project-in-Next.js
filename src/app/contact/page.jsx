"use client";
import React from 'react';
import HeroBanner from '../components/HeroBanner';
import { ContactBannerData } from '../../../data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const socialMedia = [
  {
    id: 0,
    socialmedia: faLinkedinIn,
    urlLink: "https://linkedin.com"
  },
  {
    id: 1,
    socialmedia: faTwitter,
    urlLink: "https://twitter.com"
  },
  {
    id: 2,
    socialmedia: faFacebookF,
    urlLink: "https://facebook.com"
  },
  {
    id: 3,
    socialmedia: faInstagram,
    urlLink: "https://instagram.com"
  }
]

export default function Contact() {
  return (
    <div className='contact-wrapper'>
      <HeroBanner 
        bannerData={ContactBannerData}
        customClass="contact-banner"
      />
      <div>
        <h3 className='heading'>REACHOUT TO US</h3>
        <div className='flex max-[768px]:flex-col gap-[2rem] lg:px-28 max-[1024px]:px-3 py-10'>
          <div className='flex-1 flex flex-col items-center lg:px-20'>
            <div>
              <h4 className='font-bold sm:text-[1.5rem] text-left text-blue-300'>
                Have Question or Feedback?
              </h4>
              <p className='text-left pt-3 text-red-950'>
                Please don’t hesitate to ask any questions or feedback you might
                have. We would be happy to hear or assist you with your needs.
              </p>
            </div>
            <div className='w-full'>
              <p className='text-gray-500 font-semibold p-2'>
                <FontAwesomeIcon className='text-red-950 text-[1.3rem]'
                  icon={faPhone}
                /> (+254)714387538
              </p>
              <p className='text-gray-500 font-semibold p-2'>
                <FontAwesomeIcon className='text-red-950 text-[1.3rem]'
                  icon={faEnvelope}
                /> info@thecarz.com
              </p>
              <p className='text-gray-500 font-semibold p-2'>
                <FontAwesomeIcon className='text-red-950 text-[1.3rem]'
                  icon={faLocationDot}
                /> Vision 2030 Tower, Rd C123, Nairobi, KE
              </p>
            </div>
            <div className='w-full'>
              <h4 className='font-bold text-blue-300'>
                Follow Us
              </h4>
              <ul className='flex py-2'>
                {socialMedia.map(item => (
                  <li className='p-2'
                    key={item.id}>
                    <a className='btn block flex justify-center items-center w-[40px] h-[40px] bg-red-950
                      text-[1.3rem] text-[#fff] rounded-[4px]'
                      href={item.urlLink}>
                      <FontAwesomeIcon icon={item.socialmedia}/>
                    </a>
                  </li>
                ))}
              </ul>
              <div >
              <iframe className='w-full'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.
                  3586908131!2d36.6825783570878!3d-1.3028602772359434!2m3!1f0!2f0!3f0!
                  3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c
                  !2sNairobi!5e0!3m2!1sen!2ske!4v1730055545602!5m2!1sen!2ske" 
                  width="600" height="250" allowFullScreen="" loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </div>
          <div className='flex-1 flexjustify-center items-center'>
            <form className='flex flex-col py-3 px-2'>
              <input className='w-[100%] h-[60px] outline-none bg-gray-100 border-[1px] px-2 mb-4 font-semibold'
                type="text" placeholder='Name'
              />
              <input className='w-[100%] h-[55px] outline-none bg-gray-100 border-[1px] px-2 mb-4 font-semibold'
                type="email" placeholder='Email' required
              />
              <input className='w-[100%] h-[55px] outline-none bg-gray-100 border-[1px] px-2 mb-4 font-semibold'
                type="phone" placeholder='Phone Number'
              />
              <textarea className='h-[150px] bg-gray-100 border-[1px] px-2 py-3 mb-7 outline-none font-semibold'
                name="text" id="" placeholder='Message'
              ></textarea>
              <button className='btn rounded-none h-[55px] font-semibold'>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
