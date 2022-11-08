import React, { useContext } from 'react';

import { Container, Nav, Navbar, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import './Header.css'


const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user?.email);
    console.log(user?.photoURL);



    const handelLogout = () => {
        logOut().then(() => {

        }).catch((error) => {
            console.log(error.message);
        })

    }





    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><Button>kahoot-Eduction-Zone </Button></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link> <Link to='/'>Home</Link>   </Nav.Link>
                            <Nav.Link><Link to='/review'>Review</Link></Nav.Link>
                            <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>


                        </Nav>
                        <Nav>
                            {user?.uid ? <>

                                <div>
                                    <spam className='text-danger mb-3'>{user.displayName}</spam>
                                    <Image className='icon m-3' src={user?.photoURL} alt="" />

                                    <Button variant="outline-danger" onClick={handelLogout}>Log-Out</Button>
                                </div>

                            </> : <>
                                <Nav.Link><Link to='/login'>Login</Link></Nav.Link>
                                <Nav.Link><Link to='/register'>Register</Link></Nav.Link>
                            </>}

                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="outline-primary">  dark/Light</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;