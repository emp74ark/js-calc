export function header() {
  const headerElement = document.createElement('header');
  const header__title = document.createElement('h1')
  header__title.textContent = 'Simple JS Calculator';
  headerElement.appendChild(header__title);
  return headerElement;
}