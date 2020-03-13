///// global user id set at 0 === guest


const defaultState = {
  userId: 0,
  balance: 0
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        userId: action.payload.id,
        balance: action.payload.balance
      };

    case "UPDATEBALANCE":
      return { ...state, balance: action.payload };

    case "LOGOUT":
      return { ...state, userId: 0 };

    default:
      return state;
  }
}

export default reducer;
