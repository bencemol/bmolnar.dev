<script lang="ts">
  import '@fontsource-variable/archivo/wdth.css';
  import '../app.css';
</script>

<header>
  <section class="gutter"></section>
  <section class="m-24">
    <h1>Bence Molnár</h1>
    <p>Web Developer</p>
  </section>
</header>
<slot></slot>

<style>
  header {
    border-bottom: solid var(--border-width) var(--border-color);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-transform: uppercase;
  }

  .gutter {
    height: 7rem;
    width: min(20rem, 100vw);
    background: #000;
  }
</style>
