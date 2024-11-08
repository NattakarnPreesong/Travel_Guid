import React from 'react'
import {
    HiHome,
    HiViewGridAdd,
    HiMap,
    HiChatAlt
} from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";

function Foot01() {
    return (
        <div>
            <footer className="flex justify-around bg-purple-800 p-3 text-white">
                <div className="flex flex-col items-center">
                    <i><HiHome /></i>
                    <span className="text-xs">หน้าหลัก</span>
                </div>
                <div className="flex flex-col items-center">
                    <i><HiViewGridAdd /></i>
                    <span className="text-xs">หมวดหมู่</span>
                </div>
                <div className="flex flex-col items-center">
                    <i><HiMap  /></i>
                    <span className="text-xs">แผนที่</span>
                </div>
                <div className="flex flex-col items-center">
                    <i><HiChatAlt  /></i>
                    <span className="text-xs">แชท</span>
                </div>
                <div className="flex flex-col items-center">
                    <i><AiFillSetting /></i>
                    <span className="text-xs">อื่นๆ</span>
                </div>
            </footer>
        </div>
    )
}

export default Foot01