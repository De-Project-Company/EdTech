'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <div className="w-full bg-[#0D0723] text-white py-12 overflow-hidden">
      <div className="w-11/12 mx-auto">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.11, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 w-full"
        >
          <span className="ms-0 md:ms-12">Questions? Call +234 657-000-66</span>
        </motion.div>
        <div className="hidden md:flex flex-col md:flex-row gap-12 items-center text-center md:text-left justify-between">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.05,
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="flex flex-col"
          >
            <h1 className="mb-3 font-bold">OUR BRANDS</h1>
            <Link href={'#'} className="mb-2 text-sm">
              Starters Ed-Management
            </Link>
            <Link href={'#'} className="text-sm">
              PayGo
            </Link>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.08,
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="flex flex-col"
          >
            <Link href={'#'} className="mb-2 text-sm">
              FAQ
            </Link>
            <Link href={'#'} className="mb-2 text-sm">
              Investor Relations
            </Link>
            <Link href={'#'} className="mb-2 text-sm">
              Ways to Subscribe
            </Link>
            <Link href={'#'} className="mb-2 text-sm">
              Corporate Information
            </Link>
            <Link href={'#'} className="text-sm">
              Only on BuddySub
            </Link>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.11,
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="flex flex-col"
          >
            <Link href={'#'} className="mb-2 text-sm">
              Media Center
            </Link>
            <Link href={'#'} className="mb-2 text-sm">
              Buy Gift Cards
            </Link>
            <Link href={'#'} className="mb-2 text-sm">
              Cookie Preferences
            </Link>
            <Link href={'#'} className="text-sm">
              Legal Notices
            </Link>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.14,
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="flex flex-col"
          >
            <Link href={'#'} className="mb-2 text-sm">
              Help Center
            </Link>
            <Link href={'#'} className="mb-2 text-sm">
              Jobs
            </Link>
            <Link href={'#'} className="mb-2 text-sm">
              Terms of Use
            </Link>
            <Link href={'#'} className="text-sm">
              Contact Us
            </Link>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.17,
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="flex flex-col"
          >
            <select className="text-[#0D0723] py-2 px-1 rounded-sm mb-3">
              <option value="English" className="">
                English
              </option>
              <option value="saab">French</option>
              <option value="opel">Deutch</option>
              <option value="audi">Igbo</option>
            </select>
            <Link href={'#'} className="text-sm">
              BuddySub
            </Link>
          </motion.div>
        </div>

        <div className="md:hidden grid grid-cols-2 gap-12">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.05,
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="flex flex-col"
          >
            <h1 className="mb-3 font-bold">OUR BRANDS</h1>
            <Link href={'#'} className="mb-2 text-sm">
              Starters Ed-Management
            </Link>
            <Link href={'#'} className="text-sm">
              PayGo
            </Link>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.08,
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="flex flex-col"
          >
            <Link href={'#'} className="mb-2 text-sm">
              FAQ
            </Link>
            <Link href={'#'} className="mb-2 text-sm">
              Investor Relations
            </Link>
            <Link href={'#'} className="mb-2 text-sm">
              Ways to Subscribe
            </Link>
            <Link href={'#'} className="mb-2 text-sm">
              Corporate Information
            </Link>
            <Link href={'#'} className="text-sm">
              Only on BuddySub
            </Link>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.11,
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="flex flex-col"
          >
            <Link href={'#'} className="mb-2 text-sm">
              Media Center
            </Link>
            <Link href={'#'} className="mb-2 text-sm">
              Buy Gift Cards
            </Link>
            <Link href={'#'} className="mb-2 text-sm">
              Cookie Preferences
            </Link>
            <Link href={'#'} className="text-sm">
              Legal Notices
            </Link>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.14,
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="flex flex-col"
          >
            <Link href={'#'} className="mb-2 text-sm">
              Help Center
            </Link>
            <Link href={'#'} className="mb-2 text-sm">
              Jobs
            </Link>
            <Link href={'#'} className="mb-2 text-sm">
              Terms of Use
            </Link>
            <Link href={'#'} className="text-sm">
              Contact Us
            </Link>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.17,
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="flex flex-col"
          >
            <select className="text-[#0D0723] py-2 px-1 rounded-sm mb-3">
              <option value="English" className="">
                English
              </option>
              <option value="saab">French</option>
              <option value="opel">Deutch</option>
              <option value="audi">Igbo</option>
            </select>
            <Link href={'#'} className="text-sm">
              BuddySub
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
