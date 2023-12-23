import React from 'react';
import Top from '../assets/home/top.svg'
import Butt from "../assets/home/butt.svg"
import HomeImage from "../assets/home/home.svg"

const Home = () => {
  return (
    <div className="h-full  bg-[#4221B0]">
      <div className="px-[68px]">
        <img src={Top} alt="topimage" className="top-0" />
        <div className="flex h-full justify-center items-center pt-6">
          <div className="w-[463px]">
            <h2 className="text-white">
              Starters Management
            </h2>

            <p>Experience the power of efficient School Administration nurturing a thriving learning environment for students, supporting teachers, and fostering meaningful connections within the school community.
</p>
          </div>
          <div className="p-8">
            <img src={HomeImage} alt="topimage" className="" />
          </div>
        </div>

      </div>
      <img src={Butt} alt="BottomImage" className="w-full" />
    </div>
  )
};

export default Home;
