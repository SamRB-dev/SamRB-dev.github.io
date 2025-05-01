"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Main from "../../public/Main.jpg";
import Main_2 from "../../public/Main-2.jpg";

function HeroSection() {
  let images: any = [Main, Main_2];
  return (
    <>
      <div className="flex justify-center mb-[4%]">
        <Image
          // src="https://fakeimg.pl/500x500"
          src={images[Math.floor(Math.random() * 2)]}
          alt="Main Image"
          width={500}
          height={500}
          className="rounded-full shadow-[15px_8px_45px_0px_rgba(0,0,0,0.3),-15px_-8px_45px_0px_rgba(0,0,0,0.3)]"
        />
        {/* <img
          src="https://fakeimg.pl/500x500"
          className="rounded-full shadow-[15px_8px_45px_0px_rgba(0,0,0,1),-15px_-8px_45px_0px_rgba(0,0,0,0.3)]"
          alt=""
        /> */}
      </div>
      <div className="flex-col justify-center text-white">
        <h1 className="text-center mb-[2%] text-4xl">Hey</h1>
        <h1 className="text-center font-bold text-6xl mb-[1.2%]">
          I'm Sadim Rahman
        </h1>
        <h1 className="text-center font-bold text-5xl mb-[2.5%]">
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
        <h3 className="text-center w-[50%] m-auto text-xl mb-[3%]">
          A passionate electronic engineering student with a strong focus on
          software development, machine learning, and AI. Continuously exploring
          real-world applications through hands-on projects, from deep learning
          models to AI-powered solutions. Actively seeking opportunities to
          apply my skills and contribute to innovative advancements in the
          field.
        </h3>
        <div id="url" className="flex justify-center">
          <a
            href="https://www.linkedin.com/in/srb008/" target="_blank" 
            className="px-8 py-3 rounded-full text-[22px] font-medium bg-[#24272C] shadow-[4px_4px_2px_0px_rgba(0,0,0,0.5),-4px_-4px_2px_0px_rgba(255,255,255,0.5)]"
          >
            Contact me
          </a>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
