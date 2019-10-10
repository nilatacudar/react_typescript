export const ADD_CATALOG = "ADD_CATALOG";
export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";

interface addCatalog {
  type: typeof ADD_CATALOG;
  payload: any;
}

interface addToBasket {
  type: typeof ADD_TO_BASKET;
  payload: string;
}

interface removeFromBasket {
  type: typeof REMOVE_FROM_BASKET;
  payload: string;
}

export type BasketActionType = addToBasket | removeFromBasket;
export type CatalogType = addCatalog;
export type ActionsType = BasketActionType | CatalogType;
