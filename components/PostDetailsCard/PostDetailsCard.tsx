import Link from 'next/link'
import { fetchSinglePostIncremental } from '../../services'
import styles from './PostDetailsCard.module.css'

interface IPostDetailsCardProps {
  postId: string
}

export const PostDetailsCard = async ({ postId }: IPostDetailsCardProps) => {
  const post = await fetchSinglePostIncremental(postId)

  return (
    <article className={styles.container}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link href={`/posts/${postId}/comments`}>View Comments</Link>
    </article>
  )
}
