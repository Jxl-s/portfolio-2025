<script lang="ts">
	import Experience from '$lib/experience';

	let webglCanvas: HTMLCanvasElement;
	$effect(() => {
		const experience = new Experience(webglCanvas);
		window.experience = experience;

		// Cleanup on component destroy
		return () => {
			experience.destroy();
		};
	});
</script>

<main>
	<canvas bind:this={webglCanvas} class="webgl"></canvas>
</main>

<style>
	.webgl {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
	}
</style>
