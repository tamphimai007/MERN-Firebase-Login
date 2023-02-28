// rafce
import React from 'react'
import { Container, Button } from 'react-bootstrap'

// firebase
import { auth, googleAuthProvider } from '../firebase'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../../store/userSlice'

import { createAndUpdateUser } from '../functions/auth'

const Login = () => {
  const { user } = useSelector((state) => ({ ...state }))
  const dispatch = useDispatch()


  console.log(user.value)




  const handleLoginByGoogle = async () => {
    // code
    auth.signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        //code return data from server
       // console.log('result', result)
        const { user } = result
        const idToken = await user.getIdTokenResult();
        //console.log(user.email, idToken.token)

        createAndUpdateUser(idToken.token)
        .then((res)=>{
          //code
          dispatch(login({
            email: res.data.email,
            name: res.data.name,
            token: idToken.token
          }))
        })
        .catch((err)=>console.log(err))

      })
      .catch((err) => {
        // err
        console.log(err)
      })



  }


  return (
    <Container>
      <h1>{user.value}</h1>
      <Button onClick={handleLoginByGoogle}>SignIn Google</Button>

      <hr />
      <Button onClick={() => dispatch(login())}>Login</Button>
      <Button onClick={() => dispatch(logout())}>Logout</Button>


    </Container>
  )
}

export default Login