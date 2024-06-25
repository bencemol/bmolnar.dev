<script lang="ts">
  import BuildingConveyor from '$lib/BuildingConveyor.svelte';
  import NestedCubes from '$lib/NestedCubes.svelte';
  import OrbitingCubes from '$lib/cubes-in-orbit/OrbitingCubes.svelte';
</script>

<svelte:head>
  <meta name="description" content="Bence Molnár - design engineer and web developer." />
</svelte:head>

<main>
  <nav>
    <ul>
      <li class="work status-light-1">
        <a href="/work">
          <h2 class="nav-item">Work</h2>
          <BuildingConveyor />
        </a>
      </li>
      <li class="inspiration status-light-2">
        <a href="/inspiration">
          <h2 class="nav-item">Inspiration</h2>
          <OrbitingCubes />
        </a>
      </li>
      <li class="contact status-light-3">
        <a href="/contact">
          <h2 class="nav-item">Contact</h2>
          <NestedCubes />
        </a>
      </li>
    </ul>
  </nav>
</main>

<style>
  ul {
    height: calc(100vh - 10rem);
    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(1rem, 1fr));
    text-transform: lowercase;
    text-align: right;
    row-gap: var(--border-width);
    margin: 0 var(--border-width) var(--border-width);
  }

  li {
    background: #fff;
    color: #000;
    overflow: hidden;
    border-radius: var(--border-width);
    display: flex;
    flex-direction: column;
  }

  a {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-size: 1.8rem;
    align-self: flex-end;
    padding: 1.5rem;
  }

  .work:hover {
    --slip-play-state: running;
  }

  .inspiration a {
    align-items: center;
    font-size: max(0.7vh, 0.5rem);
  }

  .contact {
    font-size: max(0.9vh, 11px);
  }

  .contact:not(:hover) {
    --rotation: 0;
    --depth: 0;
    --scale: 0;
  }

  @media screen and (max-height: 85rem) {
    ul {
      height: 100%;
    }

    li {
      height: 25rem;
    }
  }
</style>
