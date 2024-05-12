<script lang="ts">
  import Cube0 from './Cube0.svelte';
  import Cube1 from './Cube1.svelte';
  import Cube2 from './Cube2.svelte';
  import Cube3 from './Cube3.svelte';
  import Cube4 from './Cube4.svelte';
</script>

<section>
  <div class="cube-0">
    <Cube0 />
  </div>
  <div class="cube-1">
    <Cube1 />
  </div>
  <div class="cube-2">
    <Cube2 />
  </div>
  <div class="cube-3">
    <Cube3 />
  </div>
  <div class="cube-4">
    <Cube4 />
  </div>
</section>

<style>
  section {
    isolation: isolate;
    position: relative;
    margin: 20rem;
    --duration: 12s;
  }

  .cube-0 {
    --size: 10rem;
    position: relative;
    width: var(--size);
    height: var(--size);
    z-index: 5;
  }

  .cube-1,
  .cube-2,
  .cube-3,
  .cube-4 {
    width: 70%;
    position: absolute;
    bottom: 0;
    left: 0;
    animation:
      orbit var(--duration) ease-in-out infinite,
      orbit-z var(--duration) step-end infinite;
  }

  .cube-1 {
    --bottom-front: -3.1rem, 7.4rem;
    --top-front: -3.1rem, -5.3rem;
    --top-back: 4.2rem, -10.2rem;
    --bottom-back: 4.2rem, 1.8rem;
    --z-front: 7;
    --z-top-front: 7;
    --z-back: 2;
    animation-delay: calc(-0.25 * var(--duration));
  }

  .cube-2 {
    --bottom-front: -3rem, 7.2rem;
    --top-front: -3rem, -5.3rem;
    --top-back: 4.2rem, -10.2rem;
    --bottom-back: 4.2rem, 2rem;
    --z-front: 8;
    --z-top-front: 8;
    --z-back: 1;
  }

  .cube-3 {
    --bottom-front: -3rem, 10.5rem;
    --top-front: -3rem, -5.3rem;
    --top-back: 4.2rem, -10.2rem;
    --bottom-back: 4.2rem, 5.3rem;
    --z-front: 6;
    --z-top-front: 6;
    --z-back: 3;
    animation-delay: calc(-0.5 * var(--duration));
  }

  .cube-4 {
    --bottom-front: -3.1rem, 7.4rem;
    --top-front: -3.1rem, -5.3rem;
    --top-back: 4.2rem, -10.2rem;
    --bottom-back: 4.2rem, 1.8rem;
    --z-front: 8;
    --z-top-front: 5;
    --z-back: 4;
    animation-delay: calc(-0.75 * var(--duration));
  }

  @keyframes orbit {
    0% {
      transform: translate(var(--bottom-front));
    }
    25% {
      transform: translate(var(--top-front));
    }
    50% {
      transform: translate(var(--top-back));
    }
    75% {
      transform: translate(var(--bottom-back));
    }
    100% {
      transform: translate(var(--bottom-front));
    }
  }

  @keyframes orbit-z {
    0% {
      z-index: var(--z-front);
    }
    25% {
      z-index: var(--z-top-front);
    }
    50% {
      z-index: var(--z-back);
    }
    100% {
      z-index: var(--z-back);
    }
  }
</style>
