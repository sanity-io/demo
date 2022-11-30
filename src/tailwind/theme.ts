import {ColorTints, black, hues, white, gray} from '@sanity/color'
import {fontFamily, radius, screen, space} from '@sanity/demo'
import {ThemeConfig} from 'tailwindcss/types/config'

function _buildTailwindColorTints(tints: ColorTints) {
  return Object.fromEntries(Object.entries(tints).map(([tintKey, tint]) => [tintKey, tint.hex]))
}

const _round = (num: number) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const _rem = (px: number) => `${_round(px / 16)}rem`
// const em = (px, base) => `${round(px / base)}em`

/** @alpha */
export const theme: Partial<ThemeConfig & {extend: Partial<ThemeConfig>}> = {
  extend: {
    typography: {
      DEFAULT: {
        css: {
          '--tw-prose-body': gray[700].hex,
          '--tw-prose-headings': black.hex,
          '--tw-prose-lead': black.hex,
          '--tw-prose-links': black.hex,
          '--tw-prose-bold': black.hex,
          '--tw-prose-counters': black.hex,
          '--tw-prose-bullets': black.hex,
          '--tw-prose-hr': black.hex,
          '--tw-prose-quotes': black.hex,
          '--tw-prose-quote-borders': black.hex,
          '--tw-prose-captions': black.hex,
          '--tw-prose-code': black.hex,
          '--tw-prose-pre-code': gray[700].hex,
          '--tw-prose-pre-bg': gray[50].hex,
          '--tw-prose-th-borders': gray[200].hex,
          '--tw-prose-td-borders': gray[200].hex,

          '--tw-prose-invert-body': gray[200].hex,
          '--tw-prose-invert-headings': white.hex,
          '--tw-prose-invert-lead': white.hex,
          '--tw-prose-invert-links': white.hex,
          '--tw-prose-invert-bold': white.hex,
          '--tw-prose-invert-counters': white.hex,
          '--tw-prose-invert-bullets': white.hex,
          '--tw-prose-invert-hr': white.hex,
          '--tw-prose-invert-quotes': white.hex,
          '--tw-prose-invert-quote-borders': white.hex,
          '--tw-prose-invert-captions': white.hex,
          '--tw-prose-invert-code': white.hex,
          '--tw-prose-invert-pre-code': gray[300].hex,
          '--tw-prose-invert-pre-bg': gray[950].hex,
          '--tw-prose-invert-th-borders': gray[900].hex,
          '--tw-prose-invert-td-borders': gray[900].hex,

          blockquote: {
            fontWeight: 'inherit',
            fontStyle: 'normal',
          },
        },
      },

      sm: {
        css: {
          pre: {
            borderRadius: _rem(radius[2]),
          },
        },
      },
      base: {
        css: {
          pre: {
            borderRadius: _rem(radius[2]),
          },
        },
      },
      lg: {
        css: {
          pre: {
            borderRadius: _rem(radius[2]),
          },
        },
      },
      xl: {
        css: {
          pre: {
            borderRadius: _rem(radius[2]),
          },
        },
      },
      '2xl': {
        css: {
          pre: {
            borderRadius: _rem(radius[2]),
          },
        },
      },
    },
  },
  borderRadius: {
    none: `${radius[0]}`,
    sm: `${radius[1]}px`,
    DEFAULT: `${radius[2]}px`,
    md: `${radius[3]}px`,
    lg: `${radius[4]}px`,
    full: '9999px',
  },
  colors: {
    transparent: 'transparent',
    current: 'currentColor',
    white: white.hex,
    black: black.hex,
    gray: _buildTailwindColorTints(hues.gray),
    blue: _buildTailwindColorTints(hues.blue),
    purple: _buildTailwindColorTints(hues.purple),
    magenta: _buildTailwindColorTints(hues.magenta),
    red: _buildTailwindColorTints(hues.red),
    orange: _buildTailwindColorTints(hues.orange),
    yellow: _buildTailwindColorTints(hues.yellow),
    green: _buildTailwindColorTints(hues.green),
    cyan: _buildTailwindColorTints(hues.cyan),
  },
  fontFamily: fontFamily,
  screens: {
    sm: `${screen[0]}px`,
    md: `${screen[1]}px`,
    lg: `${screen[2]}px`,
    xl: `${screen[3]}px`,
    '2xl': `${screen[4]}px`,
  },
  spacing: {
    1: `${space[1]}px`,
    2: `${space[2]}px`,
    3: `${space[3]}px`,
    4: `${space[4]}px`,
    5: `${space[5]}px`,
    6: `${space[6]}px`,
    7: `${space[7]}px`,
    8: `${space[8]}px`,
    9: `${space[9]}px`,
  },
}
