<script>
  import { accordion } from './animation/accordion';
  import { clickOutside } from './directive/clickOutside';
  import HamburgerNav from './hamburger-nav/HamburgerNav.svelte';
  import HamburgerNavTrigger from './hamburger-nav/HamburgerNavTrigger.svelte';

  let navOpen = false;

  function toggle() {
    navOpen = !navOpen;
  }

  function close() {
    navOpen = false;
  }
</script>

<header use:clickOutside on:clickOutside={close}>
  <section class="row">
    <section class="title">
      <h1>Bence Molnár</h1>
      <h2 class="job-title">web developer</h2>
    </section>
    <section class="nav-trigger">
      <HamburgerNavTrigger on:click={toggle} />
    </section>
  </section>
  <nav use:accordion={navOpen}>
    <HamburgerNav on:click={close} on:clickOutside={close} />
  </nav>
  {#if navOpen}
    <style>
      html {
        overflow: hidden;
      }

      main {
        opacity: 0.5;
        filter: blur(8px);
        transform: scale(0.9);
        pointer-events: none;
      }
    </style>
  {/if}
</header>

<style>
  header {
    margin-bottom: var(--border-width);
  }

  .row {
    display: flex;
    align-items: center;
    padding: 36px;
    padding-bottom: 18px;
  }

  .title {
    flex-shrink: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title h1 {
    font-size: 1.48rem;
  }

  .job-title {
    font-size: 1.55rem;
    font-weight: 300;
  }

  .nav-trigger {
    margin-left: auto;
  }

  @media only screen and (max-width: 31rem) {
    .row {
      padding: var(--border-width);
      padding-bottom: 0px;
    }
  }
</style>
