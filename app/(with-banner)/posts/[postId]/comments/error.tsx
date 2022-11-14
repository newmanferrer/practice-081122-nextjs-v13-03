'use client'

import styles from './error.module.css'

interface ICommentsErrorProps {
  error: Error
}

const errorStyles = {
  margin: '1rem 0',
  padding: '0.5rem 1rem',
  color: 'red',
  border: '1px solid red',
  borderRadius: '3px',
  backgroundColor: 'white'
}

export default function CommentsError({ error }: ICommentsErrorProps) {
  console.error('Comments Error: ', error)

  return (
    <div style={errorStyles}>
      <p>❌ Error to loading comments!!!</p>
    </div>
  )
}
