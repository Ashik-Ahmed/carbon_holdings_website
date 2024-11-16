"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white fixed w-full z-10">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-primary">
                    <img src="/logo.png" al t='logo' className='w-[180px] h-[22px]' />
                </Link>
                <nav className="hidden md:flex space-x-6">
                    {/* <Link href="/" className={`text-gray-600 hover:text-primary`}>Home</Link> */}
                    <Link href="/our-journey" className={`text-gray-600 hover:text-primary`}>Our Journey</Link>
                    {/* <Link href="#fendersolution" className={`text-gray-600 hover:text-primary`}>Fender Solution</Link> */}
                    <Link href="/services" className={`text-gray-600 hover:text-primary`}>Services</Link>
                    {/* <Link href="/#ship" className={`text-gray-600 hover:text-primary`}>Ship</Link> */}
                    {/* <Link href="#mission" className={`text-gray-600 hover:text-primary`}>Mission & Vision</Link> */}

                </nav>
                <Link href="/#contact" className="btn-primary hidden md:block">Get Started</Link>
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
                        <Link href="/our-journey" onClick={() => setIsMenuOpen(false)} className={`text-gray-600 hover:text-primary`}>Our Journey</Link>
                        {/* <Link href="#fendersolution" onClick={() => setIsMenuOpen(false)} className={`text-gray-600 hover:text-primary`}>Fender Solution</Link> */}
                        <Link href="/services" onClick={() => setIsMenuOpen(false)} className={`text-gray-600 hover:text-primary`}>Services</Link>
                        {/* <Link href="/#ship" onClick={() => setIsMenuOpen(false)} className={`text-gray-600 hover:text-primary`}>Ship</Link> */}
                        {/* <Link href="#mission" onClick={() => setIsMenuOpen(false)} className={`text-gray-600 hover:text-primary`}>Mission & Vision</Link> */}

                        <Link href="/#contact" onClick={() => setIsMenuOpen(false)} className="btn-primary w-full">Get Started</Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;