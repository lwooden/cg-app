import { User } from "@clerk/nextjs/server"

interface CreateUserParams {
  clerkId: string
  name: string
  email: string
  picture: string
}

export async function createUser(userData: CreateUserParams) {
  console.log("Create User Data =>", userData)
  try {
    const response = await fetch("http://localhost:4000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })

    // const data = await response.json()
    console.log(response)

    return
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getProducts = async () => {
  try {
    const products = await fetch("http://localhost:4000/api/products")
    return products.json()
  } catch (error) {
    console.log("error =>", error)
    throw error
  }
}
