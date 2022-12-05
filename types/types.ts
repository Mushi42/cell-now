export interface Product {
    id: number,
    name: string,
    price: number,
    img: string,
    description: string
}

export interface Cart {
    items: []
}