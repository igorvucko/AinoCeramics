"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Header({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Vidljiv stil ako je scrollano ILI ako je solid
  const isVisible = scrolled || solid

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible
          ? "backdrop-blur-md bg-ivory/60 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className={`font-serif text-2xl tracking-wide transition-colors ${
            isVisible ? "text-ink" : "text-ivory"
          }`}
        >
          AINO
        </Link>

        <nav
          className={`hidden md:flex items-center gap-10 text-[11px] tracking-[0.2em] uppercase transition-colors ${
            isVisible ? "text-ink" : "text-ivory"
          }`}
        >
          <Link href="/works" className="hover:opacity-60 transition">
            Works
          </Link>
          <Link href="/studio" className="hover:opacity-60 transition">
            Studio
          </Link>
          <Link href="/custom" className="hover:opacity-60 transition">
            Custom
          </Link>
          <Link href="/contact" className="hover:opacity-60 transition">
            Contact
          </Link>
          <Link href="/for-designers" className="hover:opacity-60 transition">
            For Designers
          </Link>
        </nav>

        <div
          className={`flex items-center gap-6 text-[11px] tracking-[0.2em] uppercase transition-colors ${
            isVisible ? "text-ink" : "text-ivory"
          }`}
        >
          <button className="hover:opacity-60 transition">Cart (0)</button>
        </div>
      </div>
    </header>
  )
}
