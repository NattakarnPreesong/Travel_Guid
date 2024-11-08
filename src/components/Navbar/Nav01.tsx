"use client";

import React from "react";
import { HiOutlineSearch } from "react-icons/hi";

function Nav01() {
  const menuItems = [
    { label: "หน้าหลัก" },
    { label: "หมวดหมู่" },
    { label: "แผนที่" },
    { label: "แชท" },
    { label: "อื่นๆ" },
  ];

  return (
    <div className="flex items-center w-full ">
      {/* Logo */}
      <img
        src="/images/Logo.png"
        alt="Logo"
        className="drop-shadow-sm"
        width="60px"
        height="auto"
      />

      {/* Search Bar */}
      <div className="relative flex-grow ml-4 mr-4">
        <HiOutlineSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="ค้นหาสถานที่"
          className="w-full md:w-96 rounded-full py-2 pl-10 pr-4 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Navigation Links for Larger Screens */}
      <div className="hidden md:flex space-x-4">
        {["หน้าหลัก", "หมวดหมู่", "แผนที่", "แชต", "อื่นๆ"].map((label, index) => (
          <a
            key={index}
            href={`/${label}`}
            className="rounded-full w-24 text-center px-3 py-2 text-sm font-medium bg-gradient-to-r from-[#922390] via-[#D61087] to-[#922390] text-gray-300 shadow-sm hover:opacity-90 transition-opacity"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Nav01;
