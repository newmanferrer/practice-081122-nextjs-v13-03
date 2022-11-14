import { fetchCommentsIncremental } from '../../services'
import { CommentCard } from '../'
import styles from './CommentsList.module.css'

interface ICommentsListProps {
  postId: string
}

export const CommentsList = async ({ postId }: ICommentsListProps) => {
  const comments = await fetchCommentsIncremental(postId)

  return (
    <section className={styles.container}>
      {comments.map(comment => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </section>
  )
}
