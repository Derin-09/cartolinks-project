"use client"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="darkmode p-2 rounded-xl bg-gray-200 text-black hover:scale-105 transition"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}








// "use client"
// import { useTheme } from "next-themes"
// import { Moon, Sun } from "lucide-react"
// import { useEffect, useState } from "react"

// export default function DarkModeToggle() {
//   const { theme, setTheme } = useTheme()
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//   setMounted(true);
//   console.log("Mounted, theme:", theme, "localStorage:", localStorage.getItem("theme"));
//   if (localStorage.getItem("theme") === "dark") {
//     setTheme("light"); // Reset to light if stuck
//   }
// }, []);

// //   useEffect(() => {
// //   console.log("Current theme:", theme);
// //   console.log("localStorage theme:", localStorage.getItem("theme"));
// // }, [theme]);

// //   useEffect(() => setMounted(true), [])
// //   if (!mounted) return null

  

//   return (
//     <button
//       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//       className="p-2 rounded-xl bg-gray-200 dark:bg-gray-800 hover:scale-105 transition"
//     >
//       {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
//       {/* <Sun size={18} /> */}
//     </button>
//   )
// }




// "use client";
// import { useEffect, useState } from "react";

// export default function ThemeToggle() {
//   const [dark, setDark] = useState(false);

//   useEffect(() => {
//     if (dark) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [dark]);

//   return (
//     <button
//       onClick={() => setDark(!dark)}
//       className="p-2 rounded bg-gray-200 dark:bg-gray-700"
//     >
//       {dark ? "🌙" : "☀️"}
//     </button>
//   );
// }
