import { cButton } from './button';
import { calculate, toOpposite } from '../utils/actions';
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
    {
      title: 'AC',
      type: 'action',
      fn: () => {
        cInput.value = '';
      },
    },
    {
      title: '+/-',
      type: 'action',
      fn: () => {
        cInput.value = toOpposite(cInput.value);
      },
    },
    {
      title: '%',
      type: 'action',
      fn: () => {
        const newValue = cInput.value + '%';
        cInput.value = inputHandler(newValue);
      },
    },
    {
      title: '/',
      type: 'action',
      fn: () => {
        const newValue = cInput.value + '/';
        cInput.value = inputHandler(newValue);
      },
    },
    {
      title: '7',
      type: 'number',
      fn: () => {
        const newValue = cInput.value + '7';
        cInput.value = inputHandler(newValue);
      },
    },
    {
      title: '8',
      type: 'number',
      fn: () => {
        const newValue = cInput.value + '8';
        cInput.value = inputHandler(newValue);
      },
    },
    {
      title: '9',
      type: 'number',
      fn: () => {
        const newValue = cInput.value + '9';
        cInput.value = inputHandler(newValue);
      },
    },
    {
      title: '*',
      type: 'action',
      fn: () => {
        const newValue = cInput.value + '*';
        cInput.value = inputHandler(newValue);
      },
    },
    {
      title: '4',
      type: 'number',
      fn: () => {
        const newValue = cInput.value + '4';
        cInput.value = inputHandler(newValue);
      },
    },
    {
      title: '5',
      type: 'number',
      fn: () => {
        const newValue = cInput.value + '5';
        cInput.value = inputHandler(newValue);
      },
    },
    {
      title: '6',
      type: 'number',
      fn: () => {
        const newValue = cInput.value + '6';
        cInput.value = inputHandler(newValue);
      },
    },
    {
      title: '-',
      type: 'action',
      fn: () => {
        const newValue = cInput.value + '-';
        cInput.value = inputHandler(newValue);
      },
    },
    {
      title: '1',
      type: 'number',
      fn: () => {
        const newValue = cInput.value + '1';
        cInput.value = inputHandler(newValue);
      },
    },
    {
      title: '2',
      type: 'number',
      fn: () => {
        const newValue = cInput.value + '2';
        cInput.value = inputHandler(newValue);
      },
    },
    {
      title: '3',
      type: 'number',
      fn: () => {
        const newValue = cInput.value + '3';
        cInput.value = inputHandler(newValue);
      },
    },
    {
      title: '+',
      type: 'action',
      fn: () => {
        const newValue = cInput.value + '+';
        cInput.value = inputHandler(newValue);
      },
    },
    {
      title: '0',
      type: 'null',
      fn: () => {
        const newValue = cInput.value + '0';
        cInput.value = inputHandler(newValue);
      },
    },
    {
      title: ',',
      type: 'delimiter',
      fn: () => {
        const newValue = cInput.value + '.';
        cInput.value = inputHandler(newValue);
      },
    },
    {
      title: '=',
      type: 'calculate',
      fn: () => {
        cInput.value = calculate(cInput.value);
      },
    },
  ];

  const buttonsContainer = document.createElement('div');

  buttonsContainer.classList.add('buttons-container');

  cButtons.forEach(({ title, type, fn }) => {
    const buttonElement = cButton(title, type, fn, cInput);
    buttonsContainer.appendChild(buttonElement);
  });

  fragment.appendChild(buttonsContainer);

  mainElement.appendChild(fragment);

  return mainElement;
}