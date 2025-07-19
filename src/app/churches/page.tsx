import React from "react"
import ChurchCard from "../components/ChurchCard"
import { getChurches } from "../actions/churches"

// Mock data - replace with actual API call
const mockChurches = [
  {
    _id: "1",
    name: "Grace Community Church",
    city: "Austin",
    state: "TX",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
  },
  {
    _id: "2",
    name: "First Baptist Church",
    city: "Dallas",
    state: "TX",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
  },
  {
    _id: "3",
    name: "St. Mary's Catholic Church",
    city: "Houston",
    state: "TX",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
  },
  {
    _id: "4",
    name: "Community Church of Christ",
    city: "San Antonio",
    state: "TX",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
  },
]

const ChurchesPage = async () => {
  const churches = await getChurches()
  console.log(churches)
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Churches</h1>
          <p className="mt-2 text-gray-600">Find churches in your community</p>
        </div>
      </div>

      {/* Churches Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {churches.map((church: any) => (
            <ChurchCard key={church._id} church={church} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChurchesPage
