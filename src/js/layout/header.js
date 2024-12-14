import { theme } from './theme';

export function header() {
  const headerElement = document.createElement('header');

  const fragment = new DocumentFragment();

  const header__title = document.createElement('h1');
  header__title.textContent = 'JSCalc';

  const headerLogo = document.createElement('div');
  headerLogo.className = 'header__logo';

  headerLogo.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 256 256">
    <path
      d="M80,120h96a8,8,0,0,0,8-8V64a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8v48A8,8,0,0,0,80,120Zm8-48h80v32H88ZM200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24Zm0,192H56V40H200ZM100,148a12,12,0,1,1-12-12A12,12,0,0,1,100,148Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,140,148Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,180,148Zm-80,40a12,12,0,1,1-12-12A12,12,0,0,1,100,188Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,140,188Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,180,188Z"
      fill='currentColor'
      >
    </path>
  </svg>
  `;
  const themeToggle = theme();

  fragment.appendChild(headerLogo);
  fragment.appendChild(header__title);
  fragment.appendChild(themeToggle);

  headerElement.appendChild(fragment);
  return headerElement;
}