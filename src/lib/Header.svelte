<header>
  <section class="title">
    <h1>Bence Molnár</h1>
    <h2 class="job-title">web developer</h2>
  </section>
</header>

<style>
  header {
    display: flex;
    align-items: stretch;
    margin-bottom: var(--border-width);
  }

  .title {
    flex-shrink: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 36px;
    margin-bottom: 18px;
  }

  .job-title {
    font-size: 1.55rem;
    font-weight: 300;
  }

  @media only screen and (max-width: 31rem) {
    .title {
      margin: var(--border-width);
      margin-bottom: 0px;
    }
  }
</style>
