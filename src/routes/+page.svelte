<main>
  <nav>
    <ul>
      <li>
        <a href="/work">
          <h2 class="nav-item">Work</h2>
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

  h2 {
    margin: 1rem;
  }
</style>
