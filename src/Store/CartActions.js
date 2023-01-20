import { cartActions } from "./CartSlice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-6bce7-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error("Fetching Cart Data Failed");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          cartItems: cartData.cartItems || [],
          cartTotalItems: cartData.cartTotalItems,
          cartTotalAmount: cartData.cartTotalAmount,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-6bce7-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            cartItems: cart.cartItems,
            cartTotalItems: cart.cartTotalItems,
            cartTotalAmount: cart.cartTotalAmount,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Sending Cart Data Failed");
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log(error);
    }
  };
};
