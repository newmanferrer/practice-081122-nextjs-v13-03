import { PostDetailsCard } from '../../../../components'

interface IPostPageProps {
  params: {
    postId: string
  }
  children: React.ReactNode
}

export default async function PostLayout({ params, children }: IPostPageProps) {
  const { postId } = params

  return (
    <>
      <small>Posts Page &bull; Post Details Page and Comments</small>
      <PostDetailsCard postId={postId} />
      {children}
    </>
  )
}
