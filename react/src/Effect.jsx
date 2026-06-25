import React, { useEffect, useState } from 'react'

export default function Effect() {

    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleFetchData = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/comments')
            const data = await res.json()
            setComments(data)
            setError(null)
            setLoading(false)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)

        }
    }

    useEffect(() => {
        handleFetchData()
    }, [])
    console.log(comments)

    if (error) return <h2> Error; {error}</h2>
    if (loading) return <h2>Loading .........</h2>

    return (
        <div>
            {comments.map((comment) => (
                <div className='comment-card' key={comment.id}>

                    <div className='comment-header'>
                        <h3>{comment.name}</h3>
                        <span># jason stalin</span>
                    </div>
                    <p className='email'>{comment.email}</p>
                    <div className="comment-body">
                        <p>{comment.body}</p>
                    </div>
                </div>
            ))}
        </div>

    )
}
