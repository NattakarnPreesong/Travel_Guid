import React from 'react';

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#FF637D] via-[#D61087] to-[#922390]">
      <form className="backdrop-blur-sm bg-white/40 w-80 md:w-3/12 h-auto md:h-3/5 rounded-lg shadow-lg" action="/Login">
        <div className="p-6 md:p-8 space-y-3">
          <header className="space-y-2">
            <h2 className="text-[#9B0223] text-3xl font-semibold">ลงทะเบียน</h2>
            <div className="flex justify-between items-center text-sm">
              <span className="text-white">มีบัญชีอยู่แล้วใช่ไหม?</span>
              <a href="/Login" className="text-[#F5007F] border-b border-[#F5007F] hover:text-white transition duration-200">
                เข้าสู่ระบบ
              </a>
            </div>
          </header>
          <div className="space-y-2">
            <label htmlFor="username" className="block text-white text-lg">ชื่อผู้ใช้</label>
            <input
              id="username"
              type="text"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F5007F] focus:border-transparent"
              placeholder="ชื่อผู้ใช้"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-white text-lg">ที่อยู่อีเมลล์</label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F5007F] focus:border-transparent"
              placeholder="you@example.com"
              required
            />
          </div>
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

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-[#D61087] text-white rounded-md hover:bg-[#C6097A] transition duration-200"
          >
            ลงทะเบียน
          </button>
          <div className="relative flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-white">หรือลงทะเบียนด้วย</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="flex justify-between space-x-4">
            <button className="flex items-center justify-center w-1/2 py-2 border-2 border-red-500 rounded-md text-red-500 bg-red-50 transition duration-200">
              <img src="/images/Icon-Google.png" alt="Google Icon" className="w-7 h-7 mr-2" />
              Google
            </button>
            <button className="flex items-center justify-center w-1/2 py-2 border-2 border-blue-500 rounded-md text-blue-500 bg-blue-50 transition duration-200">
              <img src="/images/Icon-Facebook.png" alt="Facebook Icon" className="w-3 h-5 mr-2" />
              Facebook
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}
