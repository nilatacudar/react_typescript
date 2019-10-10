import {
  ADD_CATALOG,
  CatalogType,
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  BasketActionType
} from "../Types/ActionTypes";
import { Catalog } from "../Types/ReducersTypes";

export function addCatlog(catalog: Catalog): CatalogType {
  return {
    type: ADD_CATALOG,
    payload: catalog
  };
}

export function addToBasket(prestation: string): BasketActionType {
  return {
    type: ADD_TO_BASKET,
    payload: prestation
  };
}

export function removeFromBasket(prestation: string): BasketActionType {
  return {
    type: REMOVE_FROM_BASKET,
    payload: prestation
  };
}
