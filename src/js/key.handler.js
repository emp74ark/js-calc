import { getRootElement } from './root';

export function keyHandler() {
  const root = getRootElement();
  root.addEventListener('keydown', (e) => {
    const keyButton = document.getElementById(e.key);
    if (keyButton) {
      keyButton.classList.add('button_pressed');
      setTimeout(() => {
        keyButton.classList.remove('button_pressed');
      }, 300);
    }
  })
}