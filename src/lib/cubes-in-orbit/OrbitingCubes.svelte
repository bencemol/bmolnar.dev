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
    margin: auto;
    aspect-ratio: 1 / 1;
    isolation: isolate;
    position: relative;
    --duration: 16s;
    --orbit-height: 6.7em;
    --orbit-width: 6.7em;
    --orbit-depth: 4.5em;
    --gap: 1em;
    --cos45: 0.7;
    --size: 5em;
  }

  .cube-0 {
    position: relative;
    width: 10em;
    height: 10em;
    z-index: 3;
  }

  .cube-1,
  .cube-2,
  .cube-3,
  .cube-4 {
    width: 70%;
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    animation:
      orbit var(--duration) cubic-bezier(0.86, 0.1, 0.07, 1) infinite,
      orbit-z var(--duration) step-end infinite;
  }

  .cube-1 {
    --height: 6.9em;
    --width: 4.1em;
    animation-delay: calc(-0.25 * var(--duration));
  }

  .cube-2 {
    --height: 5.9em;
    --width: 4.6em;
  }

  .cube-3 {
    --height: 9.7em;
    --width: 4.6em;
    animation-delay: calc(-0.5 * var(--duration));
  }

  .cube-4 {
    --height: 7em;
    --width: 4.6em;
    animation-delay: calc(-0.75 * var(--duration));
  }

  @keyframes orbit {
    0%,
    100% {
      transform: translate(calc(-0.4 * var(--width)), calc(var(--height) + var(--gap)));
    }
    25% {
      transform: translate(calc(-0.4 * var(--width)), calc(-1 * var(--orbit-height) - var(--gap)));
    }
    50% {
      transform: translate(
        calc(var(--orbit-depth) * var(--cos45) + var(--gap)),
        calc(-1 * var(--orbit-height) - var(--orbit-depth) * var(--cos45) - var(--gap))
      );
    }
    75% {
      transform: translate(
        calc(var(--orbit-depth) * var(--cos45) + var(--gap)),
        calc(-1 * var(--orbit-depth) * var(--cos45) + var(--height))
      );
    }
  }

  @keyframes orbit-z {
    0%,
    100% {
      z-index: 5;
    }
    25% {
      z-index: 4;
    }
    50% {
      z-index: 1;
    }
    75% {
      z-index: 2;
    }
  }
</style>
