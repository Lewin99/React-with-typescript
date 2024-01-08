import { actionTypes } from "./actionTypes";

interface AddToCartAction {
  type: actionTypes.ADD_TO_CART;
  payload: {
    item: {
      id: number;
      name: string;
      price: number;
      imageUrl: string;
    };
  };
}

interface RemoveFromCartAction {
  type: actionTypes.REMOVE_FROM_CART;
  payload: {
    itemId: number;
  };
}

// Union type for all possible actions
export type CartAction = AddToCartAction | RemoveFromCartAction;

// Action creators
export const addToCart = (item: {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}): AddToCartAction => ({
  type: actionTypes.ADD_TO_CART,
  payload: { item },
});

export const removeFromCart = (itemId: number): RemoveFromCartAction => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: { itemId },
});
