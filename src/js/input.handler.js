import {
  allowedSymbols,
  messageLevel,
  messages,
  notAllowedSymbols,
  repeatedDelimiter,
  repeatedZeros,
  trailingDelimiter,
  trailingZero,
} from './constants';
import { notify } from './notifications';

export function inputHandler(inputValue) {
  try {
    if (repeatedDelimiter.test(inputValue)) {
      notify(messages.misplacedDelimiter, messageLevel.info);
      return inputValue.replace(repeatedDelimiter, '');
    }

    if (trailingDelimiter.test(inputValue)) {
      notify(messages.misplacedDelimiter, messageLevel.info);
      const matches = inputValue.match(trailingDelimiter);
      return inputValue.replace(matches[0], '');
    }

    if (inputValue.includes(',')) {
      return inputValue.replace(',', '.');
    }

    if (repeatedZeros.test(inputValue)) {
      notify(messages.misplacedZeros, messageLevel.info);
      return inputValue.replace(repeatedZeros, '0');
    }

    if (trailingZero.test(inputValue)) {
      notify(messages.misplacedZeros, messageLevel.info);
      const matches = inputValue.match(trailingZero);
      return inputValue.replace(matches[0], matches[2]);
    }

    if (!allowedSymbols.test(inputValue)) {
      notify(messages.invalidSymbol, messageLevel.warning);
      return inputValue.replace(notAllowedSymbols, '');
    }

    return inputValue;
  } catch (error) {
    notify(messages.defaultError, messageLevel.error);
  }
}