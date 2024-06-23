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
    color: #fff;
    margin-bottom: var(--border-width);
    transition: color 1900ms cubic-bezier(0.075, 0.82, 0.165, 1);
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

  :global(html:has(.status-light-3:hover) header),
  :global(html:has(.status-light-1:hover) header) {
    color: #000;
  }

  @media only screen and (max-width: 31rem) {
    .title {
      margin: var(--border-width);
      margin-bottom: 0px;
    }
  }
</style>
