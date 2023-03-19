
import './header.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (<div className="Header">
        <Navbar collapseOnSelect expand="md" variant="dark" fixed='top'>
            <Container>
                <Navbar.Brand as={Link} to="/">DD Comp Builder</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className='me-auto'>

                    </div>
                    <Nav >
                        <Nav.Link as={Link} to="/builder">Comp Builder</Nav.Link>
                        <Nav.Link as={Link} to="/stats">Heroes</Nav.Link>
                        <Nav.Link as={Link} to="/about">More</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>)
}

export default Header;