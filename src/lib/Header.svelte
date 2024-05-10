<header>
  <section class="gutter">
    <a href="/">Home</a>
  </section>
  <section class="title">
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
    margin: 24px;
  }

  .gutter {
    width: 20rem;
    flex-shrink: 0;
    flex-grow: 1;
    flex-basis: 0px;
    min-width: 0px;
    max-width: 20rem;
    color: transparent;
    border-right: solid var(--border-width) var(--border-color);
    background: var(--status-light, #000);
    transition: background 900ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .gutter a {
    width: 100%;
    height: 100%;
    display: block;
  }

  .job-title {
    font-size: 1.45rem;
    font-weight: 300;
  }

  @media only screen and (max-width: 80rem) {
    .gutter {
      aspect-ratio: 1 / 1;
      flex-grow: 0;
      flex-basis: 6.5rem;
    }
  }

  @media only screen and (max-width: 31rem) {
    .title {
      margin: 18px;
      margin-left: auto;
    }
  }
</style>
