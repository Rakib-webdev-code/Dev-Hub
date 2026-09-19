import type { Technology } from "../../types/technology"

export async function generateStaticParams() {
  const res = await fetch("http://localhost:5000/technologies")

  const technologies: Technology[] = await res.json()

  return technologies.map((technology) => ({
    technologiesId: technology.id.toString(),
  }))
}

const TechnologyDetailsPage = async ({
  params,
}: {
  params: Promise<{ technologiesId: string }>
}) => {
  const { technologiesId } = await params

  const res = await fetch(
    `http://localhost:5000/technologies/${technologiesId}`
  )

  if (!res.ok) {
    throw new Error("Failed to fetch technology")
  }

  const technology: Technology = await res.json()

  return (
    <main className="px-4 py-16">
      <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 shadow-md">
        <div className="flex items-center justify-between">
          <span className="text-5xl">{technology.icon}</span>

          <span className="rounded-full bg-orange-50 px-3 py-1 text-sm font-semibold text-orange-600">
            {technology.difficulty}
          </span>
        </div>

        <h1 className="mt-6 text-3xl font-bold text-gray-900">
          {technology.name}
        </h1>

        <p className="mt-2 font-semibold text-orange-500">
          {technology.category}
        </p>

        <p className="mt-4 leading-7 text-gray-600">
          {technology.description}
        </p>

        <div className="mt-6 border-t border-gray-100 pt-5">
          <p className="text-sm font-medium text-gray-500">
            Rating: {technology.rating}/5
          </p>
        </div>
      </div>
    </main>
  )
}

export default TechnologyDetailsPage