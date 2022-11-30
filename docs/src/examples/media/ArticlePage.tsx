import {Figure} from './components/Figure'
import {Footer} from './components/Footer'
import {ImageWrapper} from './components/ImageWrapper'
import {Navbar} from './components/Navbar'
import {NotProse} from './components/NotProse'
import {Prose} from './components/Prose'

export function ArticlePage() {
  return (
    <>
      <div className="m-auto max-w-5xl">
        <Navbar />
      </div>

      <div className="border-b border-gray-100 dark:border-gray-900">
        <div className="m-auto max-w-5xl p-4 md:p-5 lg:p-6">
          <div className="text-sm sm:text-lg md:text-xl">
            <a className="hover:text-blue-600" href="#/tag/ideas">
              Ideas
            </a>
            <span> ● </span>
            <a className="hover:text-blue-600" href="#/tag/real-estate">
              Real Estate
            </a>
          </div>

          <h1 className="my-3 text-4xl font-extrabold leading-none tracking-tight sm:text-5xl md:text-6xl">
            The power of newsletters
          </h1>

          <p className="mt-3 font-serif text-xl leading-snug text-gray-600 dark:text-gray-200 sm:text-2xl md:text-3xl">
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
            <ImageWrapper>
              <img
                className="aspect-[4/2]"
                src="https://images.unsplash.com/photo-1555849887-cd72592f3cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h1000&w=1000&q=80"
                style={{display: 'block', objectFit: 'cover'}}
              />
            </ImageWrapper>
          }
        />

        <div className="m-auto max-w-5xl p-4 md:px-5 lg:px-6">
          <div className="sm:text-md text-sm md:text-lg">
            <span>Oct 25, 2022</span>
            <span> ● </span>
            <span>Carolina Gonzalez</span>
            <span> ● </span>
            <span>Rune Botten</span>
          </div>
        </div>
      </div>

      <div>
        <div className="m-auto max-w-5xl p-4 md:px-5 lg:px-6">
          <Prose>
            <p>
              Newsletters have gained popularity, thanks in part to the explosive growth of email
              marketing which has made it easier than ever to reach large audiences with highly
              targeted content. But it’s also a result of the ever-changing media landscape, which
              has left many traditional publishers scrambling to find new ways to reach their
              audiences.
            </p>

            <p>
              Newsletters offer a unique solution to this problem: they’re highly engaging, easy to
              produce, and can be tailored to any audience. That’s why we’re seeing an influx of
              traditional publishers, like the New York Times and The Wall Street Journal, launching
              their own newsletters.
            </p>

            <NotProse>
              <Figure
                caption={
                  <>
                    The humble newsletter has been around for decades, but it has only recently
                    emerged as a powerful media in its own right. ● Photo by Unsplash
                  </>
                }
                className="my-5 -mx-3 md:my-6 lg:my-7"
                img={
                  <ImageWrapper>
                    <img
                      className="aspect-[3/2]"
                      src="https://images.unsplash.com/photo-1555849887-cd72592f3cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h1000&w=1000&q=80"
                      style={{display: 'block', objectFit: 'cover'}}
                    />
                  </ImageWrapper>
                }
              />
            </NotProse>

            <p>
              Newsletters offer a unique solution to this problem: they’re highly engaging, easy to
              produce, and can be tailored to any audience. That’s why we’re seeing an influx of
              traditional publishers, like The New York Times and The Wall Street Journal, launching
              their own newsletters.
            </p>

            <p>
              It’s not just publishers who are getting in on the action, either. Brands in every
              industry are starting to see the value in reaching their customers via email. And with
              the rise of platforms like Substack, it’s easier than ever to launch a newsletter of
              your own.
            </p>
          </Prose>
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
