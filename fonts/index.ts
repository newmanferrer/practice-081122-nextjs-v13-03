import { Cabin, Montserrat, Roboto, Space_Grotesk } from '@next/font/google'

export const font_cabin = Cabin({
  weight: ['400', '600', '700'],
  variable: '--font-cabin',
  style: 'italic',
  subsets: ['latin']
})

export const font_montserrat = Montserrat({
  weight: ['400', '600'],
  variable: '--font-montserrat',
  subsets: ['latin']
})

export const font_roboto = Roboto({
  weight: ['400'],
  variable: '--font-roboto',
  subsets: ['latin']
})

export const font_space_grotesk = Space_Grotesk({
  weight: ['400', '600'],
  variable: '--font-grotesk',
  subsets: ['latin']
})
