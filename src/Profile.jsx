import React from 'react'
import { useDispatch } from 'react-redux'

const Profile = () => {
    const dispatch = useDispatch()
  return (
    <>
    <div>Profile</div>
    <button onClick={()=>dispatch({type : 'logout'})}>Logout</button>
    </>
  )
}

export default Profile