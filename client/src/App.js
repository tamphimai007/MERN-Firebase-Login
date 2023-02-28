import logo from './logo.svg';
import './App.css';
import Headers from './components/layouts/Headers';

// Router-dom
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

// Pages
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Roitai from './components/pages/Roitai';


// Check user login
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './store/userSlice';
import { auth } from './components/firebase';
// function
import { currentUser } from './components/functions/auth';
// routes
import UserRoute from './components/routes/UserRoute';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // code
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      // code
      if (user) {
        // code
        const idToken = await user.getIdTokenResult()
        //console.log('idToken', idToken.token)
        //console.log('hello useEffect', user.email)


        currentUser(idToken.token)
          .then((res) => {
            console.log('res', res.data)
            // go redux
            dispatch(login({
              email: res.data.email,
              name: res.data.name,
              token: idToken.token
            }))
          })
          .catch((err) => console.log(err))




      }
    })

    return () => unsubscribe();

  }, [])

  const roitai = 'สวัสดีครับ'

  return (
    <>
      <BrowserRouter>
        <Headers />

        <Routes>

          <Route
            path='/'
            element={<Home />}>

          </Route>

          <Route
            path='/login'
            element={<Login />}
          >
          </Route>

          {/* Private */}
          <Route
            path='/roitai'
            element={
              <UserRoute tam='สวัสดีครับ' t="อิอิ">
                <Roitai />
              </UserRoute>

            }
          >
          </Route>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
