<nav>
  <ul>
    <li>
      <a href="/work">
        <h2>Work</h2>
      </a>
    </li>
    <li>
      <a href="/inspiration">
        <h2>Inspiration</h2>
      </a>
    </li>
    <li class="spacer"></li>
    <li>
      <a href="/contact">
        <h2>Contact</h2>
      </a>
    </li>
  </ul>
</nav>
<slot></slot>

<style>
  ul {
    display: flex;
    flex-wrap: wrap;
    text-transform: uppercase;
    text-align: right;
    border-bottom: solid var(--border-width) var(--border-color);
  }

  li {
    width: 20rem;
    flex-grow: 0;
  }

  li:not(:last-child) {
    border-right: solid var(--border-width) var(--border-color);
  }

  li:last-child {
    grid-column: 4;
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
</style>
