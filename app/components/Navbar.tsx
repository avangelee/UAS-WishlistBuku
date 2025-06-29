'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center relative">
        <h1 className="text-xl font-bold text-pink-500">Wishlist Buku</h1>

        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-pink-600 focus:outline-none hover:shadow transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
        </button>

        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-gray-700 hover:text-pink-600 font-medium">
            Explore
            </Link>
          <Link 
              href="/auth/login" 
              className="text-gray-700 hover:text-pink-600 font-medium"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="text-gray-700 hover:text-pink-600 font-medium"
            >
              Register
            </Link>
            <Link
              href="/profile/profilePage"
              className="text-gray-700 hover:text-pink-600 font-medium"
            >
              Profile
            </Link>
            <Link href="/wishlist" className="hover:text-pink-500">
                Wishlist
            </Link>

        </div>

        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-10 p-4 flex flex-col space-y-4">
            <Link href="/" className="text-gray-700 hover:text-pink-600 font-medium">
            Explore
            </Link>
            <Link 
              href="/auth/login" 
              className="text-gray-700 hover:text-pink-600 font-medium"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="text-gray-700 hover:text-pink-600 font-medium"
            >
              Register
            </Link>
             <Link
              href="/profile/profilePage"
              className="text-gray-700 hover:text-pink-600 font-medium"
            >
              Profile
            </Link>
            <Link href="/wishlist" className="hover:text-pink-500">
                Wishlist
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
