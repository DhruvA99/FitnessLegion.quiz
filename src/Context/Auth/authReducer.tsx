import * as actionTypes from "../ActionTypes";
import { authActionsType, authStateType } from "../ContextTypes";

const authReducer = (
  state: authStateType,
  action: authActionsType
): authStateType => {
  switch (action.type) {
    case actionTypes.AUTH_LOADING:
      return {
        ...state,
        status: "loading",
      };
    default:
      return state;
  }
};

export default authReducer;
