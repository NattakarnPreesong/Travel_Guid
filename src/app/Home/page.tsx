"use client";

import React from "react";
import Nav01 from "../../../public/components/Navbar/Nav01";
import Foot01 from "../../../public/components/Footter/Foot01";

export default function Page() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-[#FF637D] via-[#D61087] to-[#922390] text-white">
      {/* Navbar */}
      <header className="flex items-center p-3 backdrop-blur-sm bg-black/30">
        <Nav01 />
      </header>

      {/* Main Content */}
      <main className="flex-grow flex justify-center items-center text-white">
        <p>test</p>
      </main>

      {/* Footer */}
      <footer className="flex justify-center backdrop-blur-sm bg-black/60 p-3">
        <Foot01 />
      </footer>
    </div>
  );
}
