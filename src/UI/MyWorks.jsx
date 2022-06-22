import React from 'react'


export default function MyWorks({imgobj}) {
  return (
    <div className='img' >
    <p className='works__text'>
       {imgobj.Description}
    </p>
    <img src={imgobj.Image}  alt="my drawings"></img>
    </div>
  )
}
