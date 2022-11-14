import styles from './AboutAndPostsLayout.module.css'

interface IPostsLayoutProps {
  children: React.ReactNode
}

export default function AboutAndPostsLayout({ children }: IPostsLayoutProps) {
  return (
    <div className={styles.container}>
      <p>Route Groups - Shared Layout (About and Posts) </p>
      {children}
    </div>
  )
}
