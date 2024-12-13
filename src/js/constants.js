export const allowedSymbols = /^[0-9+\-=*%/,.]*$/;
export const notAllowedSymbols = /[^0-9+\-=*%/]+/g;
export const repeatedZeros = /^0{2,}/
export const trailingZero = /(^0)(\d+)/

export const messages = {
  defaultError: 'Something went wrong',
  invalidExpression: 'Invalid expression',
  invalidSymbol: 'This symbol is not allowed',
  misplacedZeros: 'Some zeros are misplaced',
};

export const messageLevel = {
  error: 'error',
  warning: 'warning',
  success: 'success',
  info: 'info',
};