"use client"

import React, { PropsWithChildren } from "react"
import { Button } from "./button"
import { useFormStatus } from "react-dom"

const SubmitButton = ({ children }: PropsWithChildren) => {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" aria-disabled={pending} className="mt-2 w-full">
      {pending ? "submitting..." : children}
    </Button>
  )
}

export default SubmitButton
