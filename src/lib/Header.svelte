<header>
  <section class="gutter"></section>
  <section class="title m-24">
    <h1>Bence Molnár</h1>
    <h2 class="job-title">Web Developer</h2>
  </section>
</header>

<style>
  header {
    display: flex;
    align-items: stretch;
    text-transform: uppercase;
    border-bottom: solid var(--border-width) var(--border-color);
  }

  .title {
    flex-shrink: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .gutter {
    min-height: 7rem;
    width: 20rem;
    flex-shrink: 0;
    flex-grow: 1;
    flex-basis: 0px;
    min-width: 0px;
    max-width: 20rem;
    border-right: solid var(--border-width) var(--border-color);
    background: var(--hover-color, #000);
    transition: background 900ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .job-title {
    font-size: 1.45rem;
    font-weight: 300;
  }
</style>
