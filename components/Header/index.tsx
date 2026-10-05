"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Header({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Zaključaj scroll kad je mobile menu otvoren
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const isVisible = scrolled || solid

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isVisible
            ? "backdrop-blur-md bg-ivory/60 py-3 md:py-4"
            : "bg-transparent py-5 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-6 flex items-center justify-between">
          <Link
            href="/"
            className={`font-serif text-xl md:text-2xl tracking-wide transition-colors ${
              isVisible ? "text-ink" : "text-ivory"
            }`}
          >
            AINO
          </Link>

          {/* Desktop nav */}
          <nav
            className={`hidden md:flex items-center gap-10 text-[11px] tracking-[0.2em] uppercase transition-colors ${
              isVisible ? "text-ink" : "text-ivory"
            }`}
          >
            <Link href="/works" className="hover:opacity-60 transition">Works</Link>
            <Link href="/studio" className="hover:opacity-60 transition">Studio</Link>
            <Link href="/custom" className="hover:opacity-60 transition">Custom</Link>
            <Link href="/contact" className="hover:opacity-60 transition">Contact</Link>
            <Link href="/for-designers" className="hover:opacity-60 transition">For Designers</Link>
          </nav>

          <div
            className={`flex items-center gap-5 text-[11px] tracking-[0.2em] uppercase transition-colors ${
              isVisible ? "text-ink" : "text-ivory"
            }`}
          >
            <button className="hover:opacity-60 transition">Cart (0)</button>

            {/* Hamburger — samo mobilni */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden flex flex-col gap-1.5 w-6"
              aria-label="Open menu"
            >
              <span className="block w-full h-px bg-current" />
              <span className="block w-full h-px bg-current" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — full screen */}
      <div
        className={`md:hidden fixed inset-0 z-[60] bg-ivory transition-opacity duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-5">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="font-serif text-xl text-ink tracking-wide"
            >
              AINO
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-ink text-2xl leading-none"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 flex flex-col items-center justify-center gap-8 px-6">
            <Link href="/works" onClick={() => setMenuOpen(false)} className="font-serif text-4xl text-ink">Works</Link>
            <Link href="/studio" onClick={() => setMenuOpen(false)} className="font-serif text-4xl text-ink">Studio</Link>
            <Link href="/custom" onClick={() => setMenuOpen(false)} className="font-serif text-4xl text-ink">Custom</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="font-serif text-4xl text-ink">Contact</Link>
            <Link href="/for-designers" onClick={() => setMenuOpen(false)} className="font-serif text-4xl text-ink">For Designers</Link>
          </nav>

          {/* Bottom */}
          <div className="px-5 py-6 text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] text-stone">
              AINO Studio © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}