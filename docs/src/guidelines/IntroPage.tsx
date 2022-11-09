import {ConstraintsPlaque} from './blocks/ConstraintsPlaque'
import {Container} from './components/Container'
import {NotProse} from './components/NotProse'
import {Prose} from './components/Prose'

export function IntroPage() {
  return (
    <Container>
      <Prose>
        <h1>Demo design guidelines</h1>

        <blockquote>
          <p>
            We want our demos and templates to look like a combination of a wireframe and a swiss
            poster – with a dash of UX pragmatism.
          </p>
        </blockquote>

        <p>These are the design guidelines for demos and templates for Sanity.io.</p>

        <p>
          The guidelines are expressed as a set of constraints and design principles that we follow
          so our demos and templates have consistent visual expression and appeal.
        </p>

        <p className="font-bold">The guidelines are intentionally limiting and simple.</p>

        <NotProse>
          <ConstraintsPlaque />
        </NotProse>

        <h2>Usage</h2>

        <pre>
          <code>{`npm install @sanity/demo`}</code>
        </pre>

        <h3>Installing fonts</h3>

        <p>
          Sanity demos use Inter, PT Serif, and IBM Plex Mono. Add this snippet inside the{' '}
          <code>&lt;head&gt;</code> tag of your application:
        </p>

        <pre>
          <code>{`<!-- Google fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;700&family=Inter:wght@500;700;800&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap"
  rel="stylesheet"
/>`}</code>
        </pre>

        <h3>Usage with Tailwind</h3>

        <pre>
          <code>{`// tailwind.config.js

const {theme} = require('@sanity/demo/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...],
  theme,
  plugins: [require('@tailwindcss/typography')],
}`}</code>
        </pre>

        <p>
          Go to the{' '}
          <a href="https://github.com/sanity-io/demo" target="_blank" rel="noreferrer">
            GitHub repo
          </a>{' '}
          for more details.
        </p>
      </Prose>
    </Container>
  )
}
