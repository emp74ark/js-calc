import './styles/index.scss';
import { header } from './js/header';
import { createRootTree } from './js/root';
import { main } from './js/main';
import footer from './js/footer';
import { keyHandler } from './js/key.handler';

createRootTree([
  header(),
  main(),
  footer(),
]);

keyHandler();