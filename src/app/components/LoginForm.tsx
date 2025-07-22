"use client"
import React from "react"
import { authClient } from "../lib/auth-client"
import Link from "next/link"

const signInWithGoogle = async () => {
  const response = await authClient.signIn.social({
    provider: "google",
    callbackURL: "/",
  })
  console.log("Response: ", response)
}

const LoginForm = () => {
  return (
    <div>
      <button
        onClick={signInWithGoogle}
        className="bg-black text-white p-2 rounded-md"
      >
        Login with Google
      </button>
    </div>
  )
}

export default LoginForm
