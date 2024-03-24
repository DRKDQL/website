<script lang="ts">
	export let color: 'primary' | 'secondary';
	export let onClick: () => void;

	const styles = {
		primary: 'bg-gradient btn text-primary font-bold',
		secondary: 'btn btn-secondary font-bold'
	};
</script>

<button
	class="btn rounded-full border-none text-sizeP {color === 'primary' && styles.primary} {color ===
		'secondary' && styles.secondary}"
	on:click={onClick}
>
	<slot />
</button>
