<script lang="ts">
	import '../app.css';
	import Navbar from '../components/Navbar/Navbar.svelte';
	import '@fontsource-variable/urbanist';
</script>

<Navbar />
<main class="">
	<slot />
</main>
<footer>Footer</footer>
