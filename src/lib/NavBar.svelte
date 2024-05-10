<script lang="ts">
  import { page } from '$app/stores';
  import NavItem from '$lib/NavItem.svelte';

  const pathname = $page.url.pathname;
</script>

<nav>
  <ul>
    <NavItem href="/work" active={pathname === '/work'} class="status-light-1">
      <h2>Work</h2>
    </NavItem>
    <NavItem href="/inspiration" active={pathname === '/inspiration'} class="status-light-2">
      <h2>Inspiration</h2>
    </NavItem>
    <li class="spacer"></li>
    <NavItem href="/contact" active={pathname === '/contact'} class="status-light-3">
      <h2>Contact</h2>
    </NavItem>
  </ul>
</nav>

<style>
  ul {
    display: flex;
    flex-wrap: wrap;
    text-transform: uppercase;
    text-align: right;
    border-bottom: solid var(--border-width) var(--border-color);
  }

  :global(ul li:not(:last-child)) {
    border-right: solid var(--border-width) var(--border-color);
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
