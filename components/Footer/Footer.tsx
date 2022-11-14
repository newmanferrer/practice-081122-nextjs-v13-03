import styles from './Footer.module.css'
import { font_roboto } from '../../fonts'

export function Footer() {
  return (
    <footer className={`${styles.footer} ${font_roboto.className}`}>
      <h2>Footer</h2>
    </footer>
  )
}
