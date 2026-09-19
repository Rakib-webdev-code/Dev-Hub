const Loading = () => {
  return (
    <main className="px-4 py-16">
      <div className="mx-auto max-w-7xl text-center">
        <div className="mx-auto h-10 w-64 animate-pulse rounded-lg bg-gray-200" />

        <div className="mx-auto mt-4 h-5 w-80 animate-pulse rounded bg-gray-100" />
      </div>

      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="h-10 w-10 animate-pulse rounded-lg bg-gray-200" />
              <div className="h-6 w-20 animate-pulse rounded-full bg-gray-100" />
            </div>

            <div className="mt-5 h-6 w-32 animate-pulse rounded bg-gray-200" />

            <div className="mt-3 h-4 w-24 animate-pulse rounded bg-gray-100" />

            <div className="mt-4 space-y-2">
              <div className="h-3 w-full animate-pulse rounded bg-gray-100" />
              <div className="h-3 w-5/6 animate-pulse rounded bg-gray-100" />
              <div className="h-3 w-4/6 animate-pulse rounded bg-gray-100" />
            </div>

            <div className="mt-6 h-8 w-full animate-pulse rounded bg-gray-100" />
          </div>
        ))}
      </div>
    </main>
  )
}

export default Loading