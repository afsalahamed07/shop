import Product from "../products/Product";

type CartProducts = {
  products: Product[];
};

const Cart: React.FC<CartProducts> = ({ products }) => {
  return <div className="cart"></div>;
};

export default Cart;
