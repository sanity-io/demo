# @sanity/demo

Design tokens and guidelines for implementing demos and templates at Sanity.io.

## Installation

```sh
npm install @sanity/demo
```

## Local development

```sh
git clone git@github.com:sanity-io/demo.git
cd demo
pnpm install
pnpm dev
# Open Vite development server
```

## Usage

Follow these steps to configure your demo:

### Installing fonts

Sanity demos use Inter, PT Serif, and IBM Plex Mono. Add this snippet inside the `<head>` tag of your application:

```html
<!-- Google fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;700&family=Inter:wght@500;700;800&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap"
  rel="stylesheet"
/>
```

### Usage with Tailwind

```js
// tailwind.config.js

const {theme} = require('@sanity/demo/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...],
  theme,
  plugins: [require('@tailwindcss/typography')],
}
```

## License

MIT © [Sanity.io](LICENSE)
