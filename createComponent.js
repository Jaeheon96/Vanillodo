export default function createComponent(component) {
  const element = component().element;

  return element;
}
