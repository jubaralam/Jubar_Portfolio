import React from 'react'
import { SectionWrapper } from '../../hoc'
import { Link } from 'react-router-dom'

const Stars = () => {
  return (
    <div className='flex w-full mt-5'>
      <Link to="https://www.youtube.com/watch?v=0fYi8SGA20k&t=4358s&pp=ygUYcG9ydGZvbGlvIHVzaW5nIHJlYWN0IGpz"
      target='_blank'
      className='mx-auto'
      >
      Refer to this video
      </Link>
   

    </div>
  )
}

export default Stars;