import React from 'react'

function Nav01 () {
  return (
    <div>
      <header className="flex items-center p- bg-purple-900">
        <img src="/images/Logo.png" alt="Logo" className="w-10 h-10 mr-2" width="100px" height="auto" />
        <input
          type="text"
          placeholder="ค้นหาสถานที่"
          className="flex-grow p-2 rounded-full text-gray-700 bg-gray-100 focus:outline-none"
        />
      </header>
    </div>
  )
}

export default Nav01 