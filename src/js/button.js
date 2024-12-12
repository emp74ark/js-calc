export function cButton(title, type, onClick) {
  const buttonElement = document.createElement('button');
  buttonElement.innerText = title;
  buttonElement.className = `button__${type}`;
  buttonElement.addEventListener('click', onClick);
  return buttonElement;
}