import React from 'react'
import { useSelector } from 'react-redux'

const Onemore = () => {
  const count = useSelector(state=>state.count)
  return (
    <div>Onemore{count}</div>
  )
}

export default Onemore