"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md fixed w-full z-10">
            <div className="container mx-auto px-4 py-1 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-primary">
                    <Image src="/carbon_holdings_logo.png" height={50} width={180} alt='logo' />
                </Link>
                <nav className="hidden md:flex space-x-6">
                    <Link href="/" className="text-gray-600 hover:text-primary">Home</Link>
                    <Link href="#about" className="text-gray-600 hover:text-primary">About</Link>
                    <Link href="#services" className="text-gray-600 hover:text-primary">Services</Link>
                    <Link href="#ship" className="text-gray-600 hover:text-primary">Ship</Link>
                    <Link href="#mission" className="text-gray-600 hover:text-primary">Mission & Vision</Link>
                </nav>
                <Link href="#contact" className="btn-primary hidden md:block">Get Started</Link>
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
                        <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-primary">Home</Link>
                        <Link href="#about" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-primary">About</Link>
                        <Link href="#services" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-primary">Services</Link>
                        <Link href="#ship" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-primary">Ship</Link>
                        <Link href="#mission" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-primary">Mission & Vision</Link>
                        <Link href="#contact" onClick={() => setIsMenuOpen(false)} className="btn-primary w-full">Get Started</Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;