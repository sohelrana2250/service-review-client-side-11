import React, { useContext } from 'react';

import { Container, Nav, Navbar, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {

    const { info } = useContext(AuthContext);

    console.log(info);



    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Image className='icon m-3' src="" alt="" />
                    <Navbar.Brand href="#home"><Button>kahoot-Eduction-Zone </Button></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link> <Link to='/'>Home</Link>   </Nav.Link>

                            <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>


                        </Nav>
                        <Nav>
                            {/* {user?.uid ? <>

                                <div>
                                    <spam className='text-danger mb-3'>{user.displayName}</spam>
                                    <Image onMouseOver={notify} className='icon m-3' src={user?.photoURL} alt="" />
                                    <Toaster />
                                    <Button variant="outline-danger" onClick={handelLogOut}>Log-Out</Button>
                                </div>

                            </> : <>
                                <Nav.Link><Link to='/login'>Login</Link></Nav.Link>
                                <Nav.Link><Link to='/register'>Register</Link></Nav.Link>
                            </>} */}

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