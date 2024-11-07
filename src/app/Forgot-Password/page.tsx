"use client"; // เพิ่มบรรทัดนี้ที่บรรทัดแรก

import React, { useState, useEffect } from 'react';

export default function Page() {
  const [isOtpVisible, setIsOtpVisible] = useState(false);
  const [timer, setTimer] = useState(120);

  const handleOtpClick = () => {
    setIsOtpVisible(true);
    setTimer(120);
  };

  useEffect(() => {
    let countdown: string | number | NodeJS.Timeout | undefined;
    if (isOtpVisible && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(countdown);
      setIsOtpVisible(false);
    }
    return () => clearInterval(countdown);
  }, [isOtpVisible, timer]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#FF637D] via-[#D61087] to-[#922390]">
      <form className="backdrop-blur-sm bg-white/40 w-80 md:w-3/12 h-auto md:h-3/5 rounded-lg shadow-lg">
        <div className="p-6 md:p-8 space-y-4">
          <header className="space-y-2">
            <h2 className="text-[#9B0223] text-3xl font-semibold">กู้รหัสผ่าน</h2>
            <div className="flex justify-between items-center text-sm">
              <span className="text-white">กลับไปยังหน้าเข้าสู่ระบบไหม?</span>
              <a href="/Login" className="text-[#F5007F] border-b border-[#F5007F] hover:text-white transition duration-200">
                กลับ
              </a>
            </div>
          </header>
          
          {/* Email and OTP Button */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-white text-lg">ที่อยู่อีเมลล์</label>
            <div className="flex space-x-2">
              <input
                id="email"
                type="email"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F5007F] focus:border-transparent"
                placeholder="you@example.com"
                required
              />
              <button
                type="button"
                onClick={handleOtpClick}
                className="px-4 py-2 bg-[#D61087] text-white rounded-md hover:bg-[#C6097A] transition duration-200"
              >
                OTP
              </button>
            </div>
          </div>

          {/* OTP Code and Timer */}
          {isOtpVisible && (
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-white text-sm w-1/4 text-center bg-gray-800 p-1 rounded-md">
                  {formatTime(timer)}
                </span>
                <input
                  id="otp"
                  type="text"
                  className="w-3/4 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F5007F] focus:border-transparent"
                  placeholder="รหัส OTP"
                  required
                />
              </div>
            </div>
          )}

          {/* New Password */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-white text-lg">รหัสผ่าน</label>
            <input
              id="password"
              type="password"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F5007F] focus:border-transparent"
              placeholder="ป้อนอักขระ 6 ตัวขึ้นไป"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <label htmlFor="confirm-password" className="block text-white text-lg">ยืนยันรหัสผ่าน</label>
            <input
              id="confirm-password"
              type="password"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F5007F] focus:border-transparent"
              placeholder="ป้อนอักขระ 6 ตัวขึ้นไป"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-[#D61087] text-white rounded-md hover:bg-[#C6097A] transition duration-200"
          >
            รีเซ็ทรหัสผ่าน
          </button>
        </div>
      </form>
    </div>
  );
}
