"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    // ตั้งเวลา 4 วินาที (4000 มิลลิวินาที) เพื่อเปลี่ยนเส้นทางไปยัง /Home
    const timer = setTimeout(() => {
      router.push('/Login');
    }, 4000);

    // เคลียร์ timeout เมื่อ component นี้ถูก unmounted เพื่อป้องกัน memory leak
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-r from-[#FF637D] via-[#D61087] to-[#922390]'>
      <div className='flex justify-center items-center'>
        <img src="/images/Logo.png" alt="Logo" className="w-56 md:w-96 h-auto drop-shadow-sm" />
      </div>
    </div>
  );
}
