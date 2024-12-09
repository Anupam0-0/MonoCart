import React, {useContext, useState} from 'react'
import {assets} from '../assets/frontend_assets/assets'
import { NavLink, Link } from 'react-router'
import { ShopContext } from '../context/ShopContext'



const Navbar = () => {

    const [visible, setVisible] = useState(false)
    const {showSearch, setShowSearch, getCartCount} = useContext(ShopContext)

  return (
    <div className='flex items-center justify-between py-3 mb-2 font-medium'>
        {/* <img src={assets.logo} alt="" /> */}
        <Link to='/'>
        <h1 className='text-[2.5rem] font-mono w-36 '>MonoCart<span className='text-pink-500 -mx-1 text-6xl'>.</span> </h1>
        </Link>

        <ul className='hidden lg:flex gap-5 mt-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden '/>
            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden '/>
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>ABOUT </p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden '/>
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden'/>
            </NavLink>
        </ul>

        <div className='flex items-center gap-6 mt-3'>
            <img onClick={()=> setShowSearch(!showSearch) } src={assets.search_icon} className='w-5 cursor-pointer' alt="🔍" />

            <div className='group relative '>
                <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p className='cursor-pointer hover:text-black'>My Orders</p>
                        {/* <p className='cursor-pointer hover:text-black'>My Cart</p> */}
                        <p className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>
            </div>
            <NavLink to='/cart' className='relative'>
                <img src={assets.cart_icon} className='w-5 min-w-5 cursor-pointer' alt="" />
                <div className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square roundedd-full text-[8px] '>{getCartCount()}</div>  
            </NavLink>

            <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer md:hidden mt-' alt="MENU" />

        </div>

        {/* Sideabr menu for small screen */}
        <div className={`absolute  top-0 right-0 bottom-0 overflow-hidden bg-slate-50 transition-all delay-75 duration-[900ms] ${visible ? 'w-1/2' : 'w-0'}`}>
            <div className='flex flex-col py-3 px-2 text-gray-700'>
                <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 px-5 mb-4'>
                    <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                    <p className='text-lg text-slate-800'>BACK</p>

                </div>

                <NavLink onClick={() => setVisible(false)} to='/' className='py-2 pl-6 border'> HOME </NavLink>
                <NavLink onClick={() => setVisible(false)} to='/collection' className='py-2 pl-6 border'> COLLECTION </NavLink>
                <NavLink onClick={() => setVisible(false)} to='/about' className='py-2 pl-6 border'> ABOUT </NavLink>
                <NavLink onClick={() => setVisible(false)} to='/contact' className='py-2 pl-6 border'> CONTACT </NavLink>

            </div>


        </div>

    </div>

  )
}

export default Navbar