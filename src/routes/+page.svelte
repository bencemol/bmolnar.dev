<script lang="ts">
  import BuildingConveyor from '$lib/BuildingConveyor.svelte';
  import NestedCubes from '$lib/NestedCubes.svelte';
  import PointAndLine from '$lib/PointAndLine.svelte';
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
          <NestedCubes />
        </a>
      </li>
      <li class="spacer">
        <img class="monument" src="./monument.jpeg" alt="Monument" />
      </li>
      <li class="contact status-light-3">
        <a href="/contact">
          <h2 class="nav-item">Contact</h2>
          <PointAndLine />
        </a>
      </li>
    </ul>
    <ul>
      <li class="double-width"></li>
      <li class="spacer"></li>
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
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
  }

  .work:hover {
    --slip-play-state: running;
  }

  .inspiration:not(:hover) {
    --rotation: 0;
    --depth: 0;
    --scale: 0;
  }

  .monument {
    height: 18rem;
  }

  .double-width {
    width: 40rem;
  }

  @media only screen and (max-width: 80rem) {
    nav ul {
      display: block;
      border-bottom: none;
    }

    li,
    li.double-width {
      width: 100%;
    }

    li:not(:last-child),
    li:last-child {
      border-right: none;
      border-bottom: solid var(--border-width) var(--border-color);
    }

    ul:last-child li:last-child {
      border-bottom: none;
    }

    .spacer {
      width: initial;
    }
  }
</style>
