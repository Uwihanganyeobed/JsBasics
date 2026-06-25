import React, { useContext } from 'react'
import { StudentContext } from './context/UserContext'

export default function StudentStats() {
    const studentData = useContext(StudentContext)
    const arrayData = studentData.marks;
    console.log(arrayData[0])
  return (
    <div>
      <h2>Welcome Again! {studentData.name},
        <br />Here is Your marks
      </h2>
      {studentData.marks.map((mk)=>(
        <ol key={mk.id}>
            <li>English: {mk.english}</li>
            <li>Maths: {mk.math}</li>
            <li>React: {mk.react}</li>
        </ol>
      ))}
    </div>
  )

}
