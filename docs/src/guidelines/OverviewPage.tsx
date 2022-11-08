export function OverviewPage() {
  return (
    <div className="m-auto max-w-4xl p-5 md:p-6 lg:p-7">
      <div className="prose dark:prose-invert prose-p:leading-snug prose-headings:font-extrabold prose-headings:tracking-tight md:prose-lg">
        <h1>Introduction</h1>

        <p>These are the design guidelines for demos and templates for Sanity.io.</p>

        <p className="font-bold">
          We want our demos and templates to look like a combination of a wireframe and a swiss
          poster – with a dash of UX pragmatism.
        </p>

        <p>
          These are expressed as a set of constraints and design principles that we follow so our
          demos and templates have consistent visual expression and appeal.
        </p>

        <p className="font-bold">The guidelines are intentionally limiting and simple.</p>
      </div>

      <ol className="not-prose my-5 list-decimal rounded border border-gray-200 py-4 pl-7 pr-5 dark:border-gray-900">
        <li className="my-1 text-lg">Black and white.</li>
        <li className="my-1 text-lg">Support light and dark modes.</li>
        <li className="my-1 text-lg">
          Set headlines in <span className="font-extrabold">extra bold sans serif</span>.
        </li>
        <li className="my-1 text-lg">
          Set copy in <span>medium sans serif</span>.
        </li>
        <li className="my-1 text-lg">
          Set long text in <span className="font-serif font-normal">normal serif</span>.
        </li>
        <li className="my-1 text-lg">
          Rely on prior work – fall back on Sanity’s design system and system defaults.
        </li>
        <li className="my-1 text-lg">Use text instead of icons.</li>
        <li className="my-1 text-lg">Never use emojis.</li>
        <li className="my-1 text-lg">Use only what you need, nothing more.</li>
        <li className="my-1 text-lg">Only break 1 rule in each screen.</li>
      </ol>
    </div>
  )
}
