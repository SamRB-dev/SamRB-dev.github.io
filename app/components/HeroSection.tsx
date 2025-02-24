"use client";
import Image from "next/image";
import React from "react";
function HeroSection() {
  return (
    <>
      <div className="flex justify-center">
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
      <div className="text">
        <h1>Hey</h1>
      </div>
    </>
  );
}

export default HeroSection;
