// eslint-disable-next-line import/no-unresolved
import { DoubleMoonTheme } from '@doublemoondev/doublemoon-uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends DoubleMoonTheme {}
}
