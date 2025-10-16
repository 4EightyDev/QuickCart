'use client';
import React from 'react';
import { assets } from '@/assets/assets';
import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';
import Image from 'next/image';
import Logo from './logo';

const Navbar = () => {
  const { isSeller, router } = useAppContext();

  return (
    <nav className='fixed inset-x-0 w-full mx-auto h-[100px] z-50 bg-white/80 backdrop-blur-lg flex'>
      <div className='border-b border-gray-200 container mx-auto flex items-center justify-between px-6'>
        <Logo
          className='cursor-pointer h-[70px] mr-auto max-w-max'
          color='black'
        />
        <div className='flex items-center mx-auto gap-4 lg:gap-8 max-md:hidden'>
          <Link
            href='/'
            className='hover:text-slate-900 transition'
          >
            Home
          </Link>
          <Link
            href='/all-products'
            className='hover:text-slate-900 transition'
          >
            Shop
          </Link>
          <Link
            href='/'
            className='hover:text-slate-900 transition'
          >
            About Us
          </Link>
          <Link
            href='/'
            className='hover:text-slate-900 transition'
          >
            Contact
          </Link>

          {isSeller && (
            <button
              onClick={() => router.push('/seller')}
              className='text-xs border px-4 py-1.5 rounded-full'
            >
              Seller Dashboard
            </button>
          )}
        </div>
        <ul className='hidden md:flex items-center gap-4 '>
          <Image
            className='w-4 h-4'
            src={assets.search_icon}
            alt='search icon'
          />
          <button className='flex items-center gap-2 hover:text-slate-900 transition'>
            <Image
              src={assets.user_icon}
              alt='user icon'
            />
            Account
          </button>
        </ul>
        <div className='flex items-center md:hidden gap-3'>
          {isSeller && (
            <button
              onClick={() => router.push('/seller')}
              className='text-xs border px-4 py-1.5 rounded-full'
            >
              Seller Dashboard
            </button>
          )}
          <button className='flex items-center gap-2 hover:text-slate-900 transition'>
            <Image
              src={assets.user_icon}
              alt='user icon'
            />
            Account
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
