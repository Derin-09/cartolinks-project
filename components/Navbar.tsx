"use client"
import { useState, useEffect } from "react"
import DarkModeToggle from "./DarkModeToggle"
import { Bell, House, Images, Video, WandSparkles, TestTubeDiagonal, Folder, Headset, ChevronDown, X, Menu } from 'lucide-react'
import NavbarLogo from "./ui/NavbarLogo"
import { motion, AnimatePresence } from 'framer-motion'
import Link from "next/link"

const mobileNavItems = [
    {
        text: 'Home',
        icon: House
    },
    {
        text: 'Generate Image',
        icon: Images
    },
    {
        text: 'Generate Video',
        icon: Video
    },
    {
        text: 'Experiment LLM',
        icon: TestTubeDiagonal
    },
    {
        text: 'Modify Images',
        icon: WandSparkles
    },
    {
        text: 'Explore Projects',
        icon: Folder
    },
    {
        text: 'Gallery',
        icon: Images
    },
    {
        text: 'Support',
        icon: Headset
    },
    {
        text: 'Notifications',
        icon: Bell
    },
]
const navIcons = [
    {
        text: 'Home',
        icon: House
    },
    {
        text: 'Generate Image',
        icon: Images
    },
    {
        text: 'Generate Video',
        icon: Video
    },
    {
        text: 'Experiment LLM',
        icon: TestTubeDiagonal
    },
    {
        text: 'Modify Images',
        icon: WandSparkles
    },
    {
        text: 'Explore Projects',
        icon: Folder
    },
]

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
                    </div>
                    <div>

                        <div className="flex gap-2 md:gap-4 text-black ">
                            <DarkModeToggle />

                            <button onClick={() => setIsClicked(!isClicked)} className="bell p-2 rounded-xl bg-gray-50 hover:scale-105 transition hover:cursor-pointer hover:shadow-lg" >
                                <Menu />
                            </button>
                            <div className="md:flex items-center hidden ">
                                <div className="bg-gray-600 w-8 h-8 rounded-full" />
                            </div>
                        </div>


                        <AnimatePresence >
                            {isClicked && (
                                <div className="fixed inset-0 z-50 w-full bg-black/50">
                                    <motion.div
                                        initial={{ x: "100%" }}
                                        animate={{ x: "20%" }}
                                        exit={{ x: "100%" }}
                                        transition={{ type: "tween", duration: 0.4 }}
                                        className=" bg-black"
                                    >
                                        <nav className=" flex flex-col md:hidden gap-[5%] p-6 pt-10 w-screen h-screen bg-white text-black">
                                            <div className="xButton" onClick={() => setIsClicked(false)}>
                                                <X />
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="bg-gray-600 w-8 h-8 rounded-full" />
                                                <div className="flex gap-2 items-center text-gray-500">
                                                    <p className="text-">benevolentrimblebat</p>
                                                    <ChevronDown className="hover:cursor-pointer md:mt-1 xl:mt-0" />
                                                </div>
                                            </div>
                                            <section className="mobileNavIcons flex flex-col gap-10 items-cent h-full text-black">
                                                {mobileNavItems.map((item, idx) => {
                                                    const Icon = item.icon
                                                    return (
                                                        <div onClick={() => setIsClicked(false)} key={idx}>
                                                            <Link href={''}>
                                                                <div className="flex  gap-3 items-center ">
                                                                    <Icon />
                                                                    <p className="text-[16px] ">{item.text}</p>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    )
                                                })}
                                            </section>
                                        </nav>
                                    </motion.div>
                                </div>
                            )}
                        </AnimatePresence>
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
                    <div className="menu xl:p-2 xl:space-x-5 p-1 rounded-2xl bg-gray-50 flex items-center">
                        {navIcons.map((item, idx) => {
                            const Icon = item.icon
                            return (
                                <div key={idx} className="menu-icons group relative py-1 px-3 xl:py-2 hover:rounded-xl hover:cursor-pointer text-black hover:bg-white">
                                    <Icon />
                                    <p
                                        className="text-center whitespace-nowrap hidden group-hover:block absolute top-full left-1/2 -translate-x-1/2 pointer-events-none text-white bg-black px-2 py-1 rounded-md transition-all duration-200 scale-95 group-hover:scale-100"
                                    >  {item.text} </p>
                                </div>
                            )
                        })}
                    </div>

                    <div className="flex  gap-4 text-black ">
                        <button className=" gallery flex gap-2 items-center text-center hover:cursor-pointer hover:shadow-lg px-4 py-1 rounded-xl bg-gray-50 hover:scale-105  transition group relative xl:static">
                            <Images size={18} className="" />
                            <p className="text-center hidden group-hover:block absolute bottom-full left-1/2 xl:-translate-x-0 md:-translate-x-1/2 
               xl:static xl:block pointer-events-none md:hover:text-white">
                                Gallery
                            </p>

                        </button>
                        <button className="support flex gap-2 items-center text-center  hover:cursor-pointer hover:shadow-lg  px-4 py-1 rounded-xl bg-gray-50    hover:scale-105 transition group relative xl:static ">
                            <Headset size={18} className="" />
                            <p className="text-center xl:block hidden group-hover:block md:absolute bottom-full left-1/2  xl:-translate-x-0 md:-translate-x-1/2 xl:static pointer-events-none md:hover:text-white"> Support </p>
                        </button>
                        <DarkModeToggle />
                        <button className="bell p-2 rounded-xl bg-gray-50 hover:scale-105 transition hover:cursor-pointer hover:shadow-lg" ><Bell size={18} /></button>
                        <div className="bg-gray-600 w-8 h-8 rounded-full" />
                    </div>
                </nav>)}
        </>
    )
}
