import Link from "next/link"

interface SelectedWorksProps {
  products: any[]
}

export default function SelectedWorks({ products }: SelectedWorksProps) {
  return (
    <section className="bg-ivory">
      <div className="max-w-7xl mx-auto px-5 md:px-6 py-16 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Left: Title & description */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <p className="text-[11px] uppercase tracking-[0.3em] text-stone">
                Selected Works
              </p>
              <span className="w-16 h-px bg-ink/30" />
            </div>

            <h2 className="text-ink text-3xl md:text-5xl font-light leading-[1.1] mb-6 md:mb-8">
              Recent pieces from<br />
              the studio
            </h2>

            <p className="text-stone text-base leading-relaxed font-light mb-8 md:mb-10 max-w-sm">
              A collection of unique ceramic objects, each with its own
              character, texture and story.
            </p>

            <Link
              href="/works"
              className="group inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-ink hover:text-taupe transition"
            >
              <span className="border-b border-ink/40 pb-1 group-hover:border-taupe transition">
                View all works
              </span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Right: 3 product images */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-6">
              {products.slice(0, 3).map(({ node }: any, index: number) => (
                <Link
                  key={node.id}
                  href={`/products/${node.handle}`}
                  className="group block"
                >
                  <div className="aspect-3/4 overflow-hidden bg-beige">
                    {node.images.edges[0]?.node.url && (
                      <img
                        src={node.images.edges[0].node.url}
                        alt={node.images.edges[0].node.altText || node.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    )}
                  </div>
                  <div className="mt-5">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-ink mb-1">
                      {index === 0 && "Vase 01"}
                      {index === 1 && "Vase 02"}
                      {index === 2 && "Bowl 01"}
                    </p>
                    <p className="text-[11px] text-stone">
                      Stoneware / 2025
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom: arrows */}
            <div className="flex justify-end mt-8 md:mt-10 gap-3">
              <button className="w-10 h-10 border border-ink/20 flex items-center justify-center hover:bg-ink hover:text-ivory transition text-sm">
                ←
              </button>
              <button className="w-10 h-10 border border-ink/20 flex items-center justify-center hover:bg-ink hover:text-ivory transition text-sm">
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Crafted slowly separator */}
      <div className="border-t border-ink/10">
        <div className="max-w-7xl mx-auto px-5 md:px-6 py-12 md:py-20">
          <div className="flex items-center justify-center gap-3 md:gap-6">
            <span className="w-8 md:w-16 h-px bg-ink/20" />
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-stone text-center whitespace-nowrap">
              Crafted slowly. Made to last.
            </p>
            <span className="w-8 md:w-16 h-px bg-ink/20" />
          </div>
        </div>
      </div>
    </section>
  )
}