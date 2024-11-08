"use client";

import React from "react";

function Nav01() {
  return (
    <div className="flex items-center">
      {/* Logo */}
      <img src="/images/Logo.png"
        alt="Logo"
        className="drop-shadow-sm"
        width="60px"
        height="auto"
      />
      {/* Search Bar */}
      <input
        type="text"
        placeholder="ค้นหาสถานที่"
        className="flex-grow p-2 rounded-fullbg-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none"
      />
    </div>
  );
}

export default Nav01;
