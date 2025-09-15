"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import { useEffect, useState } from "react"
import Logo from "@/public/images/kreaBlack.png"
import LogoWhite from "@/public/images/kreaWhiteNavbar.png"

export default function NavbarLogo() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Image
      src={theme === "dark" ? LogoWhite : Logo}
      width={20}
      height={20}
      alt="logo"
      className="logo"
    />
  )
}

