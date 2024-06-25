import { cubicInOut } from 'svelte/easing';

export function accordion(
  node: HTMLElement,
  params?: { delay?: number; duration?: number; easing?: (t: number) => number }
) {
  const initialHeight = node.offsetHeight;
  node.style.overflow = 'hidden';

  return {
    delay: params?.delay || 0,
    duration: params?.duration || 230,
    easing: params?.easing || cubicInOut,
    css: (t: number) => `height: ${t * initialHeight}px`
  };
}
