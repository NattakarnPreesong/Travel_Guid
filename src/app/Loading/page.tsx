"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // ตั้งเวลา 10 วินาที เพื่อเปลี่ยนเส้นทางไปยัง /Home
    const timer = setTimeout(() => {
      setLoading(false); // ปิด Skeleton เมื่อโหลดข้อมูลเสร็จ
      router.push('/Home');
    }, 10000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#FF637D] via-[#D61087] to-[#922390]">
      <div className="flex justify-center items-center">
        {loading ? (
          // Skeleton Loading (ใช้แทนรูปภาพตอนกำลังโหลด)
          <div className="skeleton w-56 md:w-96 h-56 md:h-96 rounded-lg"></div>
        ) : (
          <img src="/images/Logo.png" alt="Logo" className="w-56 md:w-96 h-auto" />
        )}
      </div>
    </div>
  );
}
