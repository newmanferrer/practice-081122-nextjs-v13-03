import Link from 'next/link'
import { font_montserrat } from '../../fonts'
import styles from './Navigation.module.css'

interface ILinks {
  id: number
  label: string
  route: string
}

const links: ILinks[] = [
  {
    id: 1,
    label: 'Home',
    route: '/'
  },
  {
    id: 2,
    label: 'About',
    route: '/about'
  },
  {
    id: 3,
    label: 'Posts',
    route: '/posts'
  }
]

export const Navigation = () => {
  return (
    <nav className={`${styles.nav} ${font_montserrat.className}`}>
      <ul>
        {links.map(({ id, label, route }) => (
          <li key={id}>
            <Link href={route}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
