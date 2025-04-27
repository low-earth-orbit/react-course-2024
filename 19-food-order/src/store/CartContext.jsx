import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items]; // creates a copy of the old items array

    // if not exist, findIndex will return -1
    if (existingItemIndex > -1) {
      const existingItem = state.items[existingItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingItemIndex] = updatedItem; // update the existing item
    } else {
      updatedItems.push({ ...action.item, quantity: 1 }); // push the new item with quantity 1
    }

    return {
      ...state,
      items: updatedItems, // return the updated items array
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    if (existingItemIndex === -1) {
      return state; // if the item is not found, return the current state
    }

    const existingItem = state.items[existingItemIndex];

    const updatedItems = [...state.items]; // creates a copy of the old items array

    if (existingItem.quantity === 1) {
      updatedItems.splice(existingItemIndex, 1); // remove the item from the array
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItems[existingItemIndex] = updatedItem; // update the existing item
    }

    return {
      ...state,
      items: updatedItems, // return the updated items array
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      items: [],
    };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
  });

  const cartContext = {
    items: cart.items,
    addItem: (item) => {
      dispatchCartAction({ type: "ADD_ITEM", item });
    },
    removeItem: (id) => {
      dispatchCartAction({ type: "REMOVE_ITEM", id });
    },
    clearCart: () => {
      dispatchCartAction({ type: "CLEAR_CART" });
    },
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
