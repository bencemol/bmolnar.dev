<script lang="ts">
  import BauhausBucher12 from '$lib/BauhausBucher12.svelte';
</script>

<main>
  <nav>
    <ul>
      <li class="work">
        <a href="/work">
          <h2 class="nav-item">Work</h2>
          <BauhausBucher12 />
        </a>
      </li>
      <li>
        <a href="/inspiration">
          <h2 class="nav-item">Inspiration</h2>
        </a>
      </li>
      <li></li>
      <li>
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
</style>
