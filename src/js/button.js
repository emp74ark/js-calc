export function cButton(title, type, onClick, inputRef) {
  const buttonElement = document.createElement('button');
  buttonElement.innerText = title;
  buttonElement.className = `button__${ type }`;
  buttonElement.id = title !== '=' ? title : 'Enter';
  buttonElement.addEventListener('click', () => {
    onClick();
    type !== 'calculate' && inputRef?.focus();
  });
  return buttonElement;
}