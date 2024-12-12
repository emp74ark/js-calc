import { cButton } from './button';
import { calculate, toOpposite } from './actions';
import { inputHandler } from './input.handler';

export function main() {
  const mainElement = document.createElement('main');

  const fragment = new DocumentFragment();

  const cInput = document.createElement('input');

  cInput.addEventListener('input', (e) => inputHandler(e))

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
         cInput.value = toOpposite(cInput.value)
      },
    },
    {
      title: '%',
      type: 'action',
      fn: () => {
        cInput.value += '%';
      },
    },
    {
      title: '/',
      type: 'action',
      fn: () => {
        cInput.value += '/';
      },
    },
    {
      title: '7',
      type: 'number',
      fn: () => {
        cInput.value += '7';
      },
    },
    {
      title: '8',
      type: 'number',
      fn: () => {
        cInput.value += '8';
      },
    },
    {
      title: '9',
      type: 'number',
      fn: () => {
        cInput.value += '9';
      },
    },
    {
      title: 'x',
      type: 'action',
      fn: () => {
        cInput.value += '*';
      },
    },
    {
      title: '4',
      type: 'number',
      fn: () => {
        cInput.value += '4';
      },
    },
    {
      title: '5',
      type: 'number',
      fn: () => {
        cInput.value += '5';
      },
    },
    {
      title: '6',
      type: 'number',
      fn: () => {
        cInput.value += '6';
      },
    },
    {
      title: '-',
      type: 'action',
      fn: () => {
        cInput.value += '-';
      },
    },
    {
      title: '1',
      type: 'number',
      fn: () => {
        cInput.value += '1';
      },
    },
    {
      title: '2',
      type: 'number',
      fn: () => {
        cInput.value += '2';
      },
    },
    {
      title: '3',
      type: 'number',
      fn: () => {
        cInput.value += '3';
      },
    },
    {
      title: '+',
      type: 'action',
      fn: () => {
        cInput.value += '+';
      },
    },
    {
      title: '0',
      type: 'null',
      fn: () => {
        cInput.value += '0';
      },
    },
    {
      title: ',',
      type: 'delimiter',
      fn: () => {
        cInput.value += ',';
      },
    },
    {
      title: '=',
      type: 'calculate',
      fn: () => {
        cInput.value = calculate(cInput.value)
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