import { Navigation, Footer } from '../components'
import './globals.css'
import { font_cabin, font_space_grotesk } from '../fonts'

interface IRootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang='en'>
      <head />
      <body className={font_cabin.variable}>
        <header>
          <Navigation />
        </header>
        <main className={font_space_grotesk.className}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
