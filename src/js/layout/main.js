import { cButton } from './button';
import { inputHandler } from '../utils/input.handler';

export function main() {
  const mainElement = document.createElement('main');

  const fragment = new DocumentFragment();

  const cInput = document.createElement('input');

  cInput.addEventListener('input', (e) => {
    e.target.value = inputHandler(e.target.value);
  });

  cInput.addEventListener('keydown', (e) => {
    e.preventDefault();
  });

  fragment.appendChild(cInput);

  const cButtons = [
    { title: 'AC', type: 'clear' },
    { title: '+/-', type: 'opposite' },
    { title: '%', type: 'action' },
    { title: '/', type: 'action' },
    { title: '7', type: 'number' },
    { title: '8', type: 'number' },
    { title: '9', type: 'number' },
    { title: '*', type: 'action' },
    { title: '4', type: 'number' },
    { title: '5', type: 'number' },
    { title: '6', type: 'number' },
    { title: '-', type: 'action' },
    { title: '1', type: 'number' },
    { title: '2', type: 'number' },
    { title: '3', type: 'number' },
    { title: '+', type: 'action' },
    { title: '0', type: 'null' },
    { title: '.', type: 'delimiter' },
    { title: '=', type: 'calculate' },
  ];

  const buttonsContainer = document.createElement('div');

  buttonsContainer.classList.add('buttons-container');

  cButtons.forEach(({ title, type }) => {
    const buttonElement = cButton(title, type, cInput);
    buttonsContainer.appendChild(buttonElement);
  });

  fragment.appendChild(buttonsContainer);

  mainElement.appendChild(fragment);

  return mainElement;
}