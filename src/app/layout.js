import React from 'react';
import './globals.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Corporate Business',
  description: 'Your trusted partner in business solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}