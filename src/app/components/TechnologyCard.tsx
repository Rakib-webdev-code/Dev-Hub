import type { Technology } from "../types/technology"

interface TechnologyCardProps {
  technology: Technology
}

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <span className="text-4xl">{technology.icon}</span>

        <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
          {technology.difficulty}
        </span>
      </div>

      <h2 className="mt-5 text-xl font-bold text-gray-900">
        {technology.name}
      </h2>

      <p className="mt-1 text-sm font-medium text-orange-500">
        {technology.category}
      </p>

      <p className="mt-3 text-sm leading-6 text-gray-600">
        {technology.description}
      </p>

      <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
        <span className="text-sm font-medium text-gray-500">
          Rating: {technology.rating}/5
        </span>

        <button className="rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-500">
          Explore
        </button>
      </div>
    </div>
  )
}

export default TechnologyCard