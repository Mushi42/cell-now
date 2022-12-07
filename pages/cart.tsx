import { useEffect, useState } from 'react';

import useCart from '../store/store';
import Header from '../components/navbar/navbar';
import CartItem from '../components/cartItem/cartItem';
import { Button } from 'react-bootstrap';

const Cart = () => {
    const total = useCart((state: any) => state.total);
    const cart = useCart((state: any) => state.cartContent);
    const removeFromCart = useCart((state: any) => state.removeFromCart);

    const [mycart, setCart] = useState([]);
    const [mytotal, setTotal] = useState();

    useEffect(() => {
        setCart(cart);
        setTotal(total);
    }, [cart, total]);

    return (
        <>
            <Header />
            <div className="container border">

                <h2 className='p-3'>Shopping Cart</h2>
                {mycart && mycart.map((item: any, key: number) => (
                    <CartItem
                        key={key}
                        id={item.id}
                        name={item.name}
                        img={item.img}
                        price={item.price * item.quantity}
                        quantity={item.quantity}
                        removeFromCart={() =>
                            removeFromCart({
                                id: item.id,
                                price: item.price,
                                quantity: item.quantity,
                            })
                        } />
                ))}
                <div className="text-end my-4">
                    <span className="me-2">
                        <strong>Total: ${mytotal}</strong>
                    </span>
                    <br />
                    <Button variant="success" onClick={() => alert('')}>Checkout</Button>

                </div>
            </div>
        </>
    );
}


export default Cart