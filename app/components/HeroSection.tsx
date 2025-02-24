"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  return (
    <>
      <div className="flex justify-center mb-[4%]">
        {/* <Image
          src="https://placehold.co/600x400"
          alt="Main Image"
          width={500}
          height={500}
        /> */}
        <img
          src="https://fakeimg.pl/500x500"
          className="rounded-full shadow-[15px_8px_45px_0px_rgba(0,0,0,1),-15px_-8px_45px_0px_rgba(0,0,0,0.1)]"
          alt=""
        />
      </div>
      <div className="flex-col justify-center text-white">
        <h1 className="text-center mb-[2%] text-4xl">Hey</h1>
        <h1 className="text-center font-bold text-6xl mb-[1.2%]">
          I'm Sadim Rahman
        </h1>
        <h1 className="text-center font-bold text-5xl">
          I'm a    
          <span>
            <TypeAnimation
              className="text-center font-bold text-5xl text-[#D32D20]"
              preRenderFirstString={true}
              sequence={[
                " Electronic Engineering Student",
                2000,
                " Junior Developer",
                2000,
                " Machine Learning Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h1>
      </div>
    </>
  );
}

export default HeroSection;
