import React from 'react'
import { useDispatch } from 'react-redux'


const Login = () => {
    const dispatch = useDispatch()
  return (
    <button onClick={()=>dispatch({type : 'login'})}>Login</button>
  )
}

export default Login