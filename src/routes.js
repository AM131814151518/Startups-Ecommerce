import Home from "../src/pages/Home";
import Cart from "./pages/Cart";
import Contact from "../src/pages/Contact";
import About from "../src/pages/About";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Products from "./pages/Products";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/menu", element: <Products /> },
  { path: "/Contact", element: <Contact/> },
  { path: "/About", element: <About/> },
  { path: "/menu", element: <Products /> },
  { path: "/Product/:pid", element: <Product /> },
  { path: "/Login", element: <Login/> },
  { path: "/Cart", element: <Cart/> }
];

export default routes;
