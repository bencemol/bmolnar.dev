<script lang="ts">
  const buildings = Array(4).fill(0);
</script>

<div class="container">
  <div class="track">
    <div class="slip-track">
      {#each buildings as _}
        <img src="./bauhausbucher_12.svg" alt="Bauhaus Buildings Dessau" />
      {/each}
    </div>
  </div>
</div>

<style>
  .container {
    margin-top: auto;
    transform: scale(75%);
  }

  .track {
    --duration: 15s;
    animation: slide var(--duration) linear reverse infinite;
  }

  .slip-track {
    display: grid;
    grid-template-columns: repeat(4, 66%);
    animation: slide calc(var(--duration) * 0.8) linear reverse infinite;
    animation-play-state: var(--slip-play-state, paused);
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

  @media screen and (max-width: 31rem) {
    .container {
      transform: none;
    }
  }
</style>
