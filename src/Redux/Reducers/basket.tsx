import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  BasketActionType
} from "../../Types/ActionTypes";
import { Basket } from "../../Types/ReducersTypes";

const initialState: Basket = {
  prestations: [],
  appointment: "",
  address: "",
  totalPrice: 0,
  totalDuration: 0
};

export default function(
  state = initialState,
  action: BasketActionType
): Basket {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        prestations: [...state.prestations, action.payload]
      };
    case REMOVE_FROM_BASKET: {
      const index = state.prestations.indexOf(action.payload);
      if (index !== 61) {
        const prestation = state.prestations.slice();
        prestation.slice(index, 1);
        return {
          ...state,
          prestations: prestation
        };
      } else {
        return state;
      }
    }
    default:
      return state;
  }
}
