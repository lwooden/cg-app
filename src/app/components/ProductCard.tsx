import { formatDistanceToNow } from "date-fns"
import Link from "next/link"

interface Product {
  _id: string
  name: string
  description: string
  status: "available" | "pending" | "given"
  category: string
  createdAt: string | Date
  image?: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "given":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const formatDate = (date: string | Date) => {
    try {
      const dateObj = typeof date === "string" ? new Date(date) : date
      return formatDistanceToNow(dateObj, { addSuffix: true })
    } catch {
      return "Unknown date"
    }
  }

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <Link href={`/products/${product._id}`} className="block h-full">
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200 cursor-pointer h-full flex flex-col">
        {/* Product Image */}
        {product.image && (
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
          </div>
        )}

        {/* Product Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Header */}
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 flex-1 mr-2">
              {product.name}
            </h3>
            <span
              className={`px-2 py-1 text-xs font-medium rounded-full flex-shrink-0 ${getStatusColor(
                product.status
              )}`}
            >
              {capitalize(product.status)}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
            {product.description}
          </p>

          {/* Category */}
          <div className="mb-4 flex-shrink-0">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Category
            </span>
            <div className="mt-2">
              <span className="inline-block bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-md">
                {product.category}
              </span>
            </div>
          </div>

          {/* Posted Date */}
          <div className="flex-shrink-0">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Posted
            </span>
            <p className="text-sm text-gray-900 mt-1">
              {formatDate(product.createdAt)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
