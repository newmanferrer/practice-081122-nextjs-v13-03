'use client'

import { useState } from 'react'
import styles from './Counter.module.css'

const initialState = 0

export const Counter = () => {
  const [counter, setCounter] = useState(initialState)

  const increment = () => setCounter(counter => counter + 1)
  const decrement = () => setCounter(counter => counter - 1)
  const reset = () => setCounter(initialState)

  return (
    <div className={styles.container}>
      <h2>Counter: {counter}</h2>
      <div>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+1</button>
      </div>
    </div>
  )
}
