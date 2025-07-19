"use server"

export const getChurches = async () => {
  try {
    const churches = await fetch("http://localhost:4000/api/churches")
    return churches.json()
  } catch (error) {
    console.log("error =>", error)
    throw error
  }
}
