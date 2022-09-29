import React from 'react'
import { useSelector } from 'react-redux'


const Example = () => {
  const count = useSelector(state => state.count)
  return (
    <div>Example{count}</div>
  )

}

export default Example