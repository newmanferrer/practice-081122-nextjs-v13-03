import Image from 'next/image'
import styles from './page.module.css'

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
      <h2>Font Cabin</h2>
      <h3>Font Space_Grotesk</h3>
      <Image
        priority
        src='/images/Octocat.png'
        alt='Octocat'
        width={300}
        height={300}
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw 33vw'
      />
    </div>
  )
}
