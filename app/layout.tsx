import { useEffect } from "react";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import "./globals.css"
import { ThemeProvider } from "next-themes"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // useEffect(() => {
  //   // Force light theme on client mount to override SSR
  //   document.documentElement.classList.remove("dark");
  //   document.documentElement.style.colorScheme = "light";
  // }, []);
//   useEffect(() => {
//   console.log("RootLayout hydrated, html class:", document.documentElement.className);
// }, []);
  return (
    <html lang="en" style={{ colorScheme: "light" }} >
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 relative">
        <ThemeProvider 
        attribute="class" 
        defaultTheme="light" 
        enableSystem={false}>
          <div className="fixed inset-0 z-50 h-fit">
          <Navbar/>
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
