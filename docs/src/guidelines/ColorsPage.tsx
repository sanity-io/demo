export function ColorsPage() {
  return (
    <div className="m-auto max-w-4xl p-5 md:p-6 lg:p-7">
      <div className="prose dark:prose-invert prose-p:leading-snug prose-headings:font-extrabold prose-headings:tracking-tight md:prose-lg">
        <h1>Colors</h1>

        <p>
          The color options are intentionally limited to a background color, a foreground color, and
          an optional brand color.
        </p>

        <div className="not-prose my-4 divide-y divide-gray-200 rounded border border-gray-200 dark:divide-gray-900 dark:border-gray-900">
          <div className="flex">
            <div className="flex-none p-2">
              <div className="h-[6rem] w-[10rem] border border-gray-200 bg-black dark:border-gray-900" />
            </div>
            <div className="flex-1 px-3 py-4">
              <div className="text-md font-extrabold">Sanity Black</div>
              <div className="text-sm">
                Used for foreground in light mode, and background in dark mode.
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="flex-none p-2">
              <div className="h-[6rem] w-[10rem] border border-gray-200 bg-white dark:border-gray-900" />
            </div>
            <div className="flex-1 px-3 py-4">
              <div className="text-md font-extrabold">Sanity White</div>
              <div className="text-sm">
                Used for background in light mode, and foreground in dark mode.
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="flex-none p-2">
              <div className="bg-magenta-500 h-[6rem] w-[10rem] border border-gray-200 dark:border-gray-900"></div>
            </div>
            <div className="flex-1 px-3 py-4">
              <div className="text-md font-extrabold">Optional brand color</div>
              <div className="text-sm">
                One color tint from the Sanity color palette, e.g. Magenta 500.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
