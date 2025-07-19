import React from "react"

const page = () => {
  return (
    <div>
      <button
        className="bg-black text-white p-2 rounded-md"
        // onClick={() => authClient.signIn.social({ provider: "google" })}
      >
        Sign in with Google
      </button>
      <br />
      <button
        className="bg-black text-white p-2 rounded-md"
        // onClick={() => authClient.signOut()}
      >
        Sign Out
      </button>
    </div>
  )
}

export default page
