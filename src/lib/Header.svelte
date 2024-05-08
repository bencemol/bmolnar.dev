<header>
  <section class="gutter"></section>
  <section class="m-24">
    <h1>Bence Molnár</h1>
    <h2 class="job-title">Web Developer</h2>
  </section>
</header>

<style>
  header {
    border-bottom: solid var(--border-width) var(--border-color);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-transform: uppercase;
  }

  .gutter {
    height: 7rem;
    width: min(20rem, 100vw);
    border-right: solid var(--border-width) var(--border-color);
    background: var(--hover-color, #000);
    transition: background 900ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .job-title {
    font-size: 1.45rem;
    font-weight: 300;
  }
</style>
