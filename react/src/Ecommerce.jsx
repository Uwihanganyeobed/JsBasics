import React, { useContext } from 'react'
import { CountContext } from './context/UserContext'

export default function Ecommerce() {
    const {count, decrement, increment} = useContext(CountContext)

  return (
    <div>
    <p>Current count is {count}</p> 
    <button onClick={increment}>Increment</button> 
    <button onClick={decrement}>Decrement</button> 
    </div>
  )
}
