<script lang="ts">
  import BuildingConveyor from '$lib/BuildingConveyor.svelte';
  import NestedCubes from '$lib/NestedCubes.svelte';
</script>

<svelte:head>
  <meta name="description" content="Bence Molnár - design engineer and web developer." />
</svelte:head>

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
      <li class="spacer"></li>
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
    display: flex;
    flex-wrap: wrap;
    text-transform: uppercase;
    text-align: right;
    border-bottom: solid var(--border-width) var(--border-color);
  }

  li {
    width: 20rem;
    height: 23rem;
    flex-grow: 0;
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

  .spacer {
    width: 0;
    flex-grow: 1;
  }

  .work:hover {
    --slip-play-state: running;
  }

  .inspiration:not(:hover) {
    --rotation: 0;
    --depth: 0;
    --scale: 0;
  }

  @media only screen and (max-width: 62rem) {
    nav ul {
      display: block;
      border-bottom: none;
    }

    li {
      width: 100%;
    }

    li:not(:last-child) {
      border-right: none;
      border-bottom: solid var(--border-width) var(--border-color);
    }

    .spacer {
      display: none;
    }
  }
</style>
