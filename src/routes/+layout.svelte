<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';
	import Footer from '../components/Footer/Footer.svelte';
	import Navbar from '../components/Navbar/Navbar.svelte';
	import '@fontsource-variable/urbanist';
</script>

<div>
	<Navbar />
	<main class={$page.route.id !== '/' ? 'relative px-page top-content' : ''}>
		<slot />
	</main>
	<Footer />
</div>
