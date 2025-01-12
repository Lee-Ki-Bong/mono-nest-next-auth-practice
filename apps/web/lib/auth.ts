"use server"

import { redirect } from "next/navigation"
import { BACKEND_URL } from "./constants"
import { FormState, SignupFormSchema } from "./type"

export async function signUp(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  // 1. Validate the form data
  const validationFields = SignupFormSchema.safeParse({
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string
  })

  if (!validationFields.success) {
    return {
      error: validationFields.error.flatten().fieldErrors
    }
  }

  // 2. Send the data to the server
  const response = await fetch(`${BACKEND_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(validationFields.data)
  })

  if (!response.ok) {
    redirect("/auth/signin")
  } else {
    return {
      message:
        response.status === 409
          ? "Account created successfully."
          : response.statusText
    }
  }
}
