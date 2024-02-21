import {Figure} from './components/Figure'
import {Footer} from './components/Footer'
import {Navbar} from './components/Navbar'

export function ArticlePage() {
  return (
    <>
      <div className="border-b border-gray-200 dark:border-gray-900">
        <div className="m-auto max-w-5xl">
          <Navbar />
        </div>
      </div>

      <div className="pb-4 md:pb-6">
        <div className="m-auto max-w-5xl p-4 md:p-5 lg:p-6">
          <div className="text-sm sm:text-lg md:text-xl">
            <a className="hover:text-blue-500" href="#/tag/ideas">
              Ideas
            </a>
            <span> ● </span>
            <a className="hover:text-blue-500" href="#/tag/real-estate">
              Real Estate
            </a>
          </div>

          <h1 className="my-3 text-4xl font-extrabold leading-none tracking-tight sm:text-6xl md:text-8xl">
            The power of newsletters
          </h1>

          <p className="mt-3 font-serif text-2xl leading-snug">
            The humble newsletter has been around for decades, but it has only recently emerged as a
            powerful media in its own right.
          </p>
        </div>

        <Figure
          caption={
            <>
              The humble newsletter has been around for decades, but it has only recently emerged as
              a powerful media in its own right. ● Photo by Unsplash
            </>
          }
          className="m-auto max-w-5xl p-2"
          img={
            <img
              className="aspect-[4/2]"
              src="https://images.unsplash.com/photo-1555849887-cd72592f3cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h1000&w=1000&q=80"
              style={{display: 'block', objectFit: 'cover'}}
            />
          }
        />

        <div className="m-auto max-w-5xl p-4 md:p-5 lg:p-6">
          <div className="mt-4 max-w-2xl border-b border-gray-200 pb-3 text-sm sm:text-lg md:mt-auto md:pb-4 md:text-xl dark:border-gray-900">
            <span>Oct 25, 2022</span>
            <span> ● </span>
            <span>Carolina Gonzalez</span>
            <span> ● </span>
            <span>Rune Botten</span>
          </div>

          <p className="my-4 max-w-2xl font-serif text-lg leading-relaxed md:text-xl md:leading-relaxed">
            Newsletters have gained popularity, thanks in part to the explosive growth of email
            marketing which has made it easier than ever to reach large audiences with highly
            targeted content. But it's also a result of the ever-changing media landscape, which has
            left many traditional publishers scrambling to find new ways to reach their audiences.
          </p>

          <p className="my-4 max-w-2xl font-serif text-lg leading-relaxed md:text-xl md:leading-relaxed">
            Newsletters offer a unique solution to this problem: they're highly engaging, easy to
            produce, and can be tailored to any audience. That's why we're seeing an influx of
            traditional publishers, like the New York Times and The Wall Street Journal, launching
            their own newsletters.
          </p>

          <Figure
            caption={
              <>
                The humble newsletter has been around for decades, but it has only recently emerged
                as a powerful media in its own right. ● Photo by Unsplash
              </>
            }
            className="my-4 md:my-5 lg:my-6"
            img={
              <img
                className="aspect-[4/2]"
                src="https://images.unsplash.com/photo-1555849887-cd72592f3cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h1000&w=1000&q=80"
                style={{display: 'block', objectFit: 'cover'}}
              />
            }
          />

          <p className="my-4 max-w-2xl font-serif text-lg leading-relaxed md:text-xl md:leading-relaxed">
            Newsletters offer a unique solution to this problem: they're highly engaging, easy to
            produce, and can be tailored to any audience. That's why we're seeing an influx of
            traditional publishers, like The New York Times and The Wall Street Journal, launching
            their own newsletters.
          </p>

          <p className="my-4 max-w-2xl font-serif text-lg leading-relaxed md:text-xl md:leading-relaxed">
            It's not just publishers who are getting in on the action, either. Brands in every
            industry are starting to see the value in reaching their customers via email. And with
            the rise of platforms like Substack, it's easier than ever to launch a newsletter of
            your own.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-900">
        <div className="m-auto max-w-5xl">
          <Footer />
        </div>
      </div>
    </>
  )
}
