"use client"

import { useActionState } from "react"
import { submitInquiry } from "@/app/actions/submit_inquiry"

const initialState = {
  success: false,
  errors: {} as Record<string, string[]>,
  message: "",
}

export default function InquiryForm() {
  const [state, formAction, pending] = useActionState(submitInquiry, initialState)

  // Success — elegant, no icon, no button
  if (state.success) {
    return (
      <div className="py-24 text-center">
        <p className="font-serif text-3xl md:text-4xl text-ink italic leading-relaxed max-w-xl mx-auto">
          Thank you. We'll be in touch shortly.
        </p>
        <p className="text-[10px] uppercase tracking-[0.3em] text-stone mt-12">
          AINO Studio
        </p>
      </div>
    )
  }

  return (
    <div>
      {/* Eyebrow */}
      <div className="flex items-center gap-4 mb-16">
        <span className="w-12 h-px bg-ink/40" />
        <p className="text-[10px] uppercase tracking-[0.3em] text-stone">
          Apply for trade access
        </p>
      </div>

      <form action={formAction} className="space-y-16">
        {/* Name + Email — two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          <MinimalField
            label="Name"
            name="name"
            error={state.errors?.name?.[0]}
          />
          <MinimalField
            label="Email"
            name="email"
            type="email"
            error={state.errors?.email?.[0]}
          />
        </div>

        {/* Message — full width */}
        <MinimalField
          label="A few words about your project"
          name="message"
          multiline
          error={state.errors?.message?.[0]}
        />

        {/* Submit — text link style, not a big button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={pending}
            className="group inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-ink hover:text-taupe transition disabled:opacity-40"
          >
            <span className="border-b border-ink/40 pb-1 group-hover:border-taupe transition">
              {pending ? "Sending…" : "Send inquiry"}
            </span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {state.message && (
          <p className="text-[11px] text-stone italic">{state.message}</p>
        )}
      </form>
    </div>
  )
}

function MinimalField({
  label,
  name,
  type = "text",
  multiline = false,
  error,
}: {
  label: string
  name: string
  type?: string
  multiline?: boolean
  error?: string
}) {
  const baseClass =
    "w-full bg-transparent border-b border-ink/20 focus:border-ink transition-colors py-3 text-ink font-light placeholder:text-stone/40 focus:outline-none"

  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.3em] text-stone mb-4">
        {label}
      </label>
      {multiline ? (
        <textarea
          name={name}
          rows={3}
          className={`${baseClass} resize-none`}
        />
      ) : (
        <input name={name} type={type} className={baseClass} />
      )}
      {error && (
        <p className="text-[11px] text-stone/70 mt-3 italic">{error}</p>
      )}
    </div>
  )
}