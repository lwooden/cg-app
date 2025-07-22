import React from "react"
import { SignInButton, SignUpButton, SignOutButton } from "@clerk/nextjs"

// To make this work I need create this page where the primary component is a server component
// I need to create component within this page that is a client component that will handle the auth process

const page = () => {
  return (
    <div>
      <h1>Welcome to Christian Giving</h1>
      <SignInButton forceRedirectUrl="/" />
      <SignUpButton>
        <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
          Sign Up
        </button>
      </SignUpButton>
      <SignOutButton />
    </div>
  )
}

export default page
