"use client";

import React from "react";

function Nav01() {
  return (
    <div className="flex items-center">
      {/* Logo */}
      <img
        src="/images/logo.png" // เปลี่ยนเป็น path ของโลโก้ของคุณ
        alt="Logo"
        className="w-10 h-10 mr-3"
      />
      {/* Search Bar */}
      <input
        type="text"
        placeholder="ค้นหาสถานที่"
        className="flex-grow p-2 rounded-full bg-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none"
      />
    </div>
  );
}

export default Nav01;
