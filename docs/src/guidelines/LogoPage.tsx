export function LogoPage() {
  return (
    <div className="m-auto max-w-4xl p-5 md:p-6 lg:p-7">
      <div className="prose dark:prose-invert prose-p:leading-snug prose-headings:font-extrabold prose-headings:tracking-tight md:prose-lg">
        <h1>Logo</h1>

        <p>
          The logo of a Sanity demo or template is a filled circle and a wordmark with the title of
          the demo. Choose a short, simple, and accurate title. The title should ideally be just one
          word.
        </p>

        <p>
          The wordmark is set in extra bold sans serif with tight letter spacing.{' '}
          <strong>The word mark must be prefixed with a filled circle:</strong>
        </p>

        <div className="not-prose my-6 rounded border border-gray-200 py-7 dark:border-gray-900">
          <div className="text-center text-6xl font-extrabold tracking-tight">
            <span>●</span> Wordmark
          </div>
        </div>

        <p>
          In some cases, we need a title with multiple words.{' '}
          <strong>If so, skip the spaces:</strong>
        </p>

        <div className="not-prose my-6 rounded border border-gray-200 py-7 dark:border-gray-900">
          <div className="text-center text-6xl font-extrabold tracking-tight">
            <span>●</span> LandingPages
          </div>
        </div>
      </div>
    </div>
  )
}
