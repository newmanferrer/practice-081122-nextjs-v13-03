import { CommentsList } from '../../../../../components'

interface ICommentsPageProps {
  params: {
    postId: string
  }
}

export default async function CommentsPage({ params }: ICommentsPageProps) {
  const { postId } = params

  return <CommentsList postId={postId} />
}
