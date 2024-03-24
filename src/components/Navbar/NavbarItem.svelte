<script lang="ts">
	import { page } from '$app/stores';

	export let label: string;
	export let route: string;
	const styles = {
		active: 'bg-gradient text-primary',
		inactive: 'btn-ghost'
	};
</script>

<a
	href={route}
	class="btn border-none rounded-full {$page.route.id === route ? styles.active : styles.inactive}"
>
	{label}
</a>
