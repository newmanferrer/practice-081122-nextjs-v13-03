import Image from 'next/image'
import { IComment } from '../../models'
import styles from './CommentCard.module.css'

interface ICommentCardProps {
  comment: IComment
}

export const CommentCard = ({ comment }: ICommentCardProps) => {
  return (
    <article className={styles.article}>
      <Image
        src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.id}.svg`}
        alt={comment.name}
        width={100}
        height={100}
      />
      <h2>{comment.name}</h2>
      <p>{comment.body}</p>
    </article>
  )
}
