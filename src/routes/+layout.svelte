<script lang="ts">
	import HamburgerMenu from '../lib/components/HamburguerMenu.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	let { children } = $props();
</script>

<!-- <style lang="scss">
  @import '../styles/global.scss';
</style> -->

<HamburgerMenu />

<main>
  <ParaglideJS {i18n}>
		{@render children()}
	</ParaglideJS>
</main>

<Footer />
