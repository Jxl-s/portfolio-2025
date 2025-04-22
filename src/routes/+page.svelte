<script>
	import education from '../lib/data/education';
	import work from '../lib/data/work';
	import projects from '$lib/data/projects';

	import { setLocale, t } from '../lib/i18n';
</script>

<div class="flex h-dvh w-dvw items-center justify-center">
	<div class="w-full animate-pulse text-center">
		<span class="block text-4xl font-bold">Portfolio 2025</span>
		<span class="block text-lg opacity-50">Coming Soon, ignore the current page</span>
		<span class="block text-lg opacity-50">
			The placeholder 3D page can be found <a href="/3d" class="text-blue-400">here</a>
		</span>
		<div>
			<button on:click={setLocale.bind(this, 'en')}>English</button>
			<button on:click={setLocale.bind(this, 'fr')}>Français</button>
			<button on:click={setLocale.bind(this, 'cn')}>中文</button>
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
		<br />
		{#each projects as project}
			<div class="w-full">
				<h2>{$t(project.name)}</h2>
				<ul class="list-inside list-disc">
					{#each project.description as desc}
						<li>{$t(desc)}</li>
					{/each}
				</ul>
				<img src={project.thumbnail} alt="Thumbnail of project" class="max-w-sm" />
			</div>
		{/each}
	</div>
</div>
