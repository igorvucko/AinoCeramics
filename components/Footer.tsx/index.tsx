import Link from "next/link"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-ink text-ivory overflow-hidden">
      {/* Optional background texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img
          src="/footer-texture.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/90 to-ink/70" />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Top — Newsletter */}
        <div className="border-b border-ivory/10">
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-ivory/50 mb-6">
                  Newsletter
                </p>
                <h3 className="font-serif text-2xl md:text-3xl text-ivory leading-tight mb-6 max-w-sm">
                  Occasional notes from the studio.
                </h3>
                <p className="text-ivory/60 text-sm font-light max-w-sm">
                  New pieces, process, and studio updates. No noise.
                </p>
              </div>

              <div className="md:col-span-7 flex items-end">
                <form className="w-full flex flex-col md:flex-row gap-6 md:items-end">
                  <div className="flex-1">
                    <label className="block text-[10px] uppercase tracking-[0.3em] text-ivory/50 mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full bg-transparent border-b border-ivory/20 focus:border-ivory transition-colors py-3 text-ivory font-light placeholder:text-ivory/30 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-ivory hover:text-taupe transition whitespace-nowrap"
                  >
                    <span className="border-b border-ivory/40 pb-1 group-hover:border-taupe transition">
                      Subscribe
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Middle — Links */}
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-5">
              <Link
                href="/"
                className="font-serif text-3xl text-ivory tracking-wide"
              >
                AINO
              </Link>
              <p className="text-ivory/50 text-sm font-light mt-4 max-w-xs">
                Sculptural ceramics shaped by hand in Croatia. Each piece is
                fired in a small studio kiln — no two are alike.
              </p>
            </div>

            {/* Shop */}
            <div className="md:col-span-2">
              <p className="text-[10px] uppercase tracking-[0.3em] text-ivory/40 mb-6">
                Shop
              </p>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/works"
                    className="text-sm text-ivory/70 hover:text-ivory transition font-light"
                  >
                    All works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/works?filter=vases"
                    className="text-sm text-ivory/70 hover:text-ivory transition font-light"
                  >
                    Vases
                  </Link>
                </li>
                <li>
                  <Link
                    href="/works?filter=objects"
                    className="text-sm text-ivory/70 hover:text-ivory transition font-light"
                  >
                    Objects
                  </Link>
                </li>
              </ul>
            </div>

            {/* Studio */}
            <div className="md:col-span-2">
              <p className="text-[10px] uppercase tracking-[0.3em] text-ivory/40 mb-6">
                Studio
              </p>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/studio"
                    className="text-sm text-ivory/70 hover:text-ivory transition font-light"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/studio#process"
                    className="text-sm text-ivory/70 hover:text-ivory transition font-light"
                  >
                    Process
                  </Link>
                </li>
                <li>
                  <Link
                    href="/journal"
                    className="text-sm text-ivory/70 hover:text-ivory transition font-light"
                  >
                    Journal
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div className="md:col-span-3">
              <p className="text-[10px] uppercase tracking-[0.3em] text-ivory/40 mb-6">
                Connect
              </p>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/for-designers"
                    className="text-sm text-ivory/70 hover:text-ivory transition font-light"
                  >
                    For Designers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-ivory/70 hover:text-ivory transition font-light"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ivory/70 hover:text-ivory transition font-light"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom — Legal */}
        <div className="border-t border-ivory/10">
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-ivory/40 font-light">
              © {year} AINO Studio. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-[11px] text-ivory/40 hover:text-ivory/70 transition font-light"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-[11px] text-ivory/40 hover:text-ivory/70 transition font-light"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}