import { useEffect, useState } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { AiOutlineShoppingCart } from 'react-icons/ai'

import useCart from "../../store/store";

const NavBar = ({ }) => {

    const total = useCart((state: any) => state.total);
    const totalqty = useCart((state: any) => state.totalqty);

    const clearCart = useCart((state: any) => state.clearCart);
    const [mytotal, setTotal] = useState();
    const [mytotalqty, setTotalqty] = useState();

    useEffect(() => {
        setTotal(total);
        setTotalqty(totalqty);
    }, [total]);

    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">Cell Now</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    {/* <Nav.Link href="/cart">Products</Nav.Link> */}
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href="/cart">
                        <Navbar.Text>
                            <AiOutlineShoppingCart size={24} /> {totalqty}
                        </Navbar.Text></Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar