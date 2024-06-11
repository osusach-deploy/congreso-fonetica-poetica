<script>
    export let title;
    export let date;

    import { onMount } from 'svelte';

    let isMobile = false;

    const checkIfMobile = () => {
        isMobile = window.innerWidth <= 768;
    };

    // Verificar cuando el componente se monta
    onMount(() => {
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        console.log(isMobile);
    });
</script>

{#if isMobile}
    <div class="flex flex-row gap-4 w-[95%]">
        <div class="flex flex-col items-center">
            <p class="absolute h-5 w-5 rounded-full bg-indigo-500 hover:bg-indigo-600"></p>
            <p class=" h-24 w-1 bg-indigo-500"></p>
        </div>
        <div class="flex flex-col w-full">
            <p class="font-bold text-lg">{title}</p>
            <p class="text-lg">{date}</p>
        </div>
    </div>
{:else}
    <div class="flex flex-col lg:gap-4 lg:w-64 lg:mt-20 lg:mb-10">
        <div class="flex flex-col lg:flex-row items-center">
            <p class="absolute h-5 w-5 rounded-full bg-indigo-500 hover:bg-indigo-600"></p>
            <p class="h-1 w-72 bg-indigo-500"></p>
        </div>
        <div class="flex flex-col w-52">
            <p class="font-bold text-lg">{title}</p>
            <p class="text-lg">{date}</p>
        </div>
    </div>
{/if}
