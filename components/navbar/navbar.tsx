import { useState } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { AiOutlineShoppingCart } from 'react-icons/ai'

const NavBar = ({ }) => {

    const [itemCount, setItemCount] = useState<number>(0)

    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">Cell Now</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/cart">Products</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <AiOutlineShoppingCart size={24} /> {itemCount}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar