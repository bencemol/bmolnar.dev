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
    <section class="title" class:faded={navOpen}>
      <h1>Bence Molnár</h1>
      <h2 class="job-title">web developer</h2>
    </section>
    <section class="nav-trigger">
      <HamburgerNavTrigger isOpen={navOpen} on:click={toggle} />
    </section>
  </section>
  {#if navOpen}
    <nav transition:accordion>
      <HamburgerNav on:click={close} on:clickOutside={close} />
    </nav>
  {/if}
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
    transition:
      opacity 230ms var(--easing),
      transform 230ms var(--easing);
  }

  .title h1 {
    font-size: 1.48rem;
  }

  .faded {
    opacity: 0;
    transform: translateX(-35%);
    pointer-events: none;
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
