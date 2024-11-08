import React from 'react'
import Nav01 from '../../../public/components/Navbar/Nav01 '
import Foot01 from '../../../public/components/Footter/Foot01'


export default function page() {
  return (
    <div className="flex flex-col h-screen  bg-gradient-to-b from-pink-200 to-pink-300">

        <Nav01 />
      <main className="flex-grow">
        <p>test</p>
      </main>
    
        <Foot01 />
    </div>
  )
}
