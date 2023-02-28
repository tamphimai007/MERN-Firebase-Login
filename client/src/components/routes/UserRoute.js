// rafce
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const UserRoute = ({ children, tam, t }) => {
    const navi = useNavigate()
    const { user } = useSelector((state) => ({ ...state }))
    console.log('Hello UserRoute', user)
    console.log('child', children)
    return user.user && user.user.token
        ? children//true
        : (<h1>No Permission...{tam}---{t}
            <button onClick={()=>navi('/login')}>Login</button>
        </h1>
        )//false
}

export default UserRoute