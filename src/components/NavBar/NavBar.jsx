import { Link, NavLink } from 'react-router-dom'
import { Container, Form, Nav, Navbar } from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">Mognet Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
                        <NavLink className='nav-link' to="/category/juegos-de-mesa">Juegos De Mesa</NavLink>
                        <NavLink className='nav-link' to="/category/juegos-de-cartas-coleccionables">Juegos De Cartas Coleccionables (TCG)</NavLink>
                        <NavLink className='nav-link' to="/category/accesorios">Accesorios</NavLink>
                    </Nav>
                    <Form className="d-flex">
                        <Link className='btn btn-outline-primary' to="/cart">
                            <CartWidget/>
                        </Link>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar