"use server"

export const getProducts = async () => {
  try {
    const products = await fetch("http://localhost:4000/api/products")
    return products.json()
  } catch (error) {
    console.log("error =>", error)
    throw error
  }
}
