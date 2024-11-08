"use client";

import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";

function Nav01() {
  const menuItems = [
    { label: "หน้าหลัก", part: "Home" },
    { label: "หมวดหมู่", part: "Category" },
    { label: "แผนที่", part: "Maps" },
    { label: "แชท", part: "Chat" },
    { label: "อื่นๆ", part: "Other" },
  ];

  // State to store the current path
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    // Set the current path to the URL's path
    setCurrentPath(window.location.pathname.toLowerCase());
  }, []);

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
        {menuItems.map((item, index) => {
          const isActive = currentPath.includes(item.part.toLowerCase()); // Check if the path includes the item part

          return (
            <a
              key={index}
              href={`/${item.part}`}
              className={`rounded-full w-24 text-center px-3 py-2 text-sm font-medium shadow-sm transition-opacity ${
                isActive
                  ? "bg-pink-600 text-white"
                  : "bg-pink-500 text-gray-300 hover:bg-pink-600"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Nav01;
