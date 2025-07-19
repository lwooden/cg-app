import Link from "next/link"

interface Church {
  _id: string
  name: string
  city: string
  state: string
  picture?: string
}

interface ChurchCardProps {
  church: Church
}

export default function ChurchCard({ church }: ChurchCardProps) {
  return (
    <Link href={`/churches/${church._id}`} className="block h-full">
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200 cursor-pointer h-full flex flex-col">
        {/* Church Image */}
        {church.picture && (
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 flex-shrink-0">
            <img
              src={church.picture}
              alt={church.name}
              className="w-full h-48 object-cover"
            />
          </div>
        )}

        {/* Church Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
              {church.name}
            </h3>
          </div>

          {/* Location */}
          <div className="mb-4 flex-grow">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              Location
            </span>
            <div className="mt-2">
              <p className="text-sm text-gray-900">
                {church.city}, {church.state}
              </p>
            </div>
          </div>

          {/* Action Area */}
          {/* <div className="flex-shrink-0">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                Church
              </span>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-md">
                View Details
              </span>
            </div>
          </div> */}
        </div>
      </div>
    </Link>
  )
}
