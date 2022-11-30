import {Link} from 'react-router-dom'

export function Footer() {
  return (
    <div className="p-4 md:p-5 lg:p-6">
      <div className="text-xl font-extrabold leading-none tracking-tight sm:text-2xl md:text-3xl">
        <Link className="hover:text-blue-500" to="/example/media">
          ● Media
        </Link>
      </div>
    </div>
  )
}
