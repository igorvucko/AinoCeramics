"use server"

import { Resend } from "resend"
import { z } from "zod"

const resend = new Resend(process.env.RESEND_API_KEY)

const schema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email."),
  message: z.string().min(10, "Please share a few more words."),
})

export async function submitInquiry(prevState: any, formData: FormData) {
  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  }

  const validated = schema.safeParse(rawData)

  if (!validated.success) {
    return {
      success: false,
      errors: validated.error.flatten().fieldErrors,
      message: "",
    }
  }

  try {
    await resend.emails.send({
      from: "AINO Studio <onboarding@resend.dev>",
      to: "igorhefner@gmail.com",
      replyTo: validated.data.email,
      subject: `Trade Inquiry — ${validated.data.name}`,
      text: `
Name: ${validated.data.name}
Email: ${validated.data.email}

Message:
${validated.data.message}
      `,
    })

    return { success: true, errors: {}, message: "" }
  } catch (error) {
    console.error("Failed to send inquiry:", error)
    return {
      success: false,
      errors: {},
      message: "Something went wrong. Please try again.",
    }
  }
}