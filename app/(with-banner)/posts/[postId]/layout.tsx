interface IPostPageProps {
  children: React.ReactNode
}

export default async function PostLayout({ children }: IPostPageProps) {
  return (
    <>
      <small>Posts Page &bull; Post Details Page</small>
      {children}
    </>
  )
}
