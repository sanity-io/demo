import {ReactNode} from 'react'

export function Container(props: {children?: ReactNode}) {
  const {children} = props

  return <div className="m-auto max-w-4xl p-5 md:p-6 lg:p-7">{children}</div>
}
