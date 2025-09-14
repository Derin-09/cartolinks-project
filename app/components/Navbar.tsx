"use client"
import { useState, useEffect } from "react"
// import Image from "next/image"
// import DarkModeToggle from "./DarkModeToggle"
// import {
//   Bell,
//   House,
//   ImageMinus,
//   Video,
//   WandSparkles,
//   Folder,
//   ImageUp,
//   Headset,
//   ChevronDown,
//   Menu,
//   X,
// } from "lucide-react"

// const icons = [House, ImageMinus, Video, WandSparkles, Folder]

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const [width, setWidth] = useState(0)

//   // Track window size
//   useEffect(() => {
//     function handleResize() {
//       setWidth(window.innerWidth)
//     }

//     handleResize()
//     window.addEventListener("resize", handleResize)
//     return () => window.removeEventListener("resize", handleResize)
//   }, [])

//   // Open if <768px, close if ≥768px
//   useEffect(() => {
//     if (width < 768) {
//       setMobileOpen(true)
//     } else {
//       setMobileOpen(false)
//     }
//   }, [width])

//   return (
//     <nav className="flex items-center justify-between px-6 py-4 bg-white relative">
//       {/* left logo + profile */}
//       <div className="flex items-center gap-7 font-bold text-xl">
//         <span className="logo text-black font-extrabold text-3xl px-2 py-1">K</span>
//         <div className="flex gap-2">
//           <div className="bg-gray-600 w-8 h-8 rounded-full" />
//           <div className="flex gap-2 items-center text-gray-500">
//             <p className="md:text-lg xl:text-xl">benevolentrimblebat</p>
//             <ChevronDown className="hover:cursor-pointer md:mt-1 xl:mt-0" />
//           </div>
//         </div>
//       </div>

//       {/* desktop icons menu */}
//       <div className="menu hidden md:flex xl:p-2 xl:space-x-5 p-1 rounded-xl bg-gray-200 items-center">
//         {icons.map((Icon, idx) => (
//           <div
//             key={idx}
//             className="menu-icons py-1 px-3 xl:py-2 hover:rounded-xl hover:cursor-pointer text-black hover:bg-white"
//           >
//             <Icon />
//           </div>
//         ))}
//       </div>

//       {/* right side buttons */}
//       <div className="flex gap-4 text-black items-center">
//         <button className="gallery flex gap-2 items-center text-center hover:cursor-pointer hover:shadow-lg px-4 py-1 rounded-xl bg-gray-200 hover:scale-105 transition group relative xl:static">
//           <ImageUp size={18} />
//           <p className="text-center hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 xl:static xl:block pointer-events-none md:hover:text-white">
//             Gallery
//           </p>
//         </button>

//         <button className="support flex gap-2 items-center text-center hover:cursor-pointer hover:shadow-lg px-4 py-1 rounded-xl bg-gray-200 hover:scale-105 transition group relative xl:static">
//           <Headset size={18} />
//           <p className="text-center hidden group-hover:block md:absolute bottom-full left-1/2 -translate-x-1/2 xl:static xl:block pointer-events-none md:hover:text-white">
//             Support
//           </p>
//         </button>

//         <DarkModeToggle />

//         <button className="bell p-2 rounded-xl bg-gray-200 hover:scale-105 transition hover:cursor-pointer hover:shadow-lg">
//           <Bell size={18} />
//         </button>

//         <div className="bg-gray-600 w-8 h-8 rounded-full" />

//         {/* hamburger (mobile only) */}
//         <button
//           className="md:hidden p-2 rounded-md bg-gray-200 hover:scale-105 transition"
//           onClick={() => setMobileOpen(!mobileOpen)}
//         >
//           {mobileOpen ? <X size={20} /> : <Menu size={20} />}
//         </button>
//       </div>

//       {/* mobile dropdown menu */}
//       {mobileOpen && (
//         <div className="absolute top-full right-6 mt-2 bg-gray-100 rounded-xl shadow-lg p-3 flex flex-col gap-3 md:hidden z-50">
//           {icons.map((Icon, idx) => (
//             <button
//               key={idx}
//               className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200"
//             >
//               <Icon size={18} />
//               <span>{Icon.name}</span>
//             </button>
//           ))}
//         </div>
//       )}
//     </nav>
//   )
// }









import Image from "next/image"
import DarkModeToggle from "./DarkModeToggle"
import { Bell, House, ImageMinus, Video, WandSparkles, Folder, ImageUp, Headset, ChevronDown, X, Menu } from 'lucide-react'

const icons = [House, ImageMinus, Video, WandSparkles, Folder]

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const [width, setWidth] = useState(0)

    // Track window size
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    // Open if <768px, close if ≥768px
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
                    <div className="flex items-center gap-2 font-bold text-xl">
                        <span className="logo text-black  font-extrabold text-2xl px-2 py-1">K</span>
                        <div className="flex gap-2">
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
                                {/* <p className="text-center xl:block hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 xl:static"> Gallery </p> */}
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
                        <span className="logo text-black  font-extrabold text-3xl px-2 py-1">K</span>
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
                            {/* <p className="text-center xl:block hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 xl:static"> Gallery </p> */}
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
