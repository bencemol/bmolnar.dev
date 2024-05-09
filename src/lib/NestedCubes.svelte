<div class="container">
  <div class="cube">
    <div class="cube-bg"></div>
    <div class="triangle triangle-top"></div>
    <div class="triangle triangle-bottom"></div>
    <div class="cube-front"></div>
  </div>
</div>

<style>
  .container {
    margin: auto;
    --unit: 0.2rem;
    --animation-timing: cubic-bezier(0.075, 0.82, 0.165, 1) 600ms;
    --default-rotation: -8deg;
    width: calc(50 * var(--unit));
    aspect-ratio: 1 / 1;
    display: grid;
    position: relative;
    background-color: #fff;
    filter: invert(1);
    transform-origin: top left;
    transform: rotate(var(--rotation, var(--default-rotation)));
  }

  .cube {
    --perspective: 45deg;
    --default-depth: 38%;
    --bg-color: #fff;
    --front-color: #fcde03;
    --side-length: calc(var(--default-depth) / cos(var(--perspective)));
    position: relative;
    place-self: end;
    width: 20%;
    aspect-ratio: 1 / 1;
    margin: 25%;
    filter: invert(1);
    transform: rotate(calc(-1 * var(--rotation, var(--default-rotation))));
  }

  .container,
  .cube * {
    transition: transform var(--animation-timing);
  }

  .cube * {
    position: absolute;
    inset: 0;
  }

  .cube-front {
    background-color: var(--front-color);
    transform: translate(var(--depth, var(--default-depth)), var(--depth, var(--default-depth)));
  }

  .cube-bg {
    background-color: var(--bg-color);
  }

  .triangle {
    transform: rotate(var(--perspective)) scaleX(var(--scale, 1));
  }

  .triangle-bottom {
    width: var(--side-length);
    background-color: var(--bg-color);
    transform-origin: bottom left;
  }

  .triangle-top {
    left: 100%;
    width: var(--side-length);
    background-color: var(--bg-color);
    transform-origin: top left;
  }
</style>
