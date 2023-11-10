import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme'
import { fontSize } from './tailwind/fontSize'
import { height, maxHeight } from './tailwind/extend/height'
import { maxWidth, width } from './tailwind/extend/width'
import { fontFamily } from './tailwind/extend/fontFamily'
import typographyPlugin from '@tailwindcss/typography'
import typographyStyles from './tailwind/typography'

export const content = ['./src/**/*.{tsx,ts}', './sandbox-lib/**/*.{tsx,ts}'];
export const darkMode = 'class';
export const plugins = [typographyPlugin]

export const theme = {
  fontSize,
  extend: {
    fontFamily,
    height,
    maxHeight,
    width,
    maxWidth,
  },
  typography: typographyStyles,
}
