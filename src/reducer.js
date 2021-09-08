export const initialState = {
  basket: [
    {
      id: "123456",
      title:
        "Westt Torque Z Casque Moto Modulable Double Visière pour Scooter Chopper - Casque de Moto Homme et Femme en Noir Mat - ECE Homologué Homme",
      image: "https://www.amazon.fr/images/I/71m5qpW3XaL._AC_SL1500_.jpg",
      price: 56.99,
      rating: 3,
    },
  ],
  user: null,
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
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
      break;
    default:
      return state;
  }
}

export default reducer;
