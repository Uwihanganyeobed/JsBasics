import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

export default function Profile() {
    const username = useContext(UserContext)
  return (
    <div>
      <h2>Hello , {username} Welcome to Dashboard</h2>
      <h3>Your Position to the systrem is Admin</h3>
    </div>
  )
}
