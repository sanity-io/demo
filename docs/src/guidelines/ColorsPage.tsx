import {ColorGrid} from './blocks/ColorGrid'
import {Container} from './components/Container'
import {NotProse} from './components/NotProse'
import {Prose} from './components/Prose'

export function ColorsPage() {
  return (
    <Container>
      <Prose>
        <h1>Colors</h1>

        <p>
          The color options are intentionally limited to a background color, a foreground color, and
          an optional brand color.
        </p>

        <NotProse>
          <ColorGrid />
        </NotProse>
      </Prose>
    </Container>
  )
}
