import {
  allowedSymbols,
  messageLevel,
  messages,
  notAllowedSymbols,
  repeatedDelimiter,
  repeatedOperator,
  repeatedZeros,
  trailingDelimiter,
  trailingOperator,
  trailingZero,
} from '../constants';
import { notify } from '../layout/notifications';

export function inputHandler(inputValue) {
  try {
    if (trailingDelimiter.test(inputValue)) {
      notify(messages.misplacedDelimiter, messageLevel.info);
      const matches = inputValue.match(trailingDelimiter);
      return inputValue.replace(matches[0], '');
    }

    if (repeatedDelimiter.test(inputValue)) {
      notify(messages.misplacedDelimiter, messageLevel.info);
      return inputValue.replace(repeatedDelimiter, '');
    }

    if (inputValue.includes(',')) {
      return inputValue.replace(',', '.');
    }

    if (repeatedOperator.test(inputValue)) {
      notify(messages.misplacedOperator, messageLevel.info);
      return inputValue.replace(repeatedOperator, inputValue.slice(-1));
    }

    if (trailingOperator.test(inputValue)) {
      notify(messages.misplacedOperator, messageLevel.info);
      return inputValue.replace(trailingOperator, '');
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