import { PostDetailsCard } from '../../../../components'

interface IPostDetailsPageProps {
  params: {
    postId: string
  }
}

export default function PostDetailsPage({ params }: IPostDetailsPageProps) {
  const { postId } = params

  return <PostDetailsCard postId={postId} />
}
