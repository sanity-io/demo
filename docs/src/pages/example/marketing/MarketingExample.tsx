import {Link} from 'react-router-dom'

export function MarketingExample() {
  return (
    <>
      <div className="bg-black p-3 text-white dark:bg-white dark:text-black">
        <Link to="/">&larr; Design guidelines</Link>
      </div>

      {/* Navbar */}
      <div className="m-auto max-w-6xl p-4">
        <div className="text-2xl font-extrabold tracking-tight">Marketing.</div>
      </div>

      {/* Hero */}
      <div className="h-[80vh] bg-blue-200 dark:bg-blue-800">
        <div className="m-auto h-full max-w-6xl px-4 py-8">
          <div className="flex h-full gap-6">
            <div className="prose prose-headings:tracking-tight md:prose-lg lg:prose-xl flex-1 py-6">
              <h1 className="tracking-tight">
                Modern card issuing that empowers innovators to change the world
              </h1>

              <p className="mt-4 font-medium leading-snug">
                Instantly issue & process card payments with our open API platform.
              </p>
            </div>

            <div className="flex-1 rounded-lg bg-black dark:bg-blue-700"></div>
          </div>
        </div>
      </div>

      {/* Block */}
      <div className="h-[80vh] border-b">
        <div className="m-auto h-full max-w-6xl px-4 py-8">
          <div className="flex h-full gap-6">
            <div className="flex-1 rounded-lg bg-black dark:bg-white" />

            <div className="prose prose-headings:tracking-tight md:prose-lg lg:prose-xl flex-1 py-6">
              <h2 className="leading-none">
                Modern card issuing that empowers innovators to change the world
              </h2>

              <p>Instantly issue & process card payments with our open API platform.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Block */}
      <div className="h-[80vh] border-b">
        <div className="m-auto h-full max-w-6xl px-4 py-8">
          <div className="flex h-full gap-6">
            <div className="prose prose-headings:tracking-tight md:prose-lg lg:prose-xl flex-1 py-6">
              <h2 className="leading-none">
                Modern card issuing that empowers innovators to change the world
              </h2>

              <p className="mt-4 text-xl font-medium leading-snug">
                Instantly issue & process card payments with our open API platform.
              </p>
            </div>

            <div className="flex-1 rounded-lg bg-black dark:bg-white" />
          </div>
        </div>
      </div>
    </>
  )
}
