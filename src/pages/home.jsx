import React from 'react';
import Top from '../assets/home/top.svg';
import Butt from '../assets/home/butt.svg';
import Cards from '../assets/home/cards.svg';

const Home = () => {
  return (
    <div className="h-full  bg-primary">
      <div className="px-[68px]">
        <img src={Top} alt="topimage" className="top-0" />
        <div className="flex h-full justify-center items-center pt-6 w-[1331px]">
          <div className="w-[463px] mr-[80px]">
            <h1 className="text-white text-[68px] font-medium mb-[40px]">Starters Management</h1>

            <p className="text-white mb-[80px] text-[16px]">
              Experience the power of efficient School Administration nurturing a
              thriving learning environment for students, supporting teachers, and
              fostering meaningful connections within the school community.
            </p>
            <div className="flex flex-col w-[283px]">

              <button className="bg-white px-16 py-4 rounded-lg text-primary text-16px font-normal mb-[20px]">
                Get Started
              </button>
              <span className="text-white">
                Already Have an Account?
                <a href="" className=" hover:underline"> Login</a>
              </span>
            </div>
          </div>
          <div className="p-8">
            <img src={Cards} alt="topimage" className="" />
          </div>
        </div>
      </div>
      <img src={Butt} alt="BottomImage" className="w-full" />
    </div>
  );
};

export default Home;
