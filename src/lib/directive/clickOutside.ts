export function clickOutside(node: HTMLElement) {
  const handleClick = (event: MouseEvent) => {
    if (node && !node.contains(event.target as HTMLElement) && !event.defaultPrevented) {
      node.dispatchEvent(new CustomEvent<HTMLElement>('clickOutside', { detail: node }));
    }
  };

  document.addEventListener('click', handleClick, true);

  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    }
  };
}
