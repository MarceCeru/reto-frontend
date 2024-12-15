import iconClose from '../assets/images/icon-menu-close.svg'
import React from 'react'


export const NavBarMovil = ({ onOcultar }) => {

    const handleClick = () => {
        onOcultar();
    }

    return (
        <div className='absolute top-0 right-0'>
            <div className="bg-DarkGrayishBlue/50 h-[1770px] w-[355px]  relative ">
            </div>
            <ol className="bg-OffWhite absolute h-full w-[250px] right-0 top-0 text-[22px] pl-6 text-VeryDarkBlue">
                <img className='  cursor-pointer mt-7 ml-[180px] mb-[91px] h-[35px]' src={iconClose} alt="" onClick={handleClick} />
                <li className='mb-8 cursor-pointer hover:text-SoftOrange'>Home</li>
                <li className='mb-8 cursor-pointer hover:text-SoftOrange'>New</li>
                <li className='mb-8 cursor-pointer hover:text-SoftOrange'>Popular</li>
                <li className='mb-8 cursor-pointer hover:text-SoftOrange'>Trending</li>
                <li className='mb-8 cursor-pointer hover:text-SoftOrange'>Categories</li>
            </ol>

        </div>)
}



