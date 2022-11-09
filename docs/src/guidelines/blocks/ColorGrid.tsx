export function ColorGrid() {
  return (
    <div className="my-4 divide-y divide-gray-200 rounded border border-gray-200 dark:divide-gray-900 dark:border-gray-900">
      <div className="flex">
        <div className="flex-none p-2">
          <div className="h-[10rem] w-[10rem] border border-gray-200 bg-black dark:border-gray-900" />
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
          <div className="h-[10rem] w-[10rem] border border-gray-200 bg-white dark:border-gray-900" />
        </div>
        <div className="flex-1 px-3 py-4">
          <div className="text-md font-extrabold">Sanity White</div>
          <div className="text-sm">
            Used for background in light mode, and foreground in dark mode.
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flex-none p-2 ">
          <div className="flex h-[10rem] w-[10rem] flex-col border border-gray-200 dark:border-gray-900">
            <div className="bg-magenta-100 flex-1" />
            <div className="bg-magenta-200 flex-1" />
            <div className="bg-magenta-300 flex-1" />
            <div className="bg-magenta-400 flex-1" />
            <div className="bg-magenta-500 flex-1" />
            <div className="bg-magenta-600 flex-1" />
            <div className="bg-magenta-700 flex-1" />
            <div className="bg-magenta-800 flex-1" />
            <div className="bg-magenta-900 flex-1" />
          </div>
        </div>
        <div className="flex-1 px-3 py-4">
          <div className="text-md font-extrabold">Brand tint (optional)</div>
          <div className="text-sm">
            One color from the Sanity color palette, e.g. Sanity Magenta.
          </div>
        </div>
      </div>
    </div>
  )
}
