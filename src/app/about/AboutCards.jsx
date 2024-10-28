import React from 'react'

export default function AboutCards({data}) {
  return (
    <div>
      <h3 className='heading'>KNOW ABOUT US</h3>
      <ul className='card-list p-0'>
        {data.map(item => (
          <li className='bg-gray-600 text-[#fff] p-4 rounded-lg hover:bg-[rgba(75,85,99,0.9)]'
            key={item.id}
          >
            <h3 className='font-bold text-center py-2'>
              {item.title}
            </h3>
            <p className='text-center'>
              {item.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
