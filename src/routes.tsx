import App from "./App";
import Cart from "./components/cart/Cart";
import Home from "./components/home/Home";
import Products from "./components/products/Products";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "cart", element: <Cart /> },
    ],
    // errorElement: <ErrorPage />,
  },
];

export default routes;
