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
                    <Link href="#pricing" className="text-gray-600 hover:text-primary">Pricing</Link>
                    <Link href="#blog" className="text-gray-600 hover:text-primary">Blog</Link>
                    <Link href="#contact" className="text-gray-600 hover:text-primary">Contact</Link>
                </nav>
                <button className="btn-primary hidden md:block">Get Started</button>
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
                        <Link href="/" className="text-gray-600 hover:text-primary">Home</Link>
                        <Link href="#about" className="text-gray-600 hover:text-primary">About</Link>
                        <Link href="#services" className="text-gray-600 hover:text-primary">Services</Link>
                        <Link href="#team" className="text-gray-600 hover:text-primary">Team</Link>
                        <Link href="#pricing" className="text-gray-600 hover:text-primary">Pricing</Link>
                        <Link href="#blog" className="text-gray-600 hover:text-primary">Blog</Link>
                        <Link href="#contact" className="text-gray-600 hover:text-primary">Contact</Link>
                        <button className="btn-primary w-full">Get Started</button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;