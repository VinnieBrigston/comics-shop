export const getLoadingStatus = state => state.auth.isLoading;
export const getAuthErrorText = state => state.auth.authError;
export const getHashValidationStatus = state => state.auth.recovery.hashIsValid;
export const checkSendingLink = state => state.auth.recovery.resetLinkIsSent;
