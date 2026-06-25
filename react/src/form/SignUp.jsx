import React, { useState } from 'react'

export default function SignUp() {
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        //backend api POST later
        console.log('Form Data', username, email, password);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                Username: <input type='text' placeholder='abc'
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                />              <br /> <br />
                Email: <input type='email' placeholder='xyz@gov'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /> <br /> <br />
                Password: <input type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /> <br /> <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
