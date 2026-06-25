import React from 'react'
import Parent from './Parent'

export default function Child() {
  return (
    <div>
        <p>Hello This is Child Comp</p>
        <Parent money={200000} name={'Kalisa'} job={'Accountant'} />
    </div>
  )
}
