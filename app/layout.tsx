import { ThemeProvider } from "next-themes"
import "./globals.css"
import { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Krea",
  description: "Your AI-powered creative platform",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gay-950 text-gray-900 dark:text-gray-100 relative select-none">
        <ThemeProvider attribute="class" defaultTheme="enableSystem" enableSystem>
          <div className="fixed inset-0 z-50 h-fit">
            <Navbar />
          </div>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
