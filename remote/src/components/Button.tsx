import React, { useState } from 'react'

export default function Button() {
    const [count, setCount] = useState(0)
  return (
    <button type='button' onClick={()=>{
        setCount(count +1)
    }}>{`${count} - Alo`}</button>
  )
}
