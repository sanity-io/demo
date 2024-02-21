import {TypeScale} from './blocks/TypeScale'
import {Container} from './components/Container'
import {NotProse} from './components/NotProse'
import {Prose} from './components/Prose'

export function TypographyPage() {
  return (
    <Container>
      <Prose>
        <h1>Typography</h1>

        <NotProse>
          <div className="my-5">
            <div className="rounded border border-gray-200 dark:border-gray-800">
              <div className="p-7 text-center text-4xl font-extrabold tracking-tight">
                Inter Extra Bold
              </div>
            </div>

            <p className="mt-1 text-sm">
              Headlines are set in extra bold with tight letter spacing.
            </p>
          </div>
        </NotProse>

        <NotProse>
          <div className="my-5">
            <div className="rounded border border-gray-200 dark:border-gray-800">
              <div className="p-7 text-center text-4xl">Inter Medium</div>
            </div>

            <p className="mt-1 text-sm">Copy is set in medium sans serif.</p>
          </div>
        </NotProse>

        <NotProse>
          <div className="my-5">
            <div className="rounded border border-gray-200 dark:border-gray-800">
              <div className="p-7 text-center font-serif text-4xl">PT Serif</div>
            </div>

            <p className="mt-1 text-sm">Long text is set in serif.</p>
          </div>
        </NotProse>

        <NotProse>
          <div className="my-5">
            <div className="rounded border border-gray-200 dark:border-gray-800">
              <div className="p-7 text-center font-mono text-4xl">IBM Plex Mono</div>
            </div>

            <p className="mt-1 text-sm">Code and tabular text is set in IBM Plex Mono.</p>
          </div>
        </NotProse>

        <h2 className="mb-3 mt-5 text-xl font-extrabold tracking-tight">Type scale</h2>

        <p>The type scale defaults to the same as Tailwind.</p>

        <NotProse>
          <TypeScale />
        </NotProse>
      </Prose>
    </Container>
  )
}
