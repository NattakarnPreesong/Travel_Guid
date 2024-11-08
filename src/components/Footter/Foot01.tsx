"use client";

import React from "react";
import { HiHome, HiViewGridAdd, HiMap, HiChatAlt } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";

function Foot01() {
  const menuItems = [
    { icon: HiHome, label: "หน้าหลัก" },
    { icon: HiViewGridAdd, label: "หมวดหมู่" },
    { icon: HiMap, label: "แผนที่" },
    { icon: HiChatAlt, label: "แชท" },
    { icon: AiOutlinePlus, label: "อื่นๆ" },
  ];

  return (
    <div className="flex justify-around text-white">
      {menuItems.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <button
            key={index}
            className="flex flex-col items-center px-4 text-xs focus:outline-none transition-transform duration-200 hover:scale-105 hover:text-blue-300"
            aria-label={item.label}
          >
            <IconComponent className="text-2xl mb-1" />
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default Foot01;
