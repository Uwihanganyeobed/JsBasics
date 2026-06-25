import React from 'react'

export default function Parent({name,job,money}) {
  return (
    <div>
        <h1>Parent Properties</h1>
        <ol>
            <li>Parent Name is {name}</li>
            <li>Parent Job is {job}</li>
            <li>Parent Income is {money}</li>
        </ol>
    </div>
  )
}
