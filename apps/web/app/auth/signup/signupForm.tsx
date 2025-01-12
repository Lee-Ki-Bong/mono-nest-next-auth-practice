import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import SubmitButton from "@/components/ui/submitButton"
import React from "react"

const SignupForm = () => {
  return (
    <form action="">
      <div className="flex flex-col gap-2">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" placeholder="John Doe" />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="john@example.com" />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <SubmitButton>Sign Up</SubmitButton>
      </div>
    </form>
  )
}

export default SignupForm
