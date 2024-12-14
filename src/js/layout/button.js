import { calculate, toOpposite } from '../utils/actions';
import { inputHandler } from '../utils/input.handler';

export function cButton(title, type, inputRef) {
  const buttonElement = document.createElement('button');
  buttonElement.innerText = title;
  buttonElement.className = `button__${ type }`;
  buttonElement.id = title !== '=' ? title : 'Enter';

  buttonElement.addEventListener('click', () => {
    switch (type) {
      case 'calculate':
        inputRef.value = calculate(inputRef.value);
        break;
      case 'opposite':
        inputRef.value = toOpposite(inputRef.value);
        break;
      case 'clear':
        inputRef.value = '';
        break;
      default:
        inputRef.value = inputHandler(inputRef.value + title);
    }

    type !== 'calculate' && inputRef?.focus();
  });
  return buttonElement;
}