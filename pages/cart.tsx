import { useEffect, useState } from 'react';

import useCart from '../store/store';
import Header from '../components/navbar/navbar';

export default function Cart() {
    const total = useCart((state: any) => state.total);
    const cart = useCart((state: any) => state.cartContent);
    const removeFromCart = useCart((state: any) => state.removeFromCart);

    const [mycart, setCart] = useState([]);
    const [mytotal, setTotal] = useState();

    useEffect(() => {
        setCart(cart);
        setTotal(total);
    }, [cart]);

    return (
        <>
            <Header />
            <div className="">MY CART</div>
            <div className="">
                <div className="">
                    <span className="">Product</span>
                    <span className="">
                        Price
                    </span>
                    <span className="">Qty</span>
                    <span className=""></span>
                </div>
                {mycart.map((item: any, key: number) => (
                    <div key={key} className="">
                        <span className="">{item.name}</span>
                        <span className="">
                            $ {item.price * item.quantity}
                        </span>
                        <span className="">{item.quantity}</span>
                        <span className="">
                            <button
                                className="p-2"
                                onClick={() =>
                                    removeFromCart({
                                        id: item.id,
                                        price: item.price,
                                        quantity: item.quantity,
                                    })
                                }
                            >
                                X
                            </button>
                        </span>
                    </div>
                ))}
                <div className="">
                    <span className="">
                        Total: ${mytotal}
                    </span>
                </div>
            </div>
        </>
    );
}
