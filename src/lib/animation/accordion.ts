export function accordion(node: HTMLElement, isOpen: boolean) {
  const initialHeight = node.offsetHeight;
  node.style.height = isOpen ? 'auto' : '0px';
  node.style.overflow = 'hidden';
  return {
    update(isOpen: boolean) {
      const animation = node.animate(
        [
          {
            height: initialHeight + 'px',
            opacity: 1,
            overflow: 'hidden'
          },
          {
            height: 0,
            opacity: 0,
            overflow: 'hidden'
          }
        ],
        { duration: 230, easing: 'cubic-bezier(0.65,0.05,0.36,1)', fill: 'both' }
      );
      animation.pause();
      if (!isOpen) {
        animation.play();
      } else {
        animation.reverse();
      }
    }
  };
}
