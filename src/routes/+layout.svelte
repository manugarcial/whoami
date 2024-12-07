<script lang="ts">
	import HamburgerMenu from '../lib/components/HamburguerMenu.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	let { children } = $props();
</script>

<HamburgerMenu />

<main>
  <ParaglideJS {i18n}>
		{@render children()}
	</ParaglideJS>
</main>

<Footer />

<style>
  /* Ensure the page occupies at least the full height of the viewport */
  :global(html, body) {
    height: 100%; /* Ensure body and html span the full viewport height */
    margin: 0;    /* Reset margin for consistent layout */
  }

  main {
    min-height: 81vh;
  }
</style>
