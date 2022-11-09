export function ConstraintsPlaque() {
  return (
    <ol className="my-5 list-decimal rounded border border-gray-200 py-4 pl-7 pr-5 dark:border-gray-900">
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
  )
}
