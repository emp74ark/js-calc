import { getRootElement } from '../layout/root';
import { calculate } from './actions';
import { inputHandler } from './input.handler';

export function keyHandler() {
  const root = getRootElement();
  root.addEventListener('keydown', (e) => {
    const key = e.key === ',' ? '.' : e.key;

    const keyButton = document.getElementById(key);

    const cInput = document.querySelector('input');

    if (e.key === 'Backspace') {
      cInput.value = cInput.value.slice(0, -1);
    }

    if (e.key === 'Escape') {
      cInput.value = '';
    }

    if (keyButton) {
      if (e.key !== 'Enter') {
        const newValue = cInput.value + e.key;
        cInput.value = inputHandler(newValue);
      }

      if (e.key === 'Enter') {
        cInput.value = calculate(cInput.value);
      }

      keyButton.classList.add('button_pressed');

      setTimeout(() => {
        keyButton.classList.remove('button_pressed');
      }, 300);
    }
  });
}