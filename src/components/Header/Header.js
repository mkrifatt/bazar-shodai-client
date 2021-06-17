import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser, ] = useContext(UserContext);
    const {id,name} = loggedInUser;
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">Bazar Shodai</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
                            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                            <Nav.Link as={Link} to="/deals">Deals</Nav.Link>
                        </Nav>
                        {
                            loggedInUser.name|| loggedInUser.email
                            ?<Nav.Link  className="user">{name}</Nav.Link>   
                            : <Button variant="success" as={Link} to="/login" className="btn btn-success" >Log In</Button>  
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;