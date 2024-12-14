import { getRootElement } from './root';

export function notify(message, type) {
  const notificationElement = document.createElement('div');
  notificationElement.className = `notification_${ type }`;
  notificationElement.textContent = message;
  const root = getRootElement();
  root.appendChild(notificationElement);

  setTimeout(() => {
    notificationElement.remove();
  }, 1500);
}