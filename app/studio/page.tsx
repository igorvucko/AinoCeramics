import Header from "@/components/Header"
import Link from "next/link"

export const metadata = {
  title: "Studio — AINO",
  description:
    "Marija Josipović, academic sculptor and ceramic artist based in Osijek, Croatia.",
}

export default function StudioPage() {
  return (
    <>
      <Header solid />
      <main className="bg-ivory">
        {/* ==================== HERO ==================== */}
        <section className="pt-32 md:pt-40 pb-20 md:pb-28">
          <div className="max-w-350 mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              {/* Left — Image with hover zoom */}
              <div className="lg:col-span-6 relative">
                <div className="group relative aspect-4/5 lg:aspect-5/6 overflow-hidden">
                  <img
                    src="/studiohero.png"
                    alt="Sculptural ceramic bowl with dried botanicals"
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                  {/* Corner label */}
                  <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-ivory/90">
                      The Studio · 2025
                    </p>
                  </div>
                </div>
              </div>

              {/* Right — Text */}
              <div className="lg:col-span-5 lg:col-start-8">
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-10 h-px bg-ink/40" />
                  <p className="text-[10px] uppercase tracking-[0.3em] text-stone">
                    The Studio
                  </p>
                </div>
                <h1 className="text-ink font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] mb-8">
                  Marija<br />
                  Josipović
                </h1>
                <p className="text-stone text-base md:text-lg leading-relaxed font-light max-w-md">
                  Visual artist and sculptor based in Osijek, Croatia. Working
                  primarily with clay, she develops forms through an intuitive
                  dialogue between making and experimentation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== BIO ==================== */}
        <section className="border-t border-ink/10">
          <div className="max-w-350 mx-auto px-6 py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Left — Facts */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-10">
                  <span className="w-6 h-px bg-ink/40" />
                  <p className="text-[10px] uppercase tracking-[0.3em] text-stone">
                    01 / Biography
                  </p>
                </div>
                <dl className="space-y-8">
                  <FactRow label="Born" value="1997, Vinkovci, Croatia" />
                  <FactRow label="Based in" value="Osijek, Croatia" />
                  <FactRow
                    label="Education"
                    value="School of Applied Arts and Design, Osijek (2017) · Academy of Arts and Culture, Osijek — MA in Visual Arts, Sculpture (2023)"
                  />
                  <FactRow
                    label="Practice"
                    value="Sculpture, ceramics, installation"
                  />
                </dl>
              </div>

              {/* Middle — Bio text */}
              <div className="lg:col-span-6 lg:col-start-4">
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink font-light leading-[1.15] mb-10">
                  Rooted in material,<br />
                  open to change.
                </h2>
                <div className="space-y-6 text-stone text-base md:text-lg leading-relaxed font-light max-w-2xl">
                  <p>
                    Marija Josipović graduated from the School of Applied Arts
                    and Design in Osijek in 2017, specializing in Sculpture
                    Design, and earned her Master's degree in Visual Arts,
                    Sculpture Department, from the Academy of Arts and Culture
                    in Osijek in 2023.
                  </p>
                  <p>
                    Her practice explores the relationship between material,
                    form, and space. Through processes of repetition,
                    transformation, and modular construction, she investigates
                    how objects can shift between functional and sculptural
                    roles — creating systems that remain open to change and
                    reinterpretation.
                  </p>
                </div>
              </div>

              {/* Right — Image with overlay text + hover zoom */}
              <div className="lg:col-span-3 lg:col-start-10">
                <div className="group relative aspect-3/4 overflow-hidden">
                  <img
                    src="/tradition.png"
                    alt="Close-up of ceramic texture"
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-ink/60 via-ink/20 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-ivory/90 leading-relaxed">
                      Tradition<br />
                      meets<br />
                      experiment.
                    </p>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-ivory/70">
                      Detail · Stoneware
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== MILESTONES ==================== */}
        <section className="border-t border-ink/10">
          <div className="max-w-350 mx-auto px-6 py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Left — Title (sticky on desktop) */}
              <div className="lg:col-span-3 lg:sticky lg:top-32 lg:self-start">
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-6 h-px bg-ink/40" />
                  <p className="text-[10px] uppercase tracking-[0.3em] text-stone">
                    02 / Education & Exhibitions
                  </p>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink font-light leading-[1.1] mb-8">
                  Selected<br />
                  milestones
                </h2>
                <p className="text-stone text-sm leading-relaxed font-light max-w-xs">
                  A selection of exhibitions, awards, and academic achievements
                  that shaped my practice and journey.
                </p>
              </div>

              {/* Middle — Milestones list */}
              <div className="lg:col-span-6 lg:col-start-5">
                <ul className="divide-y divide-ink/10">
                  <MilestoneRow year="2025" text="15th Croatian Sculpture Triennial, Museum of Contemporary Art, Zagreb" />
                  <MilestoneRow year="2025" text="Finalist, 16th Two Keramik Memorial, Croatian Triennial of Medal Art and Small-Scale Sculpture" />
                  <MilestoneRow year="2024" text="Pre/Formations, curated by The Rose Collective, Pogon Jedinstvo, Zagreb" />
                  <MilestoneRow year="2023" text="Objects of Trauma, Gallery Knifer, Osijek" />
                  <MilestoneRow year="2022" text="Tenk Servis, Gallery Knifer, Osijek" />
                  <MilestoneRow year="2021" text="Movie Outside, Academy of Arts and Culture, Osijek" />
                  <MilestoneRow year="2021" text="The Course and Character of the River, Gallery Knifer, Osijek" />
                  <MilestoneRow year="2021" text="One to Us, Gallery of Fine Arts, Vinkovci" />
                  <MilestoneRow year="2020" text="5th Film Round Festival, Student Films Category, Cinema Urania, Osijek" />
                  <MilestoneRow year="2020" text="5th Amtsalon, Gallery Siva and AKC Medika, Zagreb" />
                </ul>
              </div>

              {/* Right — Image with vertical text + hover zoom */}
              <div className="lg:col-span-3 lg:col-start-11">
                <div className="group relative aspect-4/5 overflow-hidden">
                  <img
                    src="/mileston.png"
                    alt="Sculptural ceramic vase"
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 space-y-1">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-stone">Ceramics</p>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-stone">Sculpture</p>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-stone">Installation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== CTA ==================== */}
        <section className="border-t border-ink/10">
          <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] text-stone mb-8">
              Commissions & Collaborations
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink font-light leading-tight mb-10 max-w-2xl mx-auto">
              For custom pieces, project enquiries, and collaborations.
            </h2>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-ink hover:text-taupe transition"
            >
              <span className="border-b border-ink/40 pb-1 group-hover:border-taupe transition">
                Get in touch
              </span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

/* ==================== SUB-COMPONENTE ==================== */

function FactRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-[0.25em] text-stone/70 mb-2">
        {label}
      </dt>
      <dd className="text-ink text-sm font-light leading-relaxed">{value}</dd>
    </div>
  )
}

function MilestoneRow({ year, text }: { year: string; text: string }) {
  return (
    <li className="grid grid-cols-12 gap-6 py-4 group">
      <span className="col-span-2 text-[11px] text-stone font-light group-hover:text-taupe transition">
        {year}
      </span>
      <span className="col-span-10 text-ink text-sm font-light leading-relaxed">
        {text}
      </span>
    </li>
  )
}