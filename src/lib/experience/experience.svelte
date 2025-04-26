<script lang="ts">
	import Experience from '$lib/experience';

	let webglCanvas: HTMLCanvasElement;
	$effect(() => {
		const experience = new Experience(webglCanvas);
		window.experience = experience;

		return () => experience.destroy();
	});
</script>

<canvas bind:this={webglCanvas} class="webgl"></canvas>

<style>
	.webgl {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
	}
</style>
