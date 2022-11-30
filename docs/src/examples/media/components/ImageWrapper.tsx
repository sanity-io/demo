import {ReactNode} from 'react'

export function ImageWrapper(props: {children?: ReactNode}) {
  const {children} = props

  return (
    <div className="relative overflow-hidden rounded">
      {children}
      <div className="absolute inset-0 bg-black mix-blend-screen" />
    </div>
  )
}
