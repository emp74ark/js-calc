import { allowedSymbols, notAllowedSymbols } from './constants';

export function inputHandler(e) {
  const inputValue = e.target.value;

  if (inputValue.includes('.')) {
    e.target.value = inputValue.replace('.', ',');
    return;
  }

  if (!allowedSymbols.test(inputValue)) {
    console.log(`Symbol ${ inputValue } not allowed`); // TODO: add error to the layout
    e.target.value = inputValue.replace(notAllowedSymbols, '');
  }

}