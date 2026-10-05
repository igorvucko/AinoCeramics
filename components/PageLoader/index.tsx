"use client"

import { useLayoutEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function PageLoader() {
  const pathname = usePathname()
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(true)

  useLayoutEffect(() => {
    // Reset — loader je odmah vidljiv
    setLoading(true)
    setVisible(true)

    // Kratka pauza, pa počinje fade-out
    const fadeTimer = setTimeout(() => {
      setLoading(false)
    }, 600)

    // Nakon fade-outa, potpuno ukloni iz DOM-a
    const removeTimer = setTimeout(() => {
      setVisible(false)
    }, 1100)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [pathname])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[100] bg-ivory flex items-center justify-center transition-opacity duration-500 ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center gap-8">
        <div className="animate-spin-slow text-ink">
          <svg
            width="60"
            height="72"
            viewBox="0 0 100 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35 10 C35 5, 65 5, 65 10 L68 25 C75 40, 80 55, 75 75 C70 95, 60 105, 50 110 C40 105, 30 95, 25 75 C20 55, 25 40, 32 25 Z"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M40 10 L40 5 M60 10 L60 5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        <p className="text-[10px] uppercase tracking-[0.4em] text-stone">
          AINO Studio
        </p>
      </div>
    </div>
  )
}