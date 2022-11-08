import {Link} from 'react-router-dom'

export function Footer() {
  return (
    <div className="p-4 md:p-5 lg:p-6">
      <div className="text-2xl font-extrabold leading-none tracking-tight sm:text-3xl md:text-4xl">
        <Link className="hover:text-blue-500" to="/">
          ● Media
        </Link>
      </div>
    </div>
  )
}
