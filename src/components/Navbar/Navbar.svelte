<script lang="ts">
	import NavbarItem from './NavbarItem.svelte';
	import logo from '$lib/assets/sitelogo-dark.png';
	import Logo from '../Logo/Logo.svelte';

	const navItems = [
		{
			label: 'PROJECTS',
			route: '/projects'
		},
		{
			label: 'SERVICES',
			route: '/services'
		},
		{
			label: 'ABOUT',
			route: '/about'
		},
		{
			label: 'ENQUIRE NOW',
			route: '/enquire-now'
		}
	];
</script>

<nav
	class="fixed flex items-center justify-between left-[30px] right-[30px] h-navbar rounded-full mt-[20px] py-[20px] px-[50px] shadow-xl z-50 bg-secondary"
>
	<Logo />
	<!-- DESKTOP MENU -->
	<div class="hidden lg:flex lg:space-x-2">
		{#each navItems as navItem}
			<NavbarItem label={navItem.label} route={navItem.route} />
		{/each}
	</div>
</nav>
