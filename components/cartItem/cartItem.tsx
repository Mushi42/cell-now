import { Card, Button } from "react-bootstrap"

const CartItem = ({ id, img, name, price, quantity, removeFromCart, updateQuantity, onChangeQty }: any) => {

    return (
        <div className="col-4">
            <Card key={id} className="flex-row">
                <Card.Img variant="bottom" alt="product-image" src={img} loading={'lazy'} />
                <Card.Body className="card-item">
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>$ {price}</Card.Subtitle>
                    <Card.Text> <strong>Quantity :</strong><br />
                        <input type={"number"} value={quantity} onChange={onChangeQty} className="input_quantity" />
                        <Button variant="outline-warning" className="ms-2" onClick={updateQuantity}>Update Quantity</Button>
                    </Card.Text>
                    <Button variant="danger" onClick={removeFromCart}>Remove</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CartItem