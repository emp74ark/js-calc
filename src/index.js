import './styles/index.scss';
import { header } from './js/layout/header';
import { createRootTree } from './js/layout/root';
import { main } from './js/layout/main';
import footer from './js/layout/footer';
import { keyHandler } from './js/utils/key.handler';

createRootTree([
  header(),
  main(),
  footer(),
]);

keyHandler();