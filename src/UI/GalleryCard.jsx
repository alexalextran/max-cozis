import React from 'react'

export default function Gallery({imgobj}) {
  return (
    <div className='galleryCard'>
     <p>
        {imgobj.Description}
        </p>
        <img src={imgobj.Image}  alt="my drawings"></img>
        </div>
  )
}
