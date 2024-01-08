'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, EyeSlash } from 'iconsax-react';
import { Input } from '@ui/Input';
import Button from '@ui/Button';
// import { toast } from 'sonner';
import { toast } from 'react-toastify';

const Signin = () => {
  const [isMicrosoftEdge, setIsMicrosoftEdge] = useState(false);
  const [defaultInpType, setDefaultInpType] = useState<'password' | 'text'>(
    'password'
  );

  useEffect(() => {
    // Check if the user is using Microsoft Edge
    if (
      window.navigator.userAgent.includes('Edg') ||
      window.navigator.userAgent.includes('Edge')
    ) {
      setIsMicrosoftEdge(true);
    }
  }, []);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.email === '' || formData.password === '') {
      toast.error('Cannot Login. Please fill in all required fields.', {
        position: 'top-right',
        theme: 'dark'
      });
      return;
    }
    // Simulate the account creation process
    Signin().then(() => {
      toast.success('Login successfully', {
        position: 'top-right',
        theme: 'dark'
      });
    });
  };

  const Signin = async () => {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000); // Simulating a 2-second delay for account creation
    });
  };

  return (
    <div className="relative h-screen flex items-center justify-center py-[60px]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/auth/background.svg"
          alt="background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="w-[1400px] h-[600px] bg-white relative z-10 flex items-center justify-center rounded-xl overflow-hidden">
        <div className="w-1/2 h-full  items-center justify-center hidden md:flex">
          <p className="text-4xl text-black">Left Section</p>
        </div>

        <div className="w-1/2 h-full flex overflow-y-auto md:mb-[60px] ">
          <div className="flex-col flex md:py-[89px] py-[20px]  w-full ">
            <div className="md:flex sm:flex flex-col items-center justify-center lg:items-start">
              <p className="text-2xl md:text-[48px] font-bold  text-[1.5rem] mb-1 md:mb-6 text-center lg:text-left ">
                Welcome
              </p>
              <p className="text-[#0D0723]  mt-[1rem] md:text-[22px] font-manropeB lg:text-[20px] xl:text-[1.375rem] leading-[28px]  lg:font-semibold text-center md:text-left">
                Please login to your Account
              </p>
            </div>
            <div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col mt-[8%] mr-[80px] w-[450px]"
              >
                <div className="flex flex-col gap-2 w-full ">
                  <label
                    htmlFor="email"
                    className="text-[#1A0D46] font-semibold leading-7"
                  >
                    Username / Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="auth-input text-black  mb-4"
                  />
                </div>
                <div className="flex flex-col ">
                  <div className=" flex flex-col gap-2">
                    <label
                      htmlFor="password"
                      className="text-black  leading-7 mt-2 font-medium"
                    >
                      Password
                    </label>
                    <div className="relative mb-4 w-full">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="auth-input text-black w-full font-medium"
                      />
                      {showPassword ? (
                        <Eye
                          onClick={handleTogglePassword}
                          className="absolute right-3 bottom-2 transform-translate-y-1/2 text-[#fff] cursor-pointer"
                        />
                      ) : (
                        <EyeSlash
                          onClick={handleTogglePassword}
                          className="absolute right-3 bottom-2 transform-translate-y-1/2 text-[#B5B4B4] cursor-pointer"
                        />
                      )}
                    </div>
                  </div>
                  <div className="flex mt-[20px] justify-between items-center ">
                    <Link href={''} className="underline font-medium">
                      Forgot Password
                    </Link>
                    <Button
                      type="submit"
                      className="border rounded-md h-[50px] py-[16px] w-[120px] font-normal "
                    >
                      Login
                    </Button>
                  </div>
                </div>
              </form>

              <div className="mr-[80px] w-[478px] mt-6 ">
                <Button className="bg-[#11AABB40] text-[#1A0D46] rounded-md w-full mb-5">
                  Register your School
                </Button>
                <span className="">Privacy Policy and Terms & Conditions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
