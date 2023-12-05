export const productState = {
  products: null,
  
};

export const productReducer = (state, action) => {
  switch (action.type) {
    /* Get all product */
    case "fetchProductsAndChangeState":
      return {
        ...state,
        products: action.payload,
      }; 
    
    default:
      return state;
  }
};
