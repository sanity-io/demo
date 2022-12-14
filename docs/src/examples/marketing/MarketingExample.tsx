import {Link} from 'react-router-dom'

export function MarketingExample() {
  return (
    <>
      <div className="border-b border-gray-200 px-4 py-3 font-extrabold dark:border-gray-900">
        <Link to="/">● Demo</Link>
      </div>

      {/* Navbar */}
      <div className="m-auto max-w-6xl p-4">
        <div className="text-2xl font-extrabold tracking-tight">
          <span className="text-purple-500">●</span> Marketing
        </div>
      </div>

      {/* Hero */}
      <div className="h-[80vh] bg-purple-200 dark:bg-purple-800">
        <div className="m-auto h-full max-w-6xl px-4 py-8">
          <div className="flex h-full gap-6">
            <div className="prose dark:prose-invert prose-p:leading-snug prose-headings:font-extrabold prose-headings:tracking-tight md:prose-lg lg:prose-xl flex-1 py-6">
              <h1 className="tracking-tight">
                Modern card issuing that empowers innovators to change the world
              </h1>

              <p className="mt-4  leading-snug">
                Instantly issue & process card payments with our open API platform.
              </p>
            </div>

            <div className="flex-1 rounded-lg bg-black dark:bg-purple-700"></div>
          </div>
        </div>
      </div>

      {/* Block */}
      <div className="h-[80vh] border-b border-gray-200 dark:border-gray-900">
        <div className="m-auto h-full max-w-6xl px-4 py-8">
          <div className="flex h-full gap-6">
            <div className="flex-1 rounded-lg bg-black dark:bg-white" />

            <div className="prose dark:prose-invert prose-p:leading-snug prose-headings:font-extrabold prose-headings:tracking-tight md:prose-lg lg:prose-xl flex-1 py-6">
              <h2 className="leading-none">
                Modern card issuing that empowers innovators to change the world
              </h2>

              <p>Instantly issue & process card payments with our open API platform.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Block */}
      <div className="h-[80vh] border-b border-gray-200 dark:border-gray-900">
        <div className="m-auto h-full max-w-6xl px-4 py-8">
          <div className="flex h-full gap-6">
            <div className="prose dark:prose-invert prose-p:leading-snug prose-headings:font-extrabold prose-headings:tracking-tight md:prose-lg lg:prose-xl flex-1 py-6">
              <h2 className="leading-none">
                Modern card issuing that empowers innovators to change the world
              </h2>

              <p className="mt-4 text-xl  leading-snug">
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
