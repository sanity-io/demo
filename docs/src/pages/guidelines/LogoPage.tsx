export function LogoPage() {
  return (
    <div className="m-auto max-w-4xl p-5 md:p-6 lg:p-7">
      <div className="prose dark:prose-invert prose-headings:tracking-tight md:prose-xl">
        <h1>Logo</h1>

        <p>The logo of a Sanity demo or template is just a wordmark with the title of the demo.</p>

        <p>
          This forces us to choose a short and simple title, while also becoming an appealing and
          recognizable <strong>wordmark logo</strong>.
        </p>

        <p>
          The wordmark is set in extra bold sans serif. Preferably, the word should be just one
          word. <strong>The word mark must be suffixed with a dot:</strong>
        </p>

        <div className="not-prose my-6 rounded border border-gray-200 py-7 dark:border-gray-900">
          <div className="text-center text-6xl font-extrabold tracking-tight">Wordmark.</div>
        </div>

        <p>
          In some case, we need a title with multiple words.{' '}
          <strong>If so, skip the spaces:</strong>
        </p>

        <div className="not-prose my-6 rounded border border-gray-200 py-7 dark:border-gray-900">
          <div className="text-center text-6xl font-extrabold tracking-tight">LandingPages.</div>
        </div>
      </div>
    </div>
  )
}
