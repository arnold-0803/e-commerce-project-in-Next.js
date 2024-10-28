import React from 'react'

export default function SkeletonLoader2() {
  return (
    <div className='wrapper'>
      <div className="details details-image"></div>
      <div className='flex flex-col gap-[10px]'>
        <div className="details details-title"></div>
        <div className="details details-text"></div>
        <div className="details details-text"></div>
        <div className="details details-text"></div>
        <div className="details details-text"></div>
      </div>
    </div>
  )
}
