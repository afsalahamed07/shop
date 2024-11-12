import { useOutletContext } from "react-router-dom";

import Card from "../products/Card";
import Item from "../products/item";
import { useCart } from "../../App";

const Cart: React.FC = () => {
  const { cart } = useCart()

  function test() {
    console.log("hit")
  }
  return <div className="cart">
    {cart && cart.map((item) => <Card item={item} addToCart={test} />)}

  </div>;
};

export default Cart;
