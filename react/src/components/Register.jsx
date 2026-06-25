import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Register() {
  const [error,setError] = useState(null);
  const [users,setUsers]=useState([]);

  useEffect(()=>{
   //js codes
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res=>res.json())
   .then((data)=>setUsers(data))
   .catch((error)=>setError(error))

  },[])

  console.log(users)
  return (
    <div>
      <Link
      style={{color:'orangered', fontSize:'20px'}}
      to={'/signup'}>Get Started</Link>
      
      <p>The Error i have is {error}</p>
      <button onClick={()=>setError('login failed')}>Try This</button>
      <br />

      <div>
        <h2>List of our data</h2>
        {users.map((user)=>(
          <ol key={user.id} className='list'>
            <li> Name: {user.name}</li>
            <li>User Name: {user.username}</li>
            <li>User Email: {user.email}</li>
          </ol>
        ))}
      </div>

    </div>
  )
}
