import React from 'react'

const Feature = ({header, text, src}) => {
  return (
    <div className='flex'>
        <div>
        <img src={require(`../public/icons/${src}`).default.src} alt="" className='max-h-[4rem]'/>
        <p className='py-4 font-medium text-xl'>{header}</p>
        <p className='py-4'>{text}</p>
        </div>
    </div>

  )
}

export default Feature