import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import Footer from "@/components/Footer"
import "./globals.css"
import PageLoader from "@/components/PageLoader"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "AINO Studio — Sculptural Ceramics",
  description:
    "Handmade sculptural vases and ceramic objects by academic sculptor Marija Josipović.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-ivory text-ink antialiased">
        <PageLoader />
        {children}
        <Footer />
      </body>
    </html>
  )
}