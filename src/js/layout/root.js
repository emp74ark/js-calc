export function getRootElement() {
  return document.getElementById('root');
}

export function createRootTree(elements) {
  for (let element of elements) {
    getRootElement().appendChild(element);
  }
}