'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ReviewCard() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.08, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white p-4 rounded-lg shadow-sm"
    >
      <div className="flex gap-2 items-center mb-6">
        <div className="h-12 w-12">
          <Image
            src="/cta2.png"
            alt=""
            height={255}
            width={260}
            className="rounded-full h-full w-full"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-sm">Imperial High, Ibadan Nig.</h1>
          <span className="text-sm">Mrs. Waje Durotimi</span>
        </div>
      </div>
      <span className="">
        I love the integrated calendar system. it is a life changer for my
        school. No more scheduling hassles. its user friendly . I highly
        recommend for schools.
      </span>
      <div className="mt-4 flex justify-end">
        <span>⭐⭐⭐⭐⭐</span>
      </div>
    </motion.div>
  );
}
