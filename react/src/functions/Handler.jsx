import React from 'react'

export default function Handler() {
    const greetMe=()=>{
        alert('Welcome my Friend')
    }
  return (
    <div>
        <h2>Welcome to React functions</h2>
        <button onClick={()=>alert('Hello Welcome')}>SayHi</button>
        <button onClick={greetMe}>Greet</button>
    </div>
  )
}
