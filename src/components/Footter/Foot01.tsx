"use client";

import React, { useEffect, useState } from "react";
import { HiHome, HiViewGridAdd, HiMap, HiChatAlt } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";

function Foot01() {
  const menuItems = [
    { icon: HiHome, label: "หน้าหลัก", part: "/Home" },
    { icon: HiViewGridAdd, label: "หมวดหมู่", part: "/Category" },
    { icon: HiMap, label: "แผนที่", part: "/Maps" },
    { icon: HiChatAlt, label: "แชท", part: "/Chat" },
    { icon: AiOutlinePlus, label: "อื่นๆ", part: "/Other" },
  ];

  // State to store the current path
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    // Set the current path to the URL's path
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <div className="flex justify-around text-white backdrop-blur-sm bg-black/50 py-3 shadow-lg rounded-t-lg md:hidden">
      {menuItems.map((item, index) => {
        const IconComponent = item.icon;
        const isActive = currentPath === item.part; // Check if the link is active

        return (
          <a
            key={index}
            href={item.part}
            className={`flex flex-col items-center px-4 text-xs focus:outline-none transition-transform duration-200 ${
              isActive ? "text-[#D61087] scale-105" : "hover:text-[#D61087]"
            }`}
            aria-label={item.label}
          >
            <IconComponent className="text-2xl mb-1" />
            <span>{item.label}</span>
          </a>
        );
      })}
    </div>
  );
}

export default Foot01;
