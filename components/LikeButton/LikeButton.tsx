'use client'

import { useState } from 'react'
import styles from './LikeButton.module.css'

export const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false)

  const handleClick = () => setIsLiked(isLiked => !isLiked)

  return (
    <button className={styles.button} onClick={handleClick}>
      {isLiked ? '💗 I Like It' : '🤍'}
    </button>
  )
}
