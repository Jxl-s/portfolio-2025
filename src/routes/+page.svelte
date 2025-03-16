<script>
    import education from "../lib/data/education.ts"
    import work from "../lib/data/work.ts"
</script>
<h1 class="w-dvw h-dvh flex items-center justify-center">
    <div class="animate-pulse w-full text-center">
        <span class="text-4xl font-bold block">Portfolio 2025</span>
        <span class="text-lg opacity-50 block">Coming Soon ...</span>
    </div>
    <div>
        {#each education as edu}
            <div class="w-full">
                <h2>{edu.school}</h2>
                <p>{edu.degree}</p>
                <p>{edu.graduation}</p>
            </div>
            <br />
        {/each}
        <br />
        {#each work as job}
            <div class="w-full">
                <h2>{job.company}</h2>
                <p>{job.position}</p>
                <p>{job.dates}</p>
                <p>{job.location}</p>
            </div>
        {/each}
    </div>
</h1>
