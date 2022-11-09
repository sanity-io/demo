import {ReactNode} from 'react'

export function Prose(props: {children?: ReactNode}) {
  const {children} = props

  return (
    <div className="prose dark:prose-invert prose-p:leading-snug prose-headings:font-extrabold prose-headings:tracking-tight md:prose-lg">
      {children}
    </div>
  )
}
