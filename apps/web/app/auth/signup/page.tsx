import Link from "next/link"
import React from "react"

const SignupPage = () => {
  return (
    <div className="flex w-96 flex-col items-center justify-center rounded-lg bg-white p-8 shadow-lg">
      <h1 className="mb-4 text-center text-2xl font-bold">Sign Up Page</h1>
      {/* Add your form here */}
      <div className="flex justify-between text-sm">
        <p>Alread have an account?</p>
        <Link className="underline" href="/auth/signin">
          Sign in
        </Link>
      </div>
    </div>
  )
}

export default SignupPage
