import React from 'react'

const Title = ({text}) => {
  return (
    <div className='flex items-center py-6'>
     <div className='h-[1px] bg-black w-10 mr-4'/>
        <h2 className='text-3xl font-semibold'>
        {text}
        </h2>
    </div>
  )
}

export default Title