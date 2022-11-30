import {ReactNode} from 'react'

export function Prose(props: {children?: ReactNode; className?: string}) {
  const {children} = props

  return (
    <div className="prose dark:prose-invert prose-p:leading-snug prose-headings:font-extrabold prose-headings:tracking-tight sm:prose-md md:prose-lg lg:prose-xl font-serif">
      {children}
    </div>
  )
}
