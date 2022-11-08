export function TypographyPage() {
  return (
    <div className="m-auto max-w-4xl p-5 md:p-6 lg:p-7">
      <div className="prose dark:prose-invert prose-p:leading-snug prose-headings:font-extrabold prose-headings:tracking-tight md:prose-lg">
        <h1>Typography</h1>

        <div className="not-prose my-5">
          <div className="border border-gray-200 dark:border-gray-800">
            <div className="p-7 text-center text-4xl font-extrabold tracking-tight">
              Inter Extra Bold
            </div>
          </div>

          <p className="mt-1 text-sm">Headlines are set in extra bold with tight letter spacing.</p>
        </div>

        <div className="not-prose my-5">
          <div className="border border-gray-200 dark:border-gray-800">
            <div className="p-7 text-center text-4xl">Inter Medium</div>
          </div>

          <p className="mt-1 text-sm">Copy is set in medium sans serif.</p>
        </div>

        <div className="not-prose my-5">
          <div className="border border-gray-200 dark:border-gray-800">
            <div className="p-7 text-center font-serif text-4xl">PT Serif</div>
          </div>

          <p className="mt-1 text-sm">Long text is set in serif.</p>
        </div>

        <div className="not-prose my-5">
          <div className="border border-gray-200 dark:border-gray-800">
            <div className="p-7 text-center font-mono text-4xl">IBM Plex Mono</div>
          </div>

          <p className="mt-1 text-sm">Code and tabular text is set in IBM Plex Mono.</p>
        </div>

        <h2 className="mt-5 mb-3 text-xl font-extrabold tracking-tight">Type scale</h2>

        <p>The type scale defaults to the same as Tailwind.</p>

        <div className="not-prose sm:text-md md:text-md my-4 border border-gray-200 text-sm dark:border-gray-900">
          <div className="flex divide-x divide-gray-200 dark:divide-gray-900">
            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="py-1 text-center font-mono">0</div>
              <div className="py-1 text-center font-mono">12</div>
              <div className="py-1 text-center font-mono">16</div>
            </div>
            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="py-1 text-center font-mono">1</div>
              <div className="py-1 text-center font-mono">14</div>
              <div className="py-1 text-center font-mono">20</div>
            </div>
            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="py-1 text-center font-mono">2</div>
              <div className="py-1 text-center font-mono">16</div>
              <div className="py-1 text-center font-mono">24</div>
            </div>
            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="py-1 text-center font-mono">3</div>
              <div className="py-1 text-center font-mono">18</div>
              <div className="py-1 text-center font-mono">28</div>
            </div>
            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="py-1 text-center font-mono">4</div>
              <div className="py-1 text-center font-mono">20</div>
              <div className="py-1 text-center font-mono">28</div>
            </div>
            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="py-1 text-center font-mono">5</div>
              <div className="py-1 text-center font-mono">24</div>
              <div className="py-1 text-center font-mono">32</div>
            </div>
            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="py-1 text-center font-mono">6</div>
              <div className="py-1 text-center font-mono">30</div>
              <div className="py-1 text-center font-mono">36</div>
            </div>
            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="py-1 text-center font-mono">7</div>
              <div className="py-1 text-center font-mono">36</div>
              <div className="py-1 text-center font-mono">40</div>
            </div>
            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="py-1 text-center font-mono">8</div>
              <div className="py-1 text-center font-mono">48</div>
              <div className="py-1 text-center font-mono">48</div>
            </div>
            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="py-1 text-center font-mono">9</div>
              <div className="py-1 text-center font-mono">60</div>
              <div className="py-1 text-center font-mono">60</div>
            </div>
            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="py-1 text-center font-mono">10</div>
              <div className="py-1 text-center font-mono">72</div>
              <div className="py-1 text-center font-mono">72</div>
            </div>
            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="py-1 text-center font-mono">11</div>
              <div className="py-1 text-center font-mono">96</div>
              <div className="py-1 text-center font-mono">96</div>
            </div>
            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="py-1 text-center font-mono">12</div>
              <div className="py-1 text-center font-mono">128</div>
              <div className="py-1 text-center font-mono">128</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
