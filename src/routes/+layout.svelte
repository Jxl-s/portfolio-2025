<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Jia Xuan Li</title>
	<meta charset="utf-8" />
	<meta name="description" content="Jia's personal website" />
	<meta name="author" content="Jia Xuan Li" />

	<!-- Make crawlable later by search engines -->
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

{@render children()}
