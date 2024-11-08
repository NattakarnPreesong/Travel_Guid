"use client";

import React from "react";
import { HiHome, HiViewGridAdd, HiMap, HiChatAlt } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";

function Foot01() {
  const menuItems = [
    { icon: <HiHome className="text-2xl" />, label: "หน้าหลัก" },
    { icon: <HiViewGridAdd className="text-2xl" />, label: "หมวดหมู่" },
    { icon: <HiMap className="text-2xl" />, label: "แผนที่" },
    { icon: <HiChatAlt className="text-2xl" />, label: "แชท" },
    { icon: <AiFillSetting className="text-2xl" />, label: "อื่นๆ" },
  ];

  return (
    <div className="flex justify-around">
      {menuItems.map((item, index) => (
        <div key={index} className="flex flex-col items-center space-y-1">
          {item.icon}
          <span className="text-xs">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default Foot01;
