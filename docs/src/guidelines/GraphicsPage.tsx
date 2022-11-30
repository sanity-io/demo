import {Container} from './components/Container'
import {NotProse} from './components/NotProse'
import {Prose} from './components/Prose'

export function GraphicsPage() {
  return (
    <Container>
      <Prose>
        <h1>Graphics</h1>

        <h2>Photography</h2>

        <p>
          Prefer black and white photography. This is to emphasize that photos are intended to be
          examples that should be replaced.
        </p>

        <h3>Creditation</h3>

        <p>
          Use the <code>●</code> character to indicate accreditation, which marks the beginning of
          the accreditation.
        </p>

        <NotProse>
          <div className="my-5 rounded border p-5 dark:border-gray-900">
            <div className="mx-auto max-w-lg">
              <figure>
                <div className="relative overflow-hidden rounded">
                  <img
                    className="block"
                    src="https://images.unsplash.com/photo-1545599902-e86e23188f72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2728&q=80"
                    alt="Credit example"
                  />
                  <div className="absolute inset-0 bg-black mix-blend-screen" />
                </div>

                <figcaption className="mt-1 text-sm">
                  A shooting star. ● Photo by Unsplash
                </figcaption>
              </figure>
            </div>
          </div>
        </NotProse>

        <h2>Illustration</h2>

        <p>Use HTML elements to create illustrations.</p>

        <NotProse className="my-5">
          <div className="rounded border p-5 dark:border-gray-900">
            <div
              className="relative m-auto rounded-lg bg-black dark:bg-white"
              style={{width: '20vw', height: '12vw'}}
            >
              <div
                className="absolute bg-gray-800"
                style={{
                  width: '2vw',
                  height: '1vw',
                  top: '8vw',
                  left: '2vw',
                }}
              />
              <div
                className="absolute bg-gray-800"
                style={{
                  width: '2vw',
                  height: '1vw',
                  top: '8vw',
                  left: '5vw',
                }}
              />
              <div
                className="absolute bg-gray-800"
                style={{
                  width: '2vw',
                  height: '1vw',
                  top: '8vw',
                  left: '8vw',
                }}
              />
              <div
                className="absolute bg-gray-800"
                style={{
                  width: '2vw',
                  height: '1vw',
                  top: '8vw',
                  left: '11vw',
                }}
              />
            </div>
          </div>
          <figcaption className="mt-1 text-sm">A credit card illustration.</figcaption>
        </NotProse>
      </Prose>
    </Container>
  )
}
