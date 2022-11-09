import {ReactNode} from 'react'

export function NotProse(props: {children?: ReactNode; className?: string}) {
  const {children, className} = props

  return <div className={[className, 'not-prose'].filter(Boolean).join(' ')}>{children}</div>
}
