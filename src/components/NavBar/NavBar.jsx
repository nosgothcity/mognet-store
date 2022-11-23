import { Container, Form, Nav, Navbar } from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Mognet Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
                        <Nav.Link href="#action1">Juegos De Mesa</Nav.Link>
                        <Nav.Link href="#action2">Juegos De Cartas Coleccionables (TCG)</Nav.Link>
                        <Nav.Link href="#action1">Accesorios</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <CartWidget />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar