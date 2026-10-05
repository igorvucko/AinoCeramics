import Header from "@/components/Header"
import CustomInquiryForm from "@/components/CustomInquiry"

export const metadata = {
  title: "Custom Commissions — AINO Studio",
  description:
    "Commission a one-of-a-kind ceramic piece. Custom vases and sculptural objects made to fit your space, your palette, your story.",
}

export default function CustomPage() {
  return (
    <>
      <Header solid />
      <main className="bg-ivory">
        {/* Hero — tekst na ivory pozadini, bez slike */}
        <section className="max-w-6xl mx-auto px-5 md:px-6 pt-32 md:pt-44 pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-3">
              <div className="flex items-center gap-4 md:pt-3">
                <span className="w-8 md:w-10 h-px bg-ink/40" />
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-stone">
                  Custom Commissions
                </p>
              </div>
            </div>

            <div className="md:col-span-9">
              <h1 className="text-ink text-3xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-8">
                Objects made<br />
                for your space.
              </h1>

              <p className="text-stone text-base md:text-lg leading-relaxed font-light max-w-xl">
                Every now and then, a space asks for something that doesn't exist yet.
                We work with private clients, collectors, and designers on one-of-a-kind
                pieces — vases, sculptural objects, and small sets, shaped to your
                dimensions, palette, and story.
              </p>
            </div>
          </div>
        </section>

        {/* Process — tri stupca */}
        <section className="border-t border-ink/10">
          <div className="max-w-6xl mx-auto px-5 md:px-6 py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
              <Pillar
                index="01"
                title="Conversation"
                text="You share the idea — the space, the mood, the dimensions. We respond with thoughts, references, and a possible direction."
              />
              <Pillar
                index="02"
                title="Proposal"
                text="We send a simple proposal: shape, glaze, size, timeline, and price. Once approved, the piece enters the studio schedule."
              />
              <Pillar
                index="03"
                title="Making"
                text="Every piece is shaped on the wheel, fired in a small kiln, and finished by hand. You receive photos at each stage."
              />
            </div>
          </div>
        </section>

        {/* What we make */}
        <section className="border-t border-ink/10">
          <div className="max-w-6xl mx-auto px-5 md:px-6 py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
              <div className="md:col-span-4">
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-stone mb-4">
                  What we make
                </p>
                <h2 className="font-serif text-2xl md:text-3xl text-ink leading-tight">
                  A small list of<br />
                  what's possible.
                </h2>
              </div>

              <div className="md:col-span-8">
                <ul className="space-y-6">
                  <ListItem
                    title="Sculptural vases"
                    text="Tall, wide, narrow, uneven — shaped to hold a specific branch or simply to stand on its own."
                  />
                  <ListItem
                    title="Sets & pairs"
                    text="Two or three pieces that share a language. For mantels, dining tables, entryways."
                  />
                  <ListItem
                    title="Sculptural objects"
                    text="Non-functional forms for shelves, niches, and quiet corners of a room."
                  />
                  <ListItem
                    title="Small editions"
                    text="For designers and hospitality projects — a series of related pieces, each slightly unique."
                  />
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="border-t border-ink/10">
          <div className="max-w-3xl mx-auto px-5 md:px-6 py-20 md:py-32">
            <CustomInquiryForm />
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
      <h3 className="font-serif text-xl md:text-2xl text-ink mb-4">{title}</h3>
      <p className="text-stone text-sm leading-relaxed font-light">{text}</p>
    </div>
  )
}

function ListItem({ title, text }: { title: string; text: string }) {
  return (
    <li className="border-t border-ink/10 pt-6">
      <h3 className="font-serif text-xl md:text-2xl text-ink mb-2">{title}</h3>
      <p className="text-stone text-sm leading-relaxed font-light max-w-lg">
        {text}
      </p>
    </li>
  )
}