"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import SubmitButton from "@/components/ui/submitButton"
import { signUp } from "@/lib/auth"
import React, { useActionState } from "react"

const SignupForm = () => {
  const [state, action] = useActionState(signUp, undefined)
  return (
    <form action={action}>
      <div className="flex flex-col gap-2">
        {state?.message && (
          <p className="text-sm text-red-500">{state.message}</p>
        )}
        <div>
          <Label htmlFor="name">Name</Label>
          <Input name="name" type="text" placeholder="John Doe" />
        </div>
        {state?.error?.name && (
          <p className="text-sm text-red-500">{state.error.name}</p>
        )}

        <div>
          <Label htmlFor="email">Email</Label>
          <Input name="email" type="email" placeholder="john@example.com" />
        </div>
        {state?.error?.email && (
          <p className="text-sm text-red-500">{state.error.email}</p>
        )}

        <div>
          <Label htmlFor="password">Password</Label>
          <Input name="password" type="password" />
        </div>
        {state?.error?.password && (
          <div className="text-sm text-red-500">
            <p>Password must:</p>
            <ul>
              {state.error.password.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}
        <SubmitButton>Sign Up</SubmitButton>
      </div>
    </form>
  )
}

export default SignupForm
