import logo from '../assets/images/logo.svg'
import hamburgerIcon from '../assets/images/icon-hamburger.svg'
import closeIcon from '../assets/images/icon-close.svg'
import { menu } from '../consts'
import { useState } from 'react'

const Nav = () => {
    const [activeMobileMenu, setactiveMobileMenu] = useState(false)

    return (
        <nav className='flex md:flex-row items-center justify-between text-neutral-grayish-violet'>
            <div className='flex flex-row justify-between items-center max-md:w-full md:ml-14'>
                <img src={logo} alt="logo" className="ml-16" />
                <img src={activeMobileMenu ? closeIcon : hamburgerIcon} alt="mobile-icon" className="md:hidden cursor-pointer" onClick={() => setactiveMobileMenu(prev => !prev)} />
            </div>
            <div className={`w-full flex md:flex-row items-center justify-between max-md:mobile-menu ${activeMobileMenu ? 'max-md:visible' : 'max-md:hidden'}`}>
                <div className={`flex flex-col md:flex-row`}>
                    {menu.map((link, index) => (
                        <a key={link.id} href='#!' className='md:ml-5 max-md:mb-8 font-bold hover:underline hover:underline-offset-8'>{link.title}</a>
                    ))}
                </div>
                <hr className='w-full border-neutral-grayish-violet md:hidden' />
                <div className='max-md:mt-7 flex max-md:flex-col max-md:items-center'>
                    <a href='#!' className='py-2 px-7 font-bold rounded-full hover:bg-primary-cyan hover:text-white'>دخول</a>
                    <a href='#!' className='py-2 px-7 font-bold rounded-full hover:bg-primary-cyan hover:text-white'>تسجيل</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav