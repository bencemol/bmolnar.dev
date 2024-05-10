<script lang="ts">
  let href: string;
  let active = false;
  let className: string;

  export { href, active, className as class };
</script>

<li class:active class={className}>
  <a {href}>
    <slot></slot>
  </a>
</li>

<style>
  li {
    width: 20rem;
    flex-grow: 0;
  }

  a {
    display: block;
    padding: 1rem;
    text-align: right;
  }

  a * {
    flex-shrink: 0;
  }

  .text {
    margin-left: auto;
  }

  :global(.active a *) {
    text-decoration: underline;
    text-decoration-thickness: 4px;
  }
</style>
