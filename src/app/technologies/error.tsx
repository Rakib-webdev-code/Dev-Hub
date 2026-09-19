"use client"

const Error = ({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-red-100 bg-white p-8 text-center shadow-md">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-2xl">
          ⚠️
        </div>

        <h1 className="mt-5 text-2xl font-bold text-gray-900">
          Something went wrong!
        </h1>

        <p className="mt-3 text-sm leading-6 text-gray-600">
          We couldn't load the technologies right now. Please try again.
        </p>

        <button
          onClick={() => reset()}
          className="mt-6 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
        >
          Try Again
        </button>
      </div>
    </main>
  )
}

export default Error