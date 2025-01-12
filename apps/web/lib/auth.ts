"use server"

import { FormState, SignupFormSchema } from "./type"

export async function signUp(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  // 1. Validate the form data
  const validationFieldss = SignupFormSchema.safeParse({
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string
  })

  if (!validationFieldss.success) {
    return {
      error: validationFieldss.error.flatten().fieldErrors
    }
  }

  // 2. Send the data to the server

  return state
}
