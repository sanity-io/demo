import {space} from '@sanity/demo'

export function SpacingScale() {
  return (
    <div className="sm:text-md md:text-md my-4 rounded border border-gray-200 text-sm dark:border-gray-900">
      <div className="flex divide-x divide-gray-200 dark:divide-gray-900">
        {space.map((s, idx) => (
          <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900" key={idx}>
            <div className="py-1 text-center font-mono">{idx}</div>
            <div className="py-1 text-center font-mono">{s}px</div>
          </div>
        ))}
      </div>
    </div>
  )
}
