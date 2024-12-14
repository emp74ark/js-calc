import { notify } from '../layout/notifications';
import {
  mathOperators,
  messageLevel,
  messages,
  percentValue,
} from '../constants';

export function calculate(values) {
  try {
    if (/\d%/.test(values)) {
      values = values.replaceAll(percentValue, (match) => {
        return (parseInt(match.replace('%', '')) / 100);
      });
    }

    const result = new Function(`return ${ values }`)();

    if (isNaN(result) || !isFinite(result)) {
      notify(messages.invalidExpression, messageLevel.warning);
      return 0;
    }

    return result;
  } catch (error) {
    notify(messages.defaultError, messageLevel.error);
    return 0;
  }
}

export function toOpposite(values) {
  try {
    const numbers = values.replaceAll(mathOperators, '');

    const verifyLastSymbol = mathOperators.test(values.slice(-1))
      ? values.slice(0, -1)
      : values;

    if (verifyLastSymbol.length !== numbers.length && verifyLastSymbol.length >
      1) {
      return `-(${ verifyLastSymbol })`;
    }

    return verifyLastSymbol * -1;
  } catch (error) {
    notify(messages.defaultError, messageLevel.error);
    return 0;
  }
}