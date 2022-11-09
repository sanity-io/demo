import {SpacingScale} from './blocks/SpacingScale'
import {Container} from './components/Container'
import {NotProse} from './components/NotProse'
import {Prose} from './components/Prose'

export function SpacingPage() {
  return (
    <Container>
      <Prose>
        <h1>Spacing</h1>

        <p>
          Use the Sanity spacing scale for demos and templates. The Sanity spacing scale is a
          fibonacci scale starting with 0, 4px, and 8px.
        </p>

        <NotProse>
          <SpacingScale />
        </NotProse>

        <h2>Spacing rules</h2>

        <p>The minimum padding of a box containing text is Space 4 (20px).</p>

        <NotProse>
          <div className="my-4 rounded border border-gray-200 p-4 dark:border-gray-900">
            <div className="bg-magenta-50 dark:bg-magenta-950">A box with text</div>
          </div>
        </NotProse>

        <p>The minimum padding of a box containing graphics is Space 2 (8px).</p>

        <NotProse>
          <div className="my-4 rounded border border-gray-200 p-2 dark:border-gray-900">
            <div className="bg-magenta-200 dark:bg-magenta-800 p-5 text-center text-white dark:text-black">
              (graphic)
            </div>
          </div>
        </NotProse>
      </Prose>
    </Container>
  )
}
