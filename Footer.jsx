import React from 'react'
import logo from '../../assets/parcel_icon.png'

const Footer = () => {
  return (
    <div className="bg-darkGray py-14">
        <div className="container flex flex-col gap-3 justify-center items-center">
            <img src={logo} alt="" className="w-[100px]"/>
            <p className="text-white text-center text-sm">
                Thank you for serving us 2024
            </p>
            <p className="text-white">Subscribe: <a href="https://github.com/JohnPaulWeb?tab=repositories" className="text-purple-500">Ayanokoji</a></p>
        </div>
    </div>
  )
}

export default Footer