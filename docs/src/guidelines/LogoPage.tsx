import {WordmarkExample} from './blocks/WordmarkExample'
import {Container} from './components/Container'
import {NotProse} from './components/NotProse'
import {Prose} from './components/Prose'

export function LogoPage() {
  return (
    <Container>
      <Prose>
        <h1>Logo</h1>

        <p>
          The logo of a Sanity demo or template is a filled circle and a wordmark with the title of
          the demo. Choose a short, simple, and accurate title. The title should ideally be just one
          word.
        </p>

        <p>
          The wordmark is set in extra bold sans serif with tight letter spacing.{' '}
          <strong>The word mark must be prefixed with a filled circle:</strong>
        </p>

        <NotProse>
          <WordmarkExample title="Wordmark" />
        </NotProse>

        <p>
          In some cases, we need a title with multiple words.{' '}
          <strong>If so, skip the spaces:</strong>
        </p>

        <NotProse>
          <WordmarkExample title="LandingPages" />
        </NotProse>
      </Prose>
    </Container>
  )
}
