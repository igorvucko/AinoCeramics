import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-175 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hero2.png"
          alt="Sculptural ceramic bowl in artist studio"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        {/* Base gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-ink/5 via-ink/25 to-ink/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="ml-auto max-w-xl">
            {/* Frosted glass panel */}
            <div
              className="p-10 md:p-12 -m-10 md:-m-12 rounded-sm"
              style={{
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                backgroundColor: "rgba(43, 38, 32, 0.25)",
                border: "1px solid rgba(250, 247, 242, 0.1)",
              }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-4 mb-6">
                <span className="w-10 h-px bg-ivory/80" />
                <p className="text-[11px] uppercase tracking-[0.3em] text-ivory font-medium">
                  Handmade in Croatia
                </p>
              </div>

              {/* Heading */}
              <h1 className="text-ivory font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
                Sculptural ceramics,<br />
                shaped by hand.
              </h1>

              {/* Description */}
              <p className="text-ivory font-sans text-sm md:text-base leading-relaxed mb-10 max-w-md">
                One-of-a-kind vases and ceramic objects by academic sculptor
                Marija Josipović. Each piece is shaped on the wheel and fired
                in a small studio in Croatia — no two are alike.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-6">
                <Link
                  href="/works"
                  className="inline-block bg-ivory text-ink px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase hover:bg-taupe hover:text-ivory transition font-sans font-medium"
                >
                  Explore the collection
                </Link>
                <Link
                  href="/studio"
                  className="group inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-ivory hover:text-taupe transition font-sans font-medium"
                >
                  <span className="border-b border-ivory/70 pb-1 group-hover:border-taupe transition">
                    Discover the studio
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}