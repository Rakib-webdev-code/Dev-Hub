import TechnologyCard from "../components/TechnologyCard"
import { Technology } from "../types/technology"

const getTechnologies = async () : Promise<Technology[]> =>{

        const res = await fetch('http://localhost:5000/technologies',{next:{revalidate: 10}})
        if (!res.ok) {
            throw new Error("Failed to fetch technologies")
        }
        return res.json()

}



const TechnologiesPage = async () => {
  
  
    const technologies  = await getTechnologies()
  return (
    <main className="px-4 py-16">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Technologies
        </h1>

        <p className="mt-4 text-gray-600">
          Explore modern web development technologies.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {
                technologies .map((technology) => (
                  <TechnologyCard key={technology.id} technology={technology} />
                ))
            }
      </div>
    </main>
  )
}

export default TechnologiesPage