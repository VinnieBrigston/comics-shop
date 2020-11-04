export const getAuthenticatedStatus = state => !!state.user.token;
export const getUserToken = state => state.user.token;
