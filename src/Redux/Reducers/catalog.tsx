import { ADD_CATALOG, CatalogType } from "../../Types/ActionTypes";
import { Catalog } from "../../Types/ReducersTypes";

export default function(state = {}, action: CatalogType): Catalog {
  switch (action.type) {
    case ADD_CATALOG:
      return action.payload;
    default:
      return state;
  }
}
