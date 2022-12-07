import { Card, Button } from "react-bootstrap"

const CartItem = ({ id, img, name, price, quantity, removeFromCart }: any) => {

    return (
        <div className="col-4">
            <Card key={id} className="flex-row">
                <Card.Img variant="bottom" alt="product-image" src={img} loading={'lazy'} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>{price}</Card.Subtitle>
                    <Card.Text> Qunatity : {quantity}</Card.Text>
                    <Button variant="danger" onClick={removeFromCart}>Remove</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CartItem