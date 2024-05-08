<div class="container">
  <div class="track">
    <div class="slip-track">
      <img src="./slice1.svg" alt="Bauhaus Buildings Dessau" />
      <img src="./slice1.svg" alt="Bauhaus Buildings Dessau" />
      <img src="./slice1.svg" alt="Bauhaus Buildings Dessau" />
      <img src="./slice1.svg" alt="Bauhaus Buildings Dessau" />
    </div>
  </div>
  <div class="track">
    <div class="slip-track">
      <img src="./slice1.svg" alt="Bauhaus Buildings Dessau" />
      <img src="./slice1.svg" alt="Bauhaus Buildings Dessau" />
      <img src="./slice1.svg" alt="Bauhaus Buildings Dessau" />
      <img src="./slice1.svg" alt="Bauhaus Buildings Dessau" />
    </div>
  </div>
</div>

<style>
  .container {
    margin-top: auto;
    transform: translateY(25%);
  }

  .track {
    animation: slide 10000ms linear reverse infinite;
  }

  .slip-track {
    display: flex;
    animation: slide 5000ms linear reverse infinite;
    animation-play-state: var(--slip-play-state, paused);
  }

  img {
    width: 66%;
  }

  img:nth-child(1) {
    transform: translateY(-33%);
  }

  img:nth-child(3) {
    transform: translateY(33%);
  }

  img:nth-child(4) {
    transform: translateY(66%);
  }

  @keyframes slide {
    0% {
      transform: translate(0);
    }
    100% {
      transform: translate(-66%, -33%);
    }
  }
</style>
