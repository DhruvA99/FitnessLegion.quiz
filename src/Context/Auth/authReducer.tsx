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
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        status: "normal",
        uniqueAuthId: null,
        userId: null,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        status: "authSuccess",
        uniqueAuthId: action.uniqueAuthId,
        userId: action.userId,
        error: null,
      };
    case actionTypes.AUTH_FAILED:
      return {
        ...state,
        status: "authFailed",
        error: action.error,
      };
    default:
      return state;
  }
};

export default authReducer;
