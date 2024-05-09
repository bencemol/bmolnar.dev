<script lang="ts">
  import BuildingConveyor from '$lib/BuildingConveyor.svelte';
  import NestedCubes from '$lib/NestedCubes.svelte';
</script>

<main>
  <nav>
    <ul>
      <li class="work hover-color-1">
        <a href="/work">
          <h2 class="nav-item">Work</h2>
          <BuildingConveyor />
        </a>
      </li>
      <li class="inspiration hover-color-2">
        <a href="/inspiration">
          <h2 class="nav-item">Inspiration</h2>
          <NestedCubes />
        </a>
      </li>
      <li></li>
      <li class="hover-color-3">
        <a href="/contact">
          <h2 class="nav-item">Contact</h2>
        </a>
      </li>
    </ul>
  </nav>
</main>

<style>
  nav ul {
    display: grid;
    grid-template-columns: 20rem 20rem auto 20rem;
    border-bottom: solid var(--border-width) var(--border-color);
    text-transform: uppercase;
    text-align: right;
  }

  li {
    height: 23rem;
  }

  li:not(:last-child) {
    border-right: solid var(--border-width) var(--border-color);
  }

  li:last-child {
    grid-column: 4;
  }

  a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  h2 {
    padding: 1rem;
  }

  .work:hover {
    --slip-play-state: running;
  }

  .inspiration:not(:hover) {
    --rotation: 0;
    --depth: 0;
    --scale: 0;
  }
</style>
