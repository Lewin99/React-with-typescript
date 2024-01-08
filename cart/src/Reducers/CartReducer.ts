import { CartAction } from "../Actions/actions";
import { actionTypes } from "../Actions/actionTypes";

interface CartItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartReducer = (
  state: CartState = initialState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload.item],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.itemId),
      };
    default:
      return state;
  }
};

export default cartReducer;
