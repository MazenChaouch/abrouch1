import { Button, Container, Nav, Navbar } from "react-bootstrap"
const NavBarAdmin = () => {
    return (
        <div >
            <Navbar className="navbar" variant="dark" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand className="text-white fw-bold" >
                        <Nav className="text-white d-block">Abrouch</Nav>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/admin/fourniseur" className="text-white d-block">Fourniseur</Nav.Link>

                            <Nav.Link href="/admin/produit" className="text-white d-block">Produit</Nav.Link>

                            <Nav.Link href="/admin/demandeachat" className="text-white d-block">Demande d'achat</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/login"><Button variant="outline-light" type="submit">Déconnexion</Button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default NavBarAdmin;