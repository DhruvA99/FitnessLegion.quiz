export type authStateType = {
  status: string;
  uniqueAuthId: string | null;
  userId: string | null;
};

export type authActionsType = { type: "AUTH_LOADING" };
