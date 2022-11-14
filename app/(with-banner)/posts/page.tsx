import { Suspense } from 'react'
import { PostsList } from '../../../components'
import styles from './PostsPage.module.css'

export default async function PostsPage() {
  return (
    <div className={styles.container}>
      <h1>Post Page</h1>
      <Suspense fallback={<p>Loading posts...</p>}>
        <PostsList />
      </Suspense>
    </div>
  )
}
