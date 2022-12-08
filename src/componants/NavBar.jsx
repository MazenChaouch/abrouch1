import { Button, Container, Nav, Navbar } from "react-bootstrap"
const NavBar = () => {
    return (
        <div >
        <Navbar className="navbar" variant="dark" collapseOnSelect expand="lg" >
        <Container>
            <Navbar.Brand className="text-white fw-bold" >
                <Nav className="text-white d-block">Amrouch</Nav>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" className="text-white d-block">Accueil</Nav.Link>
                   
                        <Nav.Link href="/contact" className="text-white d-block">Contact</Nav.Link>
                    
                        <Nav.Link href="/apropos" className="text-white d-block">A propos</Nav.Link>
                    </Nav>
                    <Nav >
                       <Nav.Link href='/login'><Button variant="outline-light" bg="dark">Login</Button></Nav.Link>
                       <Nav.Link href='/signin'><Button variant="outline-light" bg="dark">SignIn</Button></Nav.Link> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}
export default NavBar;