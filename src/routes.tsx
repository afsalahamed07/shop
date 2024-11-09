import App from "./App";
import Home from "./components/home/Home";
import Products from "./components/products/Products";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
    ],
    // errorElement: <ErrorPage />,
  },
];

export default routes;
