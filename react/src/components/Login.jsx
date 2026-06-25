import { useState } from 'react'

export default function Login() {
    const [count, setCount] = useState(0);

    const increment10=()=>{
        setCount(count+10)
    }
    
  return (
    <div>
        <h2>My Current count is {count}</h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        <button onClick={increment10}>get to 10</button>
    </div>
  )
}
