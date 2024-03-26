'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function WhySection() {
  return (
    <div className="w-full py-32 bg-[#F1EDFB]">
      <div className="w-11/12 mx-auto">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.05, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-8/12 mx-auto text-center"
        >
          <h1 className="font-bold text-lg md:text-4xl text-[#1A0D46]">
            Why Choose Starters Management
          </h1>
          <p className="text-[#4221B0] text-base md:text-2xl">
            for your school administration?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 mt-28 gap-6">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.05,
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="bg-white shadow-sm rounded-md px-2 py-6 text-center w-full"
          >
            <h1 className="text-xl font-bold mb-5">Effortless Management</h1>
            <p className="w-11/12 mx-auto">
              Centralized hub for teacher, student and other staff profiles.
              Access Comprehensive insights on performance and attendance in one
              place
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.08,
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="bg-white shadow-sm rounded-md px-2 py-6 text-center w-full"
          >
            <h1 className="text-xl font-bold mb-5">
              Seamless Calender Management
            </h1>
            <p className="w-11/12 mx-auto">
              Eliminate scheduling conflicts and missed deadline. Effortlessly
              coordinate events, assignments and crucial date for
              synchronization planning
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.11,
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="bg-white shadow-sm rounded-md px-2 py-6 text-center w-full"
          >
            <h1 className="text-xl font-bold mb-5">Financial Control</h1>
            <p className="w-11/12 mx-auto">
              Manage school finance effortlessly with intuitive tools. Track
              expenses, budget efficiency and generate reports for financial
              decisions
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.14,
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="bg-white shadow-sm rounded-md px-2 py-6 text-center w-full"
          >
            <h1 className="text-xl font-bold mb-5">Secure Collaboration</h1>
            <p className="w-11/12 mx-auto">
              Our Platform protects sensitive information, ensuring secure
              communication among Administrators, Teachers and Students.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.17, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 w-full text-center"
        >
          <Link href={'#'} className="">
            And more, all in one place.
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
