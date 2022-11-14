import { IPost, IComment } from '../../models'

const URL = 'https://jsonplaceholder.typicode.com/posts'

//* *************************************************************************************
//* 1.- ALL POSTS
//* *************************************************************************************
//* -------------------------------------------------------------------------------------
//* 1.1.- Generate static HTML
//* -------------------------------------------------------------------------------------
//* Default: It is equivalent to the old "getStaticProps()" in Nextjs 12
//* Note: It is not necessary to put the parameter: "{ cache: 'force-cache' }"
//* -------------------------------------------------------------------------------------
export const fetchPostsStatic = async (): Promise<IPost[]> => {
  return await fetch(URL, { cache: 'force-cache' }).then(response => response.json())
}
//* -------------------------------------------------------------------------------------

//* -------------------------------------------------------------------------------------
//* 1.2.- Generate Dynamic HTML if receive a request
//* -------------------------------------------------------------------------------------
//* It is equivalent to the old "getServerSideProps()" in Nextjs 12
//* -------------------------------------------------------------------------------------
export const fetchPostsDynamic = async (): Promise<IPost[]> => {
  return await fetch(URL, { cache: 'no-store' }).then(response => response.json())
}
//* -------------------------------------------------------------------------------------

//* -------------------------------------------------------------------------------------
//* 1.3.- Generate Increment HTML - Revalidate Data if receive a request
//* -------------------------------------------------------------------------------------
//* It is equivalent to the old (ISR) "Incremental Static Regeneration" in Nextjs 12
//* Note: revalidate in seconds
//* -------------------------------------------------------------------------------------
export const fetchPostsIncrement = async (): Promise<IPost[]> => {
  return await fetch(URL, { next: { revalidate: 60 } }).then(response => response.json())
}
//* -------------------------------------------------------------------------------------
//* *************************************************************************************

//* *************************************************************************************
//* 2.- SINGLE POST
//* *************************************************************************************
//* -------------------------------------------------------------------------------------
//* 2.1.- Fetch Single Post Static
//* -------------------------------------------------------------------------------------
export const fetchSinglePostStatic = async (postId: string): Promise<IPost> => {
  return await fetch(`${URL}/${postId}`, { cache: 'force-cache' }).then(response => response.json())
}
//* -------------------------------------------------------------------------------------

//* -------------------------------------------------------------------------------------
//* 2.2.- Fetch Single Post Dynamic
//* -------------------------------------------------------------------------------------
export const fetchSinglePostDynamic = async (postId: string): Promise<IPost> => {
  return await fetch(`${URL}/${postId}`, { cache: 'no-store' }).then(response => response.json())
}
//* -------------------------------------------------------------------------------------

//* -------------------------------------------------------------------------------------
//* 2.3.- Fetch Single Post Incremental (ISR)
//* -------------------------------------------------------------------------------------
export const fetchSinglePostIncremental = async (postId: string): Promise<IPost> => {
  return await fetch(`${URL}/${postId}`, { next: { revalidate: 60 } }).then(response =>
    response.json()
  )
}
//* -------------------------------------------------------------------------------------
//* *************************************************************************************

//* *************************************************************************************
//* 3.- All COMMENTS OF ONCE POST
//* *************************************************************************************
//* -------------------------------------------------------------------------------------
//* 3.1.- Fetch Comments Static
//* -------------------------------------------------------------------------------------
export const fetchCommentsStatic = async (postId: string): Promise<IComment[]> => {
  return await fetch(`${URL}/${postId}/comments`, { cache: 'force-cache' }).then(response =>
    response.json()
  )
}
//* -------------------------------------------------------------------------------------

//* -------------------------------------------------------------------------------------
//* 3.2.- Fetch Comments Dynamic
//* -------------------------------------------------------------------------------------
export const fetchCommentsDynamic = async (postId: string): Promise<IComment[]> => {
  return await fetch(`${URL}/${postId}/comments`, { cache: 'no-store' }).then(response =>
    response.json()
  )
}
//* -------------------------------------------------------------------------------------

//* -------------------------------------------------------------------------------------
//* 3.3.- Fetch Comments Incremental (ISR)
//* -------------------------------------------------------------------------------------
export const fetchCommentsIncremental = async (postId: string): Promise<IComment[]> => {
  return await fetch(`${URL}/${postId}/comments`, { next: { revalidate: 60 } }).then(response =>
    response.json()
  )
}
//* -------------------------------------------------------------------------------------
//* *************************************************************************************
