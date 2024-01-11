import React from 'react'
import logo from '../assets/images/hotstar.png'
import {HiHome, HiStar,HiPlayCircle,HiTv} from 'react-icons/hi2'
const Header = () => {
  return (
    <div>
        <img src={logo} className='w-[80px] object-cover md:w-[115px]'  alt="logo" />
    </div>
  )
}

export default Header