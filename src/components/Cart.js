import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import appStore from "../utils/appStore";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center p-10 m-5">
      <h1 className="font-bold">Cart</h1>

      <div className="w-6/12 m-auto">
        <button
          onClick={handleClearCart}
          className="font-bold text-amber-50 bg-black rounded-lg p-2"
        >
          Clear Cart
        </button>
        <div>
          {cartItems.length === 0 && (
            <h1 className="m-2">Cart is empty. Add items to the cart!</h1>
          )}
        </div>
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
