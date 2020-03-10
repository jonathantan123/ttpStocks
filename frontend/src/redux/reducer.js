///// global user id set at 2 === guest
///// Admin User id ==== 1

const defaultState = {
   userId: 0,
   balance: 0 
  };
  
  function reducer(state = defaultState, action) {
      
    switch (action.type) {
      case "LOGIN":
        return { ...state, userId: action.payload.id, balance: action.payload.balance };
  
      case "UPDATEBALANCE":
        return { ...state, userId: action.payload.id, balance: action.payload.balance };
  
      // case "LOGOUT":
      //   return { ...state, user_id: 2 };
  
      // case "GET_USER_INFO":
      //   return { ...state, user_info: action.payload };
  
      // case "ADD_TO_CART":
      //   let addedItem = state.menuItems.find(item => item.id === action.payload);
  
      //   let existingItem = state.cart.find(item => item.id === action.payload);
  
      //   if (!existingItem) {
      //     addedItem.quantity = 1;
      //     return {
      //       ...state,
      //       cart: [...state.cart, addedItem]
      //     };
      //   } else {
      //     existingItem.quantity += 1;
      //     return {
      //       ...state,
      //       cart: [...state.cart]
      //     };
      //   }
  
      default:
        return state;
    }
  }
  
  export default reducer;
  