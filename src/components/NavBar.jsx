import burguerMenu from '../assets/images/icon-menu.svg'
import React, { useState } from 'react'
import { NavBarMovil } from './NavBarMovil'


export const NavBar = () => {

    const [mostrarContenido, setMostrarContenido] = useState(false)


    const handleMostrarContenido = () => {
        setMostrarContenido(true);
    }

    const handleOcultarContenido = () => {
        setMostrarContenido(false);
    }

    return (

        <section className=''>
            <ul className="hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center">
                <li>
                    <a className='hover:text-SoftRed' href="#">Home</a>
                </li>
                <li>
                    <a className='hover:text-SoftRed' href="#">New</a>
                </li>
                <li>
                    <a className='hover:text-SoftRed' href="#">Popular</a>
                </li>
                <li>
                    <a className='hover:text-SoftRed' href="#">Trending</a>
                </li>
                <li>
                    <a className='hover:text-SoftRed' href="#">Categories</a>
                </li>
            </ul>
            <img className='w-10 h-4 cursor-pointer sm:hidden' src={burguerMenu} alt="Menu Hamburguesa" onClick={handleMostrarContenido} />
            {mostrarContenido && <NavBarMovil onOcultar={handleOcultarContenido} />}
        </section>
    )


}





