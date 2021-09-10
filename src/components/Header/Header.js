import React,{ useContext} from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {name} = loggedInUser;

    return (
        <div className="container header d-flex justify-content-between">
            <nav>
                <h2>Ride Share</h2>
            </nav>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
                {
                    loggedInUser.name ? name : <Link to="/login"><Button variant="danger">Log In</Button></Link>
                }
            </nav>
        </div>
            // <Container>
            //     <Navbar bg="light" variant="light">
            //         <Container className="ms-5 me-5">
            //             <Navbar.Brand href="#home">Ride Share</Navbar.Brand>
            //             <Nav className="justify-content-end">
            //                 <Link to="/home">Home</Link>
            //                 {/* <Nav.Link href="/destination">Destination</Nav.Link> */}
            //                 <Nav.Link href="#blog">Blog</Nav.Link>
            //                 <Nav.Link href="#contact">Contact</Nav.Link>
            //                 {
            //                     (loggedInUser) ? name : <Link to="/login"><Button variant="success">Log In</Button></Link>
            //                 }
            //             </Nav>
            //         </Container>
            //     </Navbar>
            // </Container>
    );
};

export default Header;