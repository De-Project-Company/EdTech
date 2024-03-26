'use client';
import Image from 'next/image';
import ReviewCard from '../ReviewCard';
import { motion } from 'framer-motion';

export default function Reviews() {
  return (
    <div className="w-full py-32 bg-indigo-50 overflow-hidden relative">
      <div className="absolute bottom-0 left-[-20%] right-0 top-[40%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>

      <div className="w-11/12 mx-auto">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.05, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-8/12 mx-auto text-center"
        >
          <h1 className="font-bold text-lg md:text-4xl text-[#1A0D46]">
            What Schools Using Starters Ed-Management Have to Say About Us
          </h1>
        </motion.div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          <ReviewCard />
        </div>
      </div>
    </div>
  );
}
