import UserInfoPage from "./components/UserInfo"

import type PageProps from "./types/user"

const User: PageProps = {
  name: 'Rakib',
  role: 'Aspiring Full Stack Developer',
  age: 21,
  location: 'Rajshahi, Bangladesh',
  about: 'I am learning modern web development and building real-world projects.',
  experience: 1,
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TypeScript'],
  isAvailable: true
}

const HomePage = () => {
  return (
    <main>
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-orange-500">Welcome to DevHub</h3>
        <h1 className="mt-2 text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl">Build. Learn. Create.</h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">Explore modern web technologies, build real-world projects, and grow your skills as a developer
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
            Explore Technologies
            </button>
            <button className="rounded-full border border-orange-500 px-6 py-3 font-semibold text-orange-500 transition hover:bg-orange-50">
              View Projects
            </button>
        </div>
        <UserInfoPage user={User}/>
      </section>
    </main>
  )
}

export default HomePage;

