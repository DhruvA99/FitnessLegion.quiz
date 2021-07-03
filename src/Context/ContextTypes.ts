export type authStateType = {
  status: string;
  uniqueAuthId: string | null;
  userId: string | null;
  error: string | null;
};

export type authActionsType =
  | { type: "AUTH_LOADING" }
  | {
      type: "AUTH_SUCCESS";
      uniqueAuthId: string | null;
      userId: string | null;
    }
  | {
      type: "AUTH_FAILED";
      error: string | null;
    }
  | { type: "AUTH_LOGOUT" };
