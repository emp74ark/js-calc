import { cButton } from './button';

export function main() {
  const mainElement = document.createElement('main');

  const fragment = new DocumentFragment();

  const cInput = document.createElement('input');

  cInput.type = 'number';

  fragment.appendChild(cInput);

  const cButtons = [
    {
      title: 'AC',
      type: 'action',
      fn: () => {
        console.log(cInput.value);
      },
    },
    {
      title: '+-',
      type: 'action',
      fn: () => {
        console.log(cInput.value);
      },
    },
    {
      title: '%',
      type: 'action',
      fn: () => {
        console.log(cInput.value);
      },
    },
    {
      title: '/',
      type: 'action',
      fn: () => {
        console.log(cInput.value);
      },
    },
    {
      title: '*',
      type: 'action',
      fn: () => {
        console.log(cInput.value);
      },
    },
    {
      title: '-',
      type: 'action',
      fn: () => {
        console.log(cInput.value);
      },
    },
    {
      title: '-',
      type: 'action',
      fn: () => {
        console.log(cInput.value);
      },
    },
    {
      title: ',',
      type: 'delimiter',
      fn: () => {
        console.log(cInput.value);
      },
    },
    {
      title: '0',
      type: 'number',
      fn: () => {
        console.log(cInput.value);
      },
    },
    {
      title: '1',
      type: 'number',
      fn: () => {
        console.log(cInput.value);
      },
    },
    {
      title: '1',
      type: 'number',
      fn: () => {
        console.log(cInput.value);
      },
    },
    {
      title: '2',
      type: 'number',
      fn: () => {
        console.log(cInput.value);
      },
    },
    {
      title: '3',
      type: 'number',
      fn: () => {
        console.log(cInput.value);
      },
    },
    {
      title: '4',
      type: 'number',
      fn: () => {
        console.log(cInput.value);
      },
    },
    {
      title: '5',
      type: 'number',
      fn: () => {
        console.log(cInput.value);
      },
    },
    {
      title: '6',
      type: 'number',
      fn: () => {
        console.log(cInput.value);
      },
    },
    {
      title: '7',
      type: 'number',
      fn: () => {
        console.log(cInput.value);
      },
    },
    {
      title: '8',
      type: 'number',
      fn: () => {
        console.log(cInput.value);
      },
    },
    {
      title: '9',
      type: 'number',
      fn: () => {
        console.log(cInput.value);
      },
    },
  ];

  const buttonsContainer = document.createElement('div');

  buttonsContainer.classList.add('buttons-container');

  cButtons.forEach(({ title, type, fn }) => {
    const buttonElement = cButton(title, type, fn);
    buttonsContainer.appendChild(buttonElement);
  });

  fragment.appendChild(buttonsContainer);

  mainElement.appendChild(fragment);

  return mainElement;
}