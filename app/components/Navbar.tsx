import Image from "next/image"
import DarkModeToggle from "./DarkModeToggle"
import { Bell, House, ImageMinus, Video, WandSparkles, Folder, ImageUp, Headset, ChevronDown } from 'lucide-react'

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 dark:boder-b bg-white dark:bg-ray-950 dark:border-gray-800">
            <div className="flex items-center gap-7 font-bold text-xl">
                <span className="bg-black dark:bg-white text-white dark:text-black rounded-lg px-2 py-1">K</span>
                <div className="flex gap-2 items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600" />
                    <p>benevolenttrimblebat</p>
                    <ChevronDown className="hover:cursor-pointer"/>
                </div>
            </div>
            <div className="p-2 rounded-xl bg-gray-200 dark:bg-gray-800 flex items-center">
                <div className=" p-2 px-3 hover:rounded-xl hover:cursor-pointer hover:dark:bg-gray-700 hover:bg-white">
                    <House />
                </div>
                <div className=" p-2 px-3 hover:rounded-xl hover:cursor-pointer hover:dark:bg-gray-700 hover:bg-white">
                    <Bell />
                </div>
                <div className=" p-2 px-3 hover:rounded-xl hover:cursor-pointer hover:dark:bg-gray-700 hover:bg-white">
                    <ImageMinus />
                </div>
                <div className=" p-2 px-3 hover:rounded-xl hover:cursor-pointer hover:dark:bg-gray-700 hover:bg-white">
                    <Video />
                </div>
                <div className=" p-2 px-3 hover:rounded-xl hover:cursor-pointer hover:dark:bg-gray-700 hover:bg-white">
                    <WandSparkles />
                </div>
                <div className=" p-2 px-3 hover:rounded-xl hover:cursor-pointer hover:dark:bg-gray-700 hover:bg-white">
                    <Folder />
                </div>
            </div>

            <div className="flex items-center gap-4 ">
                <div className="flex items-center text-center">
                    <button className="flex gap-2 items-center text-center hover:underline px-4 py-1 rounded-xl bg-gray-200 dark:bg-gray-800 hover:scale-105 transition">
                    <ImageUp size={18}/><p className="text-center"> Gallery </p></button>
                </div>
                <button className="flex gap-2 items-center text-center hover:underline px-4 py-1 rounded-xl bg-gray-200 dark:bg-gray-800 hover:scale-105 transition">
                    <Headset size={18}/><p className="text-center"> Support </p></button>
                <DarkModeToggle />
                <button className="p-2 rounded-xl bg-gray-200 dark:bg-gray-800 hover:scale-105 transition" ><Bell size={18} /></button>
                <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600" />
            </div>
        </nav>
    )
}
