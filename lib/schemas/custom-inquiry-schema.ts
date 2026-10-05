import { z } from "zod"

export const customInquirySchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email."),
  projectType: z.enum(["Private", "Professional"]),
  timeline: z.enum(["No rush", "2-4 months", "1-2 months", "Urgent"]),
  message: z
    .string()
    .min(20, "A few more words would help us understand your project.")
    .max(3000, "Please keep it under 3000 characters."),
})

export type CustomInquiryFormData = z.infer<typeof customInquirySchema>