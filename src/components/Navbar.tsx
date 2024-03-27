'use client';
import Image from 'next/image';
import Link from 'next/link';
// import searchIcon from '@/public/';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(prevOpen => !prevOpen);
  };

  return (
    <header className="w-full bg-white/30 backdrop-blur-sm fixed top-0 z-10">
      <div className="w-11/12 mx-auto py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link href={'/'} className="flex gap-4 items-center">
            <div>
              <Image
                src="https://dummyimage.com/100x100/1c1cff/ffffff.jpg"
                className="w-12 h-12 rounded-full"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <div className="flex flex-col font-bold text-indigo-700 italic">
              <span>Starters</span>
              <span>Ed-Management</span>
            </div>
          </Link>
        </motion.div>

        {/* Nav links */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:flex gap-12 text-black"
        >
          <Link href={'#'} className="border-b-2  border-[#4221B0] pb-0.5">
            Home
          </Link>
          <Link href={'#'} className="">
            About
          </Link>
          <Link href={'#'} className="">
            Blog
          </Link>
          <Link href={'#'} className="">
            Contact Us
          </Link>
        </motion.div>
        {/* Button Tabs */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:flex gap-2 items-center"
        >
          <button className="p-3 bg-[#D9D3EF] text-white rounded-md">
            <Image
              src="/search.png"
              height="40"
              width="40"
              alt=""
              className="h-4 w-4"
            />
          </button>
          <button className="py-2 px-6 bg-[#4221B0] text-white rounded-md">
            Register
          </button>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="md:hidden flex gap-2 items-center"
        >
          <button className="p-3 bg-[#D9D3EF] text-white rounded-md">
            {' '}
            <Image
              src="/search.png"
              height="40"
              width="40"
              alt=""
              className="h-4 w-4"
            />
          </button>
          <button
            onClick={toggleMenu}
            className="bg-[#4221B0] text-white py-2 px-4 rounded-md"
          >
            Menu
          </button>
        </motion.div>
      </div>
      {open && (
        <div className="block md:hidden bg-white h-screen fixed top-0 z-40 w-full">
          <div className="w-11/12 mx-auto flex justify-between items-center py-3 border-b">
            <Link href={'/'} className="flex gap-4 items-center">
              <div>
                <Image
                  src="https://dummyimage.com/100x100/1c1cff/ffffff.jpg"
                  className="w-12 h-12 rounded-full"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
              <div className="flex flex-col font-bold text-indigo-700 italic">
                <span>Starters</span>
                <span>Ed-Management</span>
              </div>
            </Link>

            <button
              onClick={toggleMenu}
              className="md:hidden bg-[#4221B0] text-white py-2 px-4 rounded-md"
            >
              Close
            </button>
          </div>

          <div className="z-40 flex flex-col md:hidden w-11/12 mx-auto">
            <Link
              href={'/'}
              onClick={toggleMenu}
              className="hover:text-[#4221B0] py-6 border-b"
            >
              Home
            </Link>
            <Link
              href={'#'}
              onClick={toggleMenu}
              className="hover:text-[#4221B0] py-6 border-b"
            >
              About
            </Link>
            <Link
              href={'#'}
              onClick={toggleMenu}
              className="hover:text-[#4221B0] py-6 border-b"
            >
              Blog
            </Link>
            <Link
              href={'#'}
              onClick={toggleMenu}
              className="hover:text-[#4221B0] py-6 border-b"
            >
              Contact Us
            </Link>
            <Link
              href={'#'}
              onClick={toggleMenu}
              className="bg-[#4221B0] text-white rounded-md mt-6 py-2 w-full flex items-center text-center justify-center duration-700"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
