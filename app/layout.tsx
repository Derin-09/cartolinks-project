import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import "./globals.css"
import { ThemeProvider } from "next-themes"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gay-950 text-gray-900 dark:text-gray-100 relative">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div className="fixed inset-0 z-50">
          <Navbar/>
          </div>
          {children}
          <div className="fixed bottom-0 left-0">
          <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
