export function TypographyPage() {
  return (
    <div className="m-auto max-w-4xl p-5 md:p-6 lg:p-7">
      <div className="prose dark:prose-invert prose-headings:tracking-tight md:prose-xl">
        <h1>Typography</h1>

        <p>Headlines are extra bold with tight letter spacing.</p>

        <p>The sans serif font is Inter.</p>

        <p>The serif font is PT Serif.</p>

        <p>The monospace font is IBM Plex Mono.</p>

        <div className="not-prose overflow-auto border border-gray-200 p-4 dark:border-gray-900">
          <div className="text-9xl font-extrabold tracking-tight">Heading</div>
          <div className="text-8xl font-extrabold tracking-tight">Heading</div>
          <div className="text-7xl font-extrabold tracking-tight">Heading</div>
          <div className="text-6xl font-extrabold tracking-tight">Heading</div>
          <div className="text-5xl font-extrabold tracking-tight">Heading</div>
          <div className="text-4xl font-extrabold tracking-tight">Heading</div>
          <div className="text-3xl font-extrabold tracking-tight">Heading</div>
          <div className="text-2xl font-extrabold tracking-tight">Heading</div>
          <div className="text-xl font-extrabold tracking-tight">Heading</div>
          <div className="text-lg font-extrabold tracking-tight">Heading</div>
          <div className="text-md font-extrabold tracking-tight">Heading</div>
          <div className="text-sm font-extrabold tracking-tight">Heading</div>
          <div className="text-xs font-extrabold tracking-tight">Heading</div>
        </div>

        <h2 className="mt-5 mb-3 text-xl font-extrabold tracking-tight">Type scale</h2>

        <div className="not-prose border border-gray-200 dark:border-gray-900">
          <div className="flex divide-x divide-gray-200 dark:divide-gray-900">
            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="text-center text-sm">0</div>
              <div className="text-center text-sm">12</div>
              <div className="text-center text-sm">16</div>
            </div>
            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="text-center text-sm">1</div>
              <div className="text-center text-sm">14</div>
              <div className="text-center text-sm">20</div>
            </div>
            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="text-center text-sm">2</div>
              <div className="text-center text-sm">16</div>
              <div className="text-center text-sm">24</div>
            </div>
            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="text-center text-sm">3</div>
              <div className="text-center text-sm">18</div>
              <div className="text-center text-sm">28</div>
            </div>
            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="text-center text-sm">4</div>
              <div className="text-center text-sm">20</div>
              <div className="text-center text-sm">28</div>
            </div>
            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="text-center text-sm">5</div>
              <div className="text-center text-sm">24</div>
              <div className="text-center text-sm">32</div>
            </div>
            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="text-center text-sm">6</div>
              <div className="text-center text-sm">30</div>
              <div className="text-center text-sm">36</div>
            </div>
            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="text-center text-sm">7</div>
              <div className="text-center text-sm">36</div>
              <div className="text-center text-sm">40</div>
            </div>
            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="text-center text-sm">8</div>
              <div className="text-center text-sm">48</div>
              <div className="text-center text-sm">48</div>
            </div>
            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="text-center text-sm">9</div>
              <div className="text-center text-sm">60</div>
              <div className="text-center text-sm">60</div>
            </div>
            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="text-center text-sm">10</div>
              <div className="text-center text-sm">72</div>
              <div className="text-center text-sm">72</div>
            </div>
            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="text-center text-sm">11</div>
              <div className="text-center text-sm">96</div>
              <div className="text-center text-sm">96</div>
            </div>
            <div className="flex-1 divide-y divide-gray-200 dark:divide-gray-900">
              <div className="text-center text-sm">12</div>
              <div className="text-center text-sm">128</div>
              <div className="text-center text-sm">128</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
