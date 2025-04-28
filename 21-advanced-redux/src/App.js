import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const dispatch = useDispatch();

  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!",
        })
      );
      const response = await fetch(
        "https://[redacted].firebaseio.com/cart.json",
        {
          method: "PUT", // this will overwrite the existing data
          body: JSON.stringify(cart),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    } // this prevents the first render from sending a request

    // catch any errors that occur in the async function
    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed.",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <>
      <Notification
        status={notification.status}
        title={notification.title}
        message={notification.message}
      />
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
