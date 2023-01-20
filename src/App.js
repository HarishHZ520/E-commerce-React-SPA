import { useEffect } from "react";

import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Shop from "./Components/Shop/Shop";
import Contact from "./Components/Contact/Contact";
import Cart from "./Components/Cart/Cart";
import Root from "./Root";
import Saree from "./Components/Shop/Categories/Saree/Saree";
import Salwar from "./Components/Shop/Categories/Salwar/Salwar";
import Sandal from "./Components/Shop/Categories/Sandal/Sandal";
import Login from "./Components/Login/Login";
import ErrorPage from "./Pages/Error";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import { useSelector } from "react-redux";
import { fetchCartData, sendCartData } from "./Store/CartActions";
import { useDispatch } from "react-redux";
import Checkout from "./Components/Checkout/Checkout";
import ProductItems from "./Components/Shop/Categories/ProductItems";

import RootStore from "./RootStore";
import PlaceOrder from "./Components/Checkout/PlaceOrder";
import Confirm from "./Components/Checkout/Confirm";

let isInitial = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "store",
        element: <RootStore />,
        children: [
          { index: true, element: <Shop /> },
          { path: "sarees", element: <Saree /> },
          { path: "salwars", element: <Salwar /> },
          { path: "sandals", element: <Sandal /> },
          { path: ":type/:id", element: <ProductItems /> },
        ],
      },
      { path: "contact", element: <Contact /> },
      { path: "cart", element: <Cart /> },
      { path: "/login", element: <Login /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/placeorder", element: <PlaceOrder /> },
      { path: "/confirm", element: <Confirm /> },
    ],
  },
]);

const App = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return <RouterProvider router={router} />;
};

export default App;
