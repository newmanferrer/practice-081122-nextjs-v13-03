import Link from 'next/link'
import { LikeButton } from '../'
import { IPost } from '../../models'
import styles from './PostCard.module.css'

interface IPostCardProps {
  post: IPost
}

export const PostCard = ({ post }: IPostCardProps) => {
  return (
    <article className={styles.article} key={post.id}>
      <h2>{post.title}</h2>
      <Link href={`/posts/${post.id}`}>View Details</Link>
      <LikeButton />
    </article>
  )
}
