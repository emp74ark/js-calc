import {
  allowedSymbols,
  messageLevel,
  messages,
  notAllowedSymbols,
  repeatedZeros,
} from './constants';
import { notify } from './notifications';

export function inputHandler(e) {
  const inputValue = e.target.value;

  if (inputValue.includes(',')) {
    e.target.value = inputValue.replace(',', '.');
    return;
  }

  if (repeatedZeros.test(inputValue)) {
    notify(messages.repeatedZeros, messageLevel.info);
    e.target.value = inputValue.replace(repeatedZeros, '0');
  }

  if (!allowedSymbols.test(inputValue)) {
    notify(messages.invalidSymbol, messageLevel.warning);
    e.target.value = inputValue.replace(notAllowedSymbols, '');
  }
}