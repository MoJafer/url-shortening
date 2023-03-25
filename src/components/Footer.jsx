import logo from '../assets/images/logo.svg'
import facebookIcon from '../assets/images/icon-facebook.svg'
import twitterIcon from '../assets/images/icon-twitter.svg'
import instagramIcon from '../assets/images/icon-instagram.svg'
import pinterestIcon from '../assets/images/icon-pinterest.svg'
import { footerLinks } from '../consts'

const Footer = () => {
    return (
        <footer className="bg-neutral-dark-violet md:h-[70vh] px-10 py-20 flex flex-col md:flex-row items-center md:items-start justify-evenly">
            <h1 className="font-bold text-4xl text-white md:mr-10 max-md:mb-16">Shortly</h1>
            {footerLinks.map((link, index) => (
                <div key={link.id}>
                    <ul className="list-none text-white max-md:mb-10 max-md:text-center">
                        <li className="font-bold text-lg md:mb-8 mb-5">{link.title}</li>
                        {link.subLinks.map((l, i) => (
                            <li key={l.id} className="hover:underline mb-3"><a href={l.href}>{l.title}</a></li>
                        ))}
                    </ul>
                </div>
            ))}
            <div className='flex flex-row '>
                <a href='#!' className='ml-5'><img src={facebookIcon} alt="icon" /></a>
                <a href='#!' className='ml-5'><img src={twitterIcon} alt="icon" /></a>
                <a href='#!' className='ml-5'><img src={pinterestIcon} alt="icon" /></a>
                <a href='#!' className=''><img src={instagramIcon} alt="icon" /></a>
            </div>
        </footer>
    )
}


export default Footer