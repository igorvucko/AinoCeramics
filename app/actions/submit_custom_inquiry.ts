"use server"

import { Resend } from "resend"
import { customInquirySchema } from "@/lib/schemas/custom-inquiry-schema"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitCustomInquiry(prevState: any, formData: FormData) {
  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    projectType: formData.get("projectType") as string,
    timeline: formData.get("timeline") as string,
    message: formData.get("message") as string,
  }

  const validated = customInquirySchema.safeParse(rawData)

  if (!validated.success) {
    return {
      success: false,
      errors: validated.error.flatten().fieldErrors,
      message: "",
    }
  }

  try {
    await resend.emails.send({
      from: "AINO Studio <inquiries@ainoceramics.com>",
      to: "marija@ainoceramics.com",
      replyTo: validated.data.email,
      subject: `Custom Commission — ${validated.data.name}`,
      text: `
Name: ${validated.data.name}
Email: ${validated.data.email}
Project Type: ${validated.data.projectType}
Timeline: ${validated.data.timeline}

Message:
${validated.data.message}
      `,
    })

    return { success: true, errors: {}, message: "" }
  } catch (error) {
    console.error("Failed to send custom inquiry:", error)
    return {
      success: false,
      errors: {},
      message: "Something went wrong. Please try again.",
    }
  }
}