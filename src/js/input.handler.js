import {
  allowedSymbols,
  messageLevel,
  messages,
  notAllowedSymbols,
  repeatedZeros,
  trailingZero,
} from './constants';
import { notify } from './notifications';

export function inputHandler(e) {
  const inputValue = e.target.value;

  if (inputValue.includes(',')) {
    e.target.value = inputValue.replace(',', '.');
    return;
  }

  if (repeatedZeros.test(inputValue)) {
    notify(messages.misplacedZeros, messageLevel.info);
    e.target.value = inputValue.replace(repeatedZeros, '0');
  }

  if (trailingZero.test(inputValue)) {
    notify(messages.misplacedZeros, messageLevel.info);
    const matches = inputValue.match(trailingZero);
    e.target.value = inputValue.replace(matches[0], matches[2]);
  }

  if (!allowedSymbols.test(inputValue)) {
    notify(messages.invalidSymbol, messageLevel.warning);
    e.target.value = inputValue.replace(notAllowedSymbols, '');
  }
}