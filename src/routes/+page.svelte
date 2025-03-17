<script>
	import education from '../lib/data/education';
	import work from '../lib/data/work';
	import { setLocale, t } from '../lib/i18n';

	function onEnglish() {
		setLocale('en');
	}

	function onFrench() {
		setLocale('fr');
	}
</script>

<div class="flex h-dvh w-dvw items-center justify-center">
	<div class="w-full animate-pulse text-center">
		<span class="block text-4xl font-bold">Portfolio 2025</span>
		<span class="block text-lg opacity-50">Coming Soon ...</span>
		<div>
			<button on:click={onEnglish}>English</button>
			<button on:click={onFrench}>French</button>
		</div>
	</div>
	<div>
		{#each education as edu}
			<div class="w-full">
				<h2>{$t(edu.school)}</h2>
				<p>{$t(edu.degree)}</p>
				<p>{$t(edu.graduation)}</p>
				<p>{$t(edu.grade)}</p>
			</div>
			<br />
		{/each}
		<br />
		{#each work as job}
			<div class="w-full">
				<h2>{job.company}</h2>
				<p>{$t(job.position)}</p>
				<p>{$t(job.dates)}</p>
				<p>{$t(job.location)}</p>
			</div>
		{/each}
	</div>
</div>
