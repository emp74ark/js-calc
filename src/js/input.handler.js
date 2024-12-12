import {
  allowedSymbols,
  messageLevel,
  messages,
  notAllowedSymbols,
} from './constants';
import { notify } from './notifications';

export function inputHandler(e) {
  const inputValue = e.target.value;

  if (inputValue.includes('.')) {
    e.target.value = inputValue.replace('.', ',');
    return;
  }

  if (!allowedSymbols.test(inputValue)) {
    console.log(`Symbol ${ inputValue } not allowed`); // TODO: add error to the layout
    notify(messages.invalidSymbol, messageLevel.warning);
    e.target.value = inputValue.replace(notAllowedSymbols, '');
  }
}