import React, { useEffect, useState } from 'react'

export default function View() {
    const [courses, setcourses] = useState([])


    const fatchData = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/courses")
            const data = await res.json()
            setcourses(data.results);
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fatchData()
    }, [])

    console.log(courses)
    return (
        <div>
            <h1> courses list</h1>
            {courses.map((c) => (
                <ol key={c.courseId}>
                    <li> {c.courseName}</li>
                    <li> {c.courseDepartment}</li>
                </ol>
            ))}

        </div>
    )
}
