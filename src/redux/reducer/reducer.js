import { type } from "@testing-library/user-event/dist/type";

let initialState = {
  count: 0,
  id: "",
  password: "",
  count: 0,
};

function reducer(state = initialState, action) {
  if (action.type === "INCREMENT") {
    return { ...state, count: state.count + action.payload.num };
  }
  if (action.type === "LOGIN") {
    return {
      ...state,
      id: action.payload.id,
      password: action.payload.password,
    };
  }
  if (action.type === "DECREMENT") {
    return { ...state, count: state.count - 1 };
  }
  return { ...state };
}

export default reducer;
