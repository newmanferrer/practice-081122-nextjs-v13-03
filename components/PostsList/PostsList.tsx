import { PostCard } from '../../components'
import { fetchPostsIncrement } from '../../services'
import styles from './PostsList.module.css'

export const PostsList = async () => {
  const posts = await fetchPostsIncrement()

  return (
    <section className={styles.container}>
      {posts.slice(0, 5).map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  )
}
