"use client";

import React from "react";
import { HiOutlineSearch } from "react-icons/hi";

function Nav01() {
  return (
    <div className="flex items-center bg-white p-4 shadow-md rounded-lg">
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
        <input
          type="text"
          placeholder="ค้นหาสถานที่"
          className="w-full rounded-full py-2 pl-4 pr-10 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <HiOutlineSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
      </div>
    </div>
  );
}

export default Nav01;
