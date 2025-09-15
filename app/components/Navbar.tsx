"use client"
import { useState, useEffect } from "react"
import DarkModeToggle from "./DarkModeToggle"
import { Bell, House, ImageMinus, Video, WandSparkles, Folder, ImageUp, Headset, ChevronDown, X, Menu } from 'lucide-react'
import NavbarLogo from "./ui/NavbarLogo"

const icons = [House, ImageMinus, Video, WandSparkles, Folder]

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        if (width < 1024) {
            setMobileOpen(true)
        } else {
            setMobileOpen(false)
        }
    }, [width])
    return (
        <>

            {mobileOpen ? (

                <nav className="flex items-center justify-between px-6 py-4 bg-white ">
                    <div className="flex items-center gap-2 md:gap-4 font-bold text-xl">
                        <NavbarLogo />
                        <div className="flex md:gap-2">
                            <div className="bg-gray-600 w-8 h-8 rounded-full" />
                            <div className="flex gap-2 items-center text-gray-500">
                                <p className="text-xl hidden md:block">benevolentrimblebat</p>
                                <ChevronDown className="hover:cursor-pointer md:mt-1 xl:mt-0" />
                            </div>
                        </div>
                    </div>
                    <div>

                        <div className="flex gap-2 md:gap-4 text-black ">
                            <button className=" gallery flex gap-2 items-center text-center hover:cursor-pointer hover:shadow-lg px-4 py-1 rounded-xl bg-gray-200 hover:scale-105  transition group relative xl:static">
                                <ImageUp size={18} className="" />
                                <p className="text-center hidden group-hover:block absolute bottom-full left-1/2 xl:-translate-x-0 md:-translate-x-1/2 
               xl:static xl:block pointer-events-none md:hover:text-white">
                                    Gallery
                                </p>

                            </button>
                            <button className="support flex gap-2 items-center text-center  hover:cursor-pointer hover:shadow-lg  px-4 py-1 rounded-xl bg-gray-200    hover:scale-105 transition group relative xl:static ">
                                <Headset size={18} className="" />
                                <p className="text-center xl:block hidden group-hover:block md:absolute bottom-full left-1/2  xl:-translate-x-0 md:-translate-x-1/2 xl:static pointer-events-none md:hover:text-white"> Support </p>
                            </button>
                            <DarkModeToggle />
                            <button className="bell p-2 rounded-xl bg-gray-200 hover:scale-105 transition hover:cursor-pointer hover:shadow-lg" ><Bell size={18} /></button>
                            
                        <button onClick={() => setIsClicked(!isClicked)} className="bell p-2 rounded-xl bg-gray-200 hover:scale-105 transition hover:cursor-pointer hover:shadow-lg" >
                            {isClicked ?
                                <X /> : <Menu />
                            }
                        </button>
                        <div className="md:flex items-center hidden "> 
                            <div className="bg-gray-600 w-8 h-8 rounded-full" />
                            </div>
                        </div>



                        {isClicked && (
                            <div className="menu absolute md:right-16 right-2 top-15 flex flex-col gap-2 bg-gray-200 md:p-1 rounded-xl items-center">
                                {icons.map((item, idx) => {
                                    const Icon = item
                                    return (
                                        <div key={idx} className="menu-icons py-1 px-2 md:px-3 xl:py-2 hover:rounded-xl hover:cursor-pointer text-black hover:bg-white">
                                            <Icon />
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                        
                    </div>

                </nav>) : (





                <nav className="flex items-center justify-between px-6 py-4 bg-white ">
                    <div className="flex items-center gap-7 font-bold text-xl">
                        <NavbarLogo />
                        <div className="flex gap-2">
                            <div className="bg-gray-600 w-8 h-8 rounded-full" />
                            <div className="flex gap-2 items-center text-gray-500">
                                <p className="md:text-lg xl:text-xl">benevolentrimblebat</p>
                                <ChevronDown className="hover:cursor-pointer md:mt-1 xl:mt-0" />
                            </div>
                        </div>
                    </div>
                    <div className="menu xl:p-2 xl:space-x-5 p-1 rounded-xl bg-gray-200 flex items-center">
                        {icons.map((item, idx) => {
                            const Icon = item
                            return (
                                <div key={idx} className="menu-icons py-1 px-3 xl:py-2 hover:rounded-xl hover:cursor-pointer text-black hover:bg-white">
                                    <Icon />
                                </div>
                            )
                        })}
                    </div>

                    <div className="flex  gap-4 text-black ">
                        <button className=" gallery flex gap-2 items-center text-center hover:cursor-pointer hover:shadow-lg px-4 py-1 rounded-xl bg-gray-200 hover:scale-105  transition group relative xl:static">
                            <ImageUp size={18} className="" />
                            <p className="text-center hidden group-hover:block absolute bottom-full left-1/2 xl:-translate-x-0 md:-translate-x-1/2 
               xl:static xl:block pointer-events-none md:hover:text-white">
                                Gallery
                            </p>

                        </button>
                        <button className="support flex gap-2 items-center text-center  hover:cursor-pointer hover:shadow-lg  px-4 py-1 rounded-xl bg-gray-200    hover:scale-105 transition group relative xl:static ">
                            <Headset size={18} className="" />
                            <p className="text-center xl:block hidden group-hover:block md:absolute bottom-full left-1/2  xl:-translate-x-0 md:-translate-x-1/2 xl:static pointer-events-none md:hover:text-white"> Support </p>
                        </button>
                        <DarkModeToggle />
                        <button className="bell p-2 rounded-xl bg-gray-200 hover:scale-105 transition hover:cursor-pointer hover:shadow-lg" ><Bell size={18} /></button>
                        <div className="bg-gray-600 w-8 h-8 rounded-full" />
                    </div>
                </nav>)}
        </>
    )
}
