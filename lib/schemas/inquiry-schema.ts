import { z } from "zod"

export const inquirySchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email."),
  company: z.string().min(2, "Please enter your studio or company name."),
  website: z.string().url("Please enter a valid URL.").optional().or(z.literal("")),
  message: z.string().min(20, "Please share a few more details about your project."),
})

export type InquiryFormData = z.infer<typeof inquirySchema>