import HeroBanner from "../components/banner/banner"
import NavBar from "../components/navbar/navbar"
import ProductCard from "../components/productCard/productCard"
import { iPhones } from '../dummy.js'
import useCart from "../store/store"

const Home = () => {

  const addTocart = useCart((state: any) => state.addTocart);
  const updatecart = useCart((state: any) => state.updatecart);
  const mycart = useCart((state: any) => state.cartContent);

  const addProduct = (params: any) => {
    const product = mycart.findIndex((item: any) => item.id === params.id);
    if (product !== -1) {
      mycart[product].quantity++;
      updatecart({ params, mycart });
    } else {
      addTocart(params);
    }
  };

  return (
    <>
      <NavBar />
      <HeroBanner />
      <div >
        {
          iPhones.map(product => <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            img={product.img}
            description={product.description}
            addToCart={() => addProduct({
              id: product.id,
              name: product.name,
              price: product.price,
              quantity: 1,
            })} />
          )
        }
      </div>
    </>
  )
}

export default Home