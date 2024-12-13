import { getRootElement } from './root';
import { calculate } from './actions';

export function keyHandler() {
  const root = getRootElement();
  root.addEventListener('keydown', (e) => {

    const keyButton = document.getElementById(e.key);

    const cInput = document.querySelector('input');

    if (keyButton) {
      if (e.key !== 'Enter') {
        cInput.value += e.key;
      }

      if (e.key === 'Enter') {
        cInput.value = calculate(cInput.value)
      }

      keyButton.classList.add('button_pressed');

      setTimeout(() => {
        keyButton.classList.remove('button_pressed');
      }, 300);
    }
  });
}