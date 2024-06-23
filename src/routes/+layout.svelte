<script lang="ts">
  import Header from '$lib/Header.svelte';
  import archivoWoff from '@fontsource-variable/archivo/files/archivo-latin-wdth-normal.woff2?url';
  import '@fontsource-variable/archivo/wdth.css';
  import '../app.css';
</script>

<svelte:head>
  <title>Bence Molnár</title>
  <link rel="preload" as="font" type="font/woff2" href={archivoWoff} crossorigin="anonymous" />
</svelte:head>

<Header />
<slot></slot>
