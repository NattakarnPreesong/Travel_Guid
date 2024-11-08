"use client";

import React from "react";

function Nav01() {
  return (
    <div className="flex items-center w-full">
      <img src="/images/logo.png" alt="Logo" className=" mr-3" height="auto" width="60px"/>
      <input
        type="text"
        placeholder="ค้นหาสถานที่"
        className="flex-grow p-2 rounded-lg bg-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none"
      />
    </div>
  );
}

export default Nav01;
