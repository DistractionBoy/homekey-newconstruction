import type { Metadata } from 'next'
import { metadata as newConstructionMetadata } from './new-construction/page'

export { default } from './new-construction/page'

export const metadata: Metadata = {
  ...newConstructionMetadata,
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'es-US': '/es',
    },
  },
}
