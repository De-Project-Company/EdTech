'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Cta() {
  return (
    <div className="w-full py-32 bg-white text-black overflow-hidden">
      <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between gap-6">
        <div className="w-full md:w-6/12">
          <div className="columns-1 md:columns-2 [&>div:not(:first-child)]:mt-5 md:[&>div:not(first-child)]:mt-8">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.11,
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <Image
                src="/cta1.png"
                height={341}
                width={333}
                alt=""
                className=""
              />
            </motion.div>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.05,
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <Image
                src="/cta2.png"
                height={140}
                width={300}
                alt=""
                className="hidden md:block"
              />
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.08,
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1]
              }}
              className=""
            >
              <Image
                src="/cta3.png"
                height={322}
                width={648}
                alt=""
                className="hidden md:block"
              />
            </motion.div>
          </div>
        </div>
        <div className="w-full md:w-5/12 flex items-center">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.08,
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <span className="flex items-center gap-1 mb-2">
              <hr className="w-4 h-0.5 bg-[#4221B0]" />
              <span className="text-[#4221B0] font-bold text-[12px] md:text-base">
                Better Educational Administration future with us!
              </span>
              <hr className="w-4 h-0.5 bg-[#4221B0]" />
            </span>
            <h1 className="font-bold text-lg md:text-4xl">
              Revolutionize the way you manage your school’s administration.
            </h1>
            <p className="my-9">
              Register today and experience the power of starters Ed-Management
              in transforming administrative tasks into streamlined, efficient
              processes.
            </p>
            <div className="flex gap-5">
              <button className="bg-[#4221B0] text-white rounded-md py-2 px-6">
                Register
              </button>
              <button className="border border-[#4221B0] text-[#4221B0] py-2 px-6 rounded-md">
                View Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
