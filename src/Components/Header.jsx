import React from 'react'
import logo from '../assets/images/hotstar.png'
const Header = () => {
  return (
    <div>
        <img src={logo} className='w-[80px] object-cover'  alt="logo" />
    </div>
  )
}

export default Header