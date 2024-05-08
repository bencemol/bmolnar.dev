<script lang="ts">
  const buildings = Array(4).fill(0);
</script>

<div class="container">
  <div class="track">
    <div class="slip-track">
      {#each buildings as _}
        <img src="./slice1.svg" alt="Bauhaus Buildings Dessau" />
      {/each}
    </div>
  </div>
</div>

<style>
  .container {
    margin-top: auto;
    transform: translateY(33%);
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

  img:nth-child(3n) {
    transform: translateY(33%);
  }

  img:nth-child(4n) {
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
