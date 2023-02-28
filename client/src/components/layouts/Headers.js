// rafce
import React from 'react'
// 1 
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav'

import { Container, Navbar, Nav } from 'react-bootstrap'

// router dom
import { Link } from 'react-router-dom'


import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../../store/userSlice'




const Headers = () => {
    const { user } = useSelector((state) => ({ ...state }))
    const dispatch = useDispatch()


    const navigate = useNavigate();
    // Javascript
    const handleLogout = () => {
        // code
        auth.signOut()

        dispatch(logout())

        navigate('/')
    }

    return (
        <>
            {/* HTML */}
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                    <Navbar.Toggle />

                    <Nav className="me-auto">
                        <Nav.Link>  <Link to='/'>Home</Link>     </Nav.Link>
                        <Nav.Link>  <Link to='/roitai'>Roitai</Link>     </Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link>  <Link to='/login'>Login</Link></Nav.Link>


                        <Nav.Link onClick={handleLogout}>Logout</Nav.Link>



                        {/* <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>




        </>
    )
}

export default Headers