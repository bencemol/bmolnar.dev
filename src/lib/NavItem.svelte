<script lang="ts">
  let href: string;
  let active = false;
  let className: string;

  export { href, active, className as class };
</script>

<li class:active class={`nav-item ${className}`}>
  <a {href}>
    <slot></slot>
  </a>
</li>

<style>
  li {
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

  @media only screen and (max-width: 80rem) {
    li {
      flex-grow: 1;
      width: auto;
    }

    a {
      text-align: center;
    }
  }

  @media only screen and (max-width: 38rem) {
    li:last-child {
      border-right: none;
    }

    :global(.nav-item a *) {
      font-size: 3.5vw;
    }
  }
</style>
