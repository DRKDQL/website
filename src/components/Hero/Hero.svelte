<script lang="ts">
	import { goto } from '$app/navigation';
	import Block from '../Block/Block.svelte';
	import Button from '../Button/Button.svelte';
</script>

<div
	class="hero min-h-dynamic-screen text-center"
	style="background-image:url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
>
	<div class="hero-overlay bg-black bg-opacity-70"></div>
	<Block>
		<h1 class="mb-5">Need a website for your small business?</h1>
		<p class="mb-5">
			DRKDQL can provide a smooth, modern website with essentials such as enquriy forms and a Google
			Suite for your employees (Gmail, Calendar, Drive & more!)
		</p>
		<h1 class="mb-5">Want to showcase your best personal projects?</h1>
		<p class="mb-5">
			DRKDQL can design a sleek portfolio to share with companies you apply for, recruiters and your
			friends & family!
		</p>
		<div class="flex space-x-2 justify-center">
			<Button
				color="primary"
				onClick={() => {
					goto('/enquire-now');
					console.log('clicked?');
				}}>ENQUIRE NOW</Button
			>
			<Button
				color="secondary"
				onClick={() => {
					goto('/projects');
					console.log('clicked projects?');
				}}>SEE ALL PROJECTS</Button
			>
		</div>
	</Block>
</div>
