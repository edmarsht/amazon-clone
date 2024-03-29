export const initialState = {
  basket: [

  ],
  user: null,
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

      case 'EMPTY_BASKET':
        return {
          ...state, 
          basket: []
        };

    case "REMOVE_FROM_BASKET":
      //Logic for removing item from basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // Item exists in basket, remove it...
        newBasket.splice(index, 1);
      } else {
        console.warn("Can't remove product");
      }

      return { ...state, basket: newBasket };

      case "SET_USER":
        return {
          ...state,
          user: action.user
        }




    
    default:
      return state;
  }
}

export default reducer;
