import React, { useContext } from 'react'
import { StudentContext } from './context/UserContext'

export default function StudentProfile() {
    const userProfile = useContext(StudentContext)
  return (
    <div>
      <h2>Welcome User {userProfile.name}</h2>
      <h3>DepartMent: {userProfile.department}</h3>
      <h4>Academic Level: {userProfile.level}</h4>
    </div>
  )
}
