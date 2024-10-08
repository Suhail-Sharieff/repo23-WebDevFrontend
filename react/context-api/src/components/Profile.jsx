import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user}=useContext(UserContext)

    if(!user) return <div>Login pls</div>

  return (
    <div>
        Hola {user.userName}
    </div>
  )
}

export default Profile