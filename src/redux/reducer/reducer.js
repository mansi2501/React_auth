import * as types from "../action/actionType";

const initialState = {
  loading: false,
  currentUser: null,
};

const useReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DATA:
    case types.REGISTER_SUCCESS:
    case types.GET_SINGLE_USER:
    case types.EDIT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case types.LOGIN_USER:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default useReducer;
