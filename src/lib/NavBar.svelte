<script lang="ts">
  import { page } from '$app/stores';
  import NavItem from '$lib/NavItem.svelte';

  const pathname = $page.url.pathname;
</script>

<nav>
  <ul>
    <NavItem href="/work" active={pathname === '/work'} class="item status-light-1">
      <h2>Work</h2>
    </NavItem>
    <NavItem href="/inspiration" active={pathname === '/inspiration'} class="item status-light-2">
      <h2>Inspiration</h2>
    </NavItem>
    <NavItem href="/contact" active={pathname === '/contact'} class="item status-light-3">
      <h2>Contact</h2>
    </NavItem>
  </ul>
</nav>

<style>
  ul {
    display: flex;
    text-transform: lowercase;
    text-align: right;
    border-bottom: solid var(--border-width) var(--border-color);
    background: #fff;
  }
</style>
