<script lang="ts">
  import '@fontsource-variable/archivo/wdth.css';
  import archivoWoff from '@fontsource-variable/archivo/files/archivo-latin-wdth-normal.woff2?url';
  import '../app.css';
  import Header from '$lib/Header.svelte';
</script>

<svelte:head>
  <link rel="preload" as="font" type="font/woff2" href={archivoWoff} crossorigin="anonymous" />
</svelte:head>

<Header />
<slot></slot>
