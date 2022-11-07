export function SpacingPage() {
  return (
    <div className="m-auto max-w-4xl p-5 md:p-6 lg:p-7">
      <div className="prose dark:prose-invert prose-headings:tracking-tight md:prose-xl">
        <h1>Spacing</h1>

        <p>
          Use the Sanity spacing scale for demos and templates. The Sanity spacing scale is a
          fibonacci scale starting with 0, 4px, and 8px.
        </p>

        <div className="sm:text-md my-4 border border-gray-200 text-sm dark:border-gray-900 md:text-lg">
          <div className="flex divide-x divide-gray-200 dark:divide-gray-900">
            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="py-1 text-center font-mono">0</div>
              <div className="py-1 text-center font-mono">0</div>
              <div className="py-1 text-center">none</div>
            </div>

            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="py-1 text-center font-mono">1</div>
              <div className="py-1 text-center font-mono">4px</div>
              <div className="py-1 text-center font-mono">xs</div>
            </div>

            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="py-1 text-center font-mono font-mono">2</div>
              <div className="py-1 text-center font-mono">8px</div>
              <div className="py-1 text-center font-mono">sm</div>
            </div>

            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="py-1 text-center font-mono">3</div>
              <div className="py-1 text-center font-mono">12px</div>
              <div className="py-1 text-center">md</div>
            </div>

            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="py-1 text-center font-mono">4</div>
              <div className="py-1 text-center font-mono">20px</div>
              <div className="py-1 text-center font-mono">lg</div>
            </div>

            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="py-1 text-center font-mono">5</div>
              <div className="py-1 text-center font-mono">32px</div>
              <div className="py-1 text-center font-mono">xl</div>
            </div>

            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="py-1 text-center font-mono">6</div>
              <div className="py-1 text-center font-mono">52px</div>
              <div className="py-1 text-center font-mono">2xl</div>
            </div>

            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="py-1 text-center font-mono">7</div>
              <div className="py-1 text-center font-mono">84px</div>
              <div className="py-1 text-center font-mono">3xl</div>
            </div>

            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="py-1 text-center font-mono">8</div>
              <div className="py-1 text-center font-mono">136px</div>
              <div className="py-1 text-center font-mono">4xl</div>
            </div>

            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="py-1 text-center font-mono">9</div>
              <div className="py-1 text-center font-mono">220px</div>
              <div className="py-1 text-center font-mono">5xl</div>
            </div>
          </div>
        </div>

        <h2 className="mt-5 mb-3 text-xl font-extrabold sm:text-2xl sm:text-3xl">Spacing rules</h2>

        <p className="my-3 text-lg font-medium">
          The minimum padding of a box containing text is Space 4 (20px).
        </p>

        <div className="my-4 border border-gray-200 p-4 dark:border-gray-900">
          <div className="bg-magenta-50 dark:bg-magenta-950 font-medium">A box with text</div>
        </div>

        <p className="my-3 text-lg font-medium">
          The minimum padding of a box containing graphics is Space 2 (8px).
        </p>

        <div className="my-4 border border-gray-200 p-2 dark:border-gray-900">
          <div className="bg-magenta-200 dark:bg-magenta-800 p-5 text-center font-medium text-white dark:text-black">
            (graphic)
          </div>
        </div>
      </div>
    </div>
  )
}
