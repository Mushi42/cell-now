import { Button, Card } from "react-bootstrap"

const ProductCard = ({ id, img, name, price, description, addToCart }: any) => {

    return (
        <div className="col-4">
            <Card key={id}>
                <Card.Img variant="top" alt="product-image" src={img} loading={'lazy'} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{price}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                    <Button variant="primary" onClick={addToCart}>Add to Cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductCard