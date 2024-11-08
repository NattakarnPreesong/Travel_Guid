"use client";

import React from "react";
import { HiOutlineSearch } from "react-icons/hi";

function Nav01() {
  return (
    <div className="flex items-center w-full">
      {/* Logo */}
      <img
        src="/images/Logo.png"
        alt="Logo"
        className="drop-shadow-sm"
        width="60px"
        height="auto"
      />

      {/* Search Bar */}
      <div className="relative flex-grow ml-4">
        <HiOutlineSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="ค้นหาสถานที่"
          className="w-full rounded-full py-2 pl-10 pr-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    </div>
  );
}

export default Nav01;
