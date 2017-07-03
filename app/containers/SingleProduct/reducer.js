/*
 *
 * SingleProduct reducer
 *
 */

import { SINGLE_PRODUCT, RELATED_PRODUCT } from "./constants";

const initialState = {
  product: {},
  relatedProducts: []
};

function singleProductReducer(state = initialState, action) {
  let filteredProduct;
  let product;

  switch (action.type) {
    case RELATED_PRODUCT.SUCCESS:

      action.payload.map(obj => {
        if (obj.hasOwnProperty("relatedProducts")) {
          filteredProduct = obj.relatedProducts;
        } else {
          product = obj;
        }
      });
      const relatedProducts = filteredProduct.filter(
        prod => prod._id.toString() !== product._id.toString()
      );
      return {
        ...state,
        relatedProducts,
        product
      };

    default:
      return state;
  }
}

export default singleProductReducer;
