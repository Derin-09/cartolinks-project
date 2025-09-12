import Image from "next/image"
import DarkModeToggle from "./DarkModeToggle"
import { Bell, House, ImageMinus, Video, WandSparkles, Folder, ImageUp, Headset, ChevronDown } from 'lucide-react'

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 dark:border-b bg-white dark:bg-gray-950 dark:border-gray-800">
            <div className="flex items-center gap-7 font-bold text-xl">
                <span className=" text-black dark:text-white font-extrabold text-3xl px-2 py-1">K</span>
                <div className="flex gap-2 items-center text-gray-500">
                    <div className="w-8 h-8 rounded-full  bg-gray-300 dark:bg-gray-600" />
                    <p>benevolentrimblebat</p>
                    <ChevronDown className="hover:cursor-pointer"/>
                </div>
            </div>
            <div className="p-2 rounded-xl bg-gray-200 dark:bg-gray-800 flex items-center">
                <div className=" p-2 px-3 hover:rounded-xl hover:cursor-pointer hover:dark:bg-gray-700 hover:shadow-lg hover:bg-white">
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
                    <button className="flex gap-2 items-center text-center hover:bg-white hover:cursor-pointer hover:shadow-lg px-4 py-1 rounded-xl bg-gray-200 dark:bg-gray-800 hover:scale-105 transition">
                    <ImageUp size={18}/>
                    <p className="text-center"> Gallery </p>
                    </button>
                <button className="flex gap-2 items-center text-center hover:bg-white hover:cursor-pointer hover:shadow-lg  px-4 py-1 rounded-xl bg-gray-200 dark:bg-gray-800 hover:scale-105 transition">
                    <Headset size={18}/>
                    <p className="text-center"> Support </p>
                    </button>
                <DarkModeToggle />
                <button className="p-2 rounded-xl bg-gray-200 dark:bg-gray-800 hover:scale-105 transition" ><Bell size={18} /></button>
                <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600" />
            </div>
        </nav>
    )
}
