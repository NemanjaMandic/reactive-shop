import { combineReducers } from "redux";
import products, * as fromProducts from "./products";

export default combineReducers({
  products
});

//const getAddedIds = state => fromProducts.getAddedIds(state.cart)

const getProduct = (state, id) => fromProducts.getProduct(state.products, id);
