import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

import useCart from '../store/store';
import Header from '../components/navbar/navbar';
import CartItem from '../components/cartItem/cartItem';

const Cart = () => {
    const total = useCart((state: any) => state.total);
    const cart = useCart((state: any) => state.cartContent);
    const removeFromCart = useCart((state: any) => state.removeFromCart);
    const updateQuantity = useCart((state: any) => state.updateQuantity);

    const [myCart, setCart] = useState([]);
    const [myTotal, setTotal] = useState();
    const [itemQty, setItemQty] = useState();

    useEffect(() => {
        setCart(cart);
        setTotal(total);
    }, [cart, total]);


    const updateQuantityFunc = (item: any) => {
        console.log('item qty', itemQty)
        updateQuantity({
            id: item.id,
            quantity: itemQty,
        })
    }

    const removeItem = (item: any) => {
        removeFromCart({
            id: item.id,
            price: item.price,
            quantity: item.quantity,
        })
    }

    const onChangeQty = (e: any) => {
        console.log('value changes', e.target.value)
        setItemQty(e.target.value)
    }

    return (
        <>
            <Header />
            <div className="container border">

                <h2 className='p-3'>Shopping Cart</h2>
                {myCart && myCart.map((item: any, key: number) => (
                    <CartItem
                        key={key}
                        id={item.id}
                        name={item.name}
                        img={item.img}
                        price={item.price * item.quantity}
                        quantity={item.quantity}
                        removeFromCart={() => removeItem(item)}
                        updateQuantity={() => updateQuantityFunc(item)}
                        onChangeQty={onChangeQty} />
                ))}
                <div className="text-center my-4">
                    <br />
                    <Button variant="outline-success" onClick={() => alert('Checkout clicked')}>Checkout</Button>

                </div>
            </div>
        </>
    );
}


export default Cart