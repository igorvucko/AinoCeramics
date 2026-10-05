"use client"

import { useActionState } from "react"
import { submitCustomInquiry } from "@/app/actions/submit_custom_inquiry"

const initialState = {
  success: false,
  errors: {} as Record<string, string[]>,
  message: "",
}

export default function CustomInquiryForm() {
  const [state, formAction, pending] = useActionState(submitCustomInquiry, initialState)

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
      <div className="flex items-center gap-4 mb-16">
        <span className="w-12 h-px bg-ink/40" />
        <p className="text-[10px] uppercase tracking-[0.3em] text-stone">
          Tell us about your project
        </p>
      </div>

      <form action={formAction} className="space-y-14">
        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
          <Field label="Name" name="name" error={state.errors?.name?.[0]} />
          <Field
            label="Email"
            name="email"
            type="email"
            error={state.errors?.email?.[0]}
          />
        </div>

        {/* Project Type + Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
          <SelectField
            label="Project Type"
            name="projectType"
            options={[
              { value: "Private", label: "Private commission" },
              { value: "Professional", label: "Professional / Trade" },
            ]}
            error={state.errors?.projectType?.[0]}
          />
          <SelectField
            label="Timeline"
            name="timeline"
            options={[
              { value: "No rush", label: "No rush — whenever it's ready" },
              { value: "2-4 months", label: "2–4 months" },
              { value: "1-2 months", label: "1–2 months" },
              { value: "Urgent", label: "Urgent (less than a month)" },
            ]}
            error={state.errors?.timeline?.[0]}
          />
        </div>

        {/* Message */}
        <Field
          label="About your project"
          name="message"
          multiline
          placeholder="Tell us about the piece you have in mind — dimensions, colors, the space it will live in…"
          error={state.errors?.message?.[0]}
        />

        {/* Submit */}
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

function Field({
  label,
  name,
  type = "text",
  multiline = false,
  placeholder,
  error,
}: {
  label: string
  name: string
  type?: string
  multiline?: boolean
  placeholder?: string
  error?: string
}) {
  const baseClass =
    "w-full bg-transparent border-b border-ink/20 focus:border-ink transition-colors py-3 text-ink font-light placeholder:text-stone/40 placeholder:italic focus:outline-none"

  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.3em] text-stone mb-4">
        {label}
      </label>
      {multiline ? (
        <textarea
          name={name}
          rows={4}
          placeholder={placeholder}
          className={`${baseClass} resize-none`}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className={baseClass}
        />
      )}
      {error && (
        <p className="text-[11px] text-stone/70 mt-3 italic">{error}</p>
      )}
    </div>
  )
}

function SelectField({
  label,
  name,
  options,
  error,
}: {
  label: string
  name: string
  options: { value: string; label: string }[]
  error?: string
}) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.3em] text-stone mb-4">
        {label}
      </label>
      <select
        name={name}
        defaultValue=""
        className="w-full bg-transparent border-b border-ink/20 focus:border-ink transition-colors py-3 text-ink font-light focus:outline-none appearance-none cursor-pointer"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-[11px] text-stone/70 mt-3 italic">{error}</p>
      )}
    </div>
  )
}