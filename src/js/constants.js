export const allowedSymbols = /^[0-9+\-=*%/,.]*$/;
export const notAllowedSymbols = /[^0-9+\-=*%/]+/g;

export const messages = {
  defaultError: 'Something went wrong',
  invalidExpression: 'Invalid expression',
};

export const messageLevel = {
  error: 'error',
  warning: 'warning',
  success: 'success',
  info: 'info',
};