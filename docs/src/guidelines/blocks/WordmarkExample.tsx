export function WordmarkExample(props: {title: string}) {
  const {title} = props

  return (
    <div className="my-6 overflow-auto whitespace-nowrap rounded border border-gray-200 py-7 dark:border-gray-900">
      <div className="text-center text-6xl font-extrabold tracking-tight text-black dark:text-white">
        <span>●</span> {title}
      </div>
    </div>
  )
}
