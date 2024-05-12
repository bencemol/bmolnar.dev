<script>
  import CubesInOrbit from '$lib/cubes-in-orbit/CubesInOrbit.svelte';
  import NavBar from '$lib/NavBar.svelte';
</script>

<NavBar />
<section>
  <style>
    html {
      --status-light: var(--status-light-1);
    }
  </style>
  <CubesInOrbit />
</section>

<style>
  section {
    display: grid;
    place-items: center;
  }
</style>
