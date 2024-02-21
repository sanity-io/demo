import {Link} from 'react-router-dom'
import {Footer} from './components/Footer'
import {Navbar} from './components/Navbar'

export function HomePage() {
  return (
    <>
      <div className="m-auto max-w-5xl">
        <Navbar />
      </div>

      <div className="max-w-5xl md:mx-3 lg:m-auto">
        <div className="divide-y divide-gray-200 rounded border-b border-t border-gray-200 md:border dark:divide-gray-900 dark:border-gray-900">
          <ArticlePreview mainImage="https://images.unsplash.com/photo-1636730987934-c6a10afd64d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80" />
          <ArticlePreview mainImage="https://images.unsplash.com/photo-1545599902-e86e23188f72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2728&q=80" />
          <ArticlePreview mainImage="https://images.unsplash.com/photo-1511131341194-24e2eeeebb09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" />
        </div>
      </div>

      <div className="m-auto max-w-5xl">
        <Footer />
      </div>
    </>
  )
}

function ArticlePreview(props: {mainImage: string}) {
  const {mainImage} = props

  return (
    <div>
      <Link className="md:flex" to="/example/media/article">
        <div className="flex-1 p-2 md:w-1/2">
          <img
            className="aspect-[4/2] md:aspect-[3/2]"
            src={mainImage}
            style={{objectFit: 'cover'}}
          />
        </div>

        <div className="flex flex-1 flex-col p-4 md:w-1/2">
          <h1 className="mb-2 text-4xl font-extrabold leading-none tracking-tight md:text-5xl">
            The power of newsletters
          </h1>

          <p className="mt-3 font-serif text-lg leading-snug">
            The humble newsletter has been around for decades, but it has only recently emerged as a
            powerful media in its own right.
          </p>

          <div className="mt-4 text-sm md:mt-auto">
            <span>Oct 25, 2022</span>
            <span> ● </span>
            <span>Carolina Gonzalez</span>
            <span> ● </span>
            <span>Rune Botten</span>
          </div>
        </div>
      </Link>
    </div>
  )
}
