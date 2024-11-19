"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentPath = usePathname();
    console.log(currentPath);

    return (
        <header className="bg-white fixed w-full z-10">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-primary">
                    <img src="/logo.png" al t='logo' className='w-[180px] h-[22px]' />
                </Link>
                <nav className="hidden md:flex space-x-6">
                    {/* <Link href="/" className={`text-gray-600 hover:text-primary`}>Home</Link> */}
                    <Link href="/our-journey" className={`text-gray-600 hover:text-primary ${currentPath == '/our-journey' && 'border-b border-primary text-primary transition-all duration-500'}`}>Our Journey</Link>
                    {/* <Link href="#fendersolution" className={`text-gray-600 hover:text-primary`}>Fender Solution</Link> */}
                    <Link href="/services" className={`text-gray-600 hover:text-primary ${currentPath == '/services' && 'border-b border-primary text-primary transition-all duration-500'}`}>Helping Business Everyday</Link>
                    <Link href="/our-vessel" className={`text-gray-600 hover:text-primary ${currentPath == '/our-vessel' && 'border-b border-primary text-primary transition-all duration-500'}`}>Our Vessel</Link>
                    {/* <Link href="#mission" className={`text-gray-600 hover:text-primary`}>Mission & Vision</Link> */}

                </nav>
                <Link href="/#contact" className="btn-primary hidden md:block">Let&apos;s Connect</Link>
                <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white">
                    <nav className="flex flex-col space-y-4 px-4 py-6">
                        {/* <Link href="/" onClick={() => setIsMenuOpen(false)} className={`text-gray-600 hover:text-primary`}>Home</Link> */}
                        <Link href="/our-journey" onClick={() => setIsMenuOpen(false)} className={`text-gray-600 hover:text-primary w-fit ${currentPath == '/our-journey' && 'border-b border-primary text-primary transition-all duration-500'}`}>Our Journey</Link>
                        {/* <Link href="#fendersolution" onClick={() => setIsMenuOpen(false)} className={`text-gray-600 hover:text-primary`}>Fender Solution</Link> */}
                        <Link href="/services" onClick={() => setIsMenuOpen(false)} className={`text-gray-600 hover:text-primary w-fit ${currentPath == '/services' && 'border-b border-primary text-primary transition-all duration-500'}`}>Helping Business Everyday</Link>
                        <Link href="/our-vessel" onClick={() => setIsMenuOpen(false)} className={`text-gray-600 hover:text-primary w-fit ${currentPath == '/our-vessel' && 'border-b border-primary text-primary transition-all duration-500'}`}>Our Vessel</Link>
                        {/* <Link href="#mission" onClick={() => setIsMenuOpen(false)} className={`text-gray-600 hover:text-primary`}>Mission & Vision</Link> */}

                        <Link href="/#contact" onClick={() => setIsMenuOpen(false)} className="btn-primary w-fit">Let&apos;s Connect</Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;