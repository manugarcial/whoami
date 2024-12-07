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
  :global(html, body) {
    height: 100%;
    margin: 0;
  }

  main {
    min-height: 81vh;
  }
</style>
