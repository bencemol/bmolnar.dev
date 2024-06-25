<script lang="ts">
  export let isOpen = false;
</script>

<button type="button" on:click>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2.5"
    stroke-linecap="round"
    class:open={isOpen}
  >
    <path class="line-1" d="M4 6, L20 6" />
    <path class="line-2" d="M4 12, L20 12" />
    <path class="line-3" d="M4 18, L20, 18" />
  </svg>
</button>

<style>
  button {
    margin-right: 0.5rem;
    width: 3.6rem;
    aspect-ratio: 1 / 1;
    color: inherit;
    border: none;
    background: transparent;
    display: grid;
    place-items: center;
    cursor: pointer;
    padding: 0;
  }

  path {
    transition: d 230ms var(--easing);
  }

  .open .line-1 {
    d: path('M6 6, L18 18');
  }

  .open .line-2 {
    d: path('M12 12, L12 12');
  }

  .open .line-3 {
    d: path('M6 18, L18 6');
  }
</style>
