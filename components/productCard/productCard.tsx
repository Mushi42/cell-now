import { Button, Card } from "react-bootstrap"
import { Product } from "../../types/types"

const ProductCard = ({ id, img, name, price, description }: Product) => {

    return (
        <Card key={id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{price}</Card.Text>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard