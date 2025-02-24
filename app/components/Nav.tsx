import React from "react";

function Nav() {
  return (
    <nav className="flex justify-around gap-2 mb-[11%]">
      <a
        href="#"
        className="px-8 py-3 rounded-full text-[22px] font-medium bg-[#24272C] shadow-[4px_4px_2px_0px_rgba(0,0,0,0.1),-4px_-4px_2px_0px_rgba(255,255,255,.1)]"
      >
        Contact
      </a>
      <a
        href="#"
        className="px-8 py-3 rounded-full text-[22px] font-medium bg-[#24272C] shadow-[4px_4px_2px_0px_rgba(0,0,0,0.1),-4px_-4px_2px_0px_rgba(255,255,255,.1)]"
      >
        Resume
      </a>
      <a
        href="#"
        className="px-8 py-3 rounded-full text-[22px] font-medium bg-[#24272C] shadow-[4px_4px_2px_0px_rgba(0,0,0,0.1),-4px_-4px_2px_0px_rgba(255,255,255,.1)]"
      >
        About
      </a>
      <a
        href="#"
        className="px-8 py-3 rounded-full text-[22px] font-medium bg-[#24272C] shadow-[4px_4px_2px_0px_rgba(0,0,0,0.1),-4px_-4px_2px_0px_rgba(255,255,255,.1)]"
      >
        Certificate
      </a>
      <a
        href="#"
        className="px-8 py-3 rounded-full text-[22px] font-medium bg-[#24272C] shadow-[4px_4px_2px_0px_rgba(0,0,0,0.1),-4px_-4px_2px_0px_rgba(255,255,255,.1)]"
      >
        Projects
      </a>
    </nav>
  );
}

export default Nav;
