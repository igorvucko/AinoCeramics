import Header from "@/components/Header"
import InquiryForm from "@/components/InquiryForm"

export const metadata = {
  title: "For Interior Designers — AINO Studio",
  description:
    "Trade program for interior designers and architects. Trade pricing, priority production, and support for custom ceramic commissions.",
}

export default function ForDesignersPage() {
  return (
    <>
      <Header />
      <main className="bg-ivory">
        {/* Hero — fiksna visina, bez min-h na mainu */}
        <section className="relative w-full h-screen overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="/fordesigners.png"
              alt="Sculptural ceramic objects on a wooden table"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ivory/70 via-ivory/20 to-transparent" />
          </div>

          {/* Text */}
          <div className="relative h-full flex items-center pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="max-w-xl">
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-10 h-px bg-ink/50" />
                  <p className="text-[11px] uppercase tracking-[0.3em] text-ink/80">
                    Trade Program
                  </p>
                </div>
                <h1 className="text-ink text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-8">
                  For interior designers<br />
                  & architects.
                </h1>
                <p className="text-ink/80 text-base md:text-lg leading-relaxed font-light max-w-md">
                  AINO works with a small number of interior designers and
                  architects on residential and hospitality projects. Members
                  receive trade pricing, priority production slots, and direct
                  access to the studio for custom commissions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Three pillars */}
        <section className="border-t border-ink/10">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              <Pillar
                index="01"
                title="Apply"
                text="Share a few details about your studio and current projects."
              />
              <Pillar
                index="02"
                title="Review"
                text="We respond within two business days with access details."
              />
              <Pillar
                index="03"
                title="Collaborate"
                text="Trade pricing, priority production, and direct support."
              />
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="border-t border-ink/10">
          <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
            <InquiryForm />
          </div>
        </section>
      </main>
    </>
  )
}

function Pillar({
  index,
  title,
  text,
}: {
  index: string
  title: string
  text: string
}) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.3em] text-stone mb-4">
        {index}
      </p>
      <h3 className="font-serif text-2xl text-ink mb-4">{title}</h3>
      <p className="text-stone text-sm leading-relaxed font-light">{text}</p>
    </div>
  )
}