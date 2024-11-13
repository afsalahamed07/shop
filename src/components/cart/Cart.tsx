import Card from "../products/Card";
import { useCart } from "../../App";

const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCart()

  return <div className="cart">
    {cart && cart.map((item) => <Card item={item} addToCart={removeFromCart} />)}

  </div>;
};

export default Cart;
