<script lang="ts">
  import { onMount } from 'svelte';
  
  export let name;
  export let description;
  export let img;

  let isOverflowing = false;
  let showMore: Boolean = false;
  let contentRef;
  let height;

  function toggleShowMore() {
    showMore = !showMore;
  }

  onMount( () => {
    let height = contentRef.scrollHeight;
    console.log(height);
    
    isOverflowing = height > 20;
  });
</script>

<div class="flex lg:flex-row flex-col lg:gap-10 lg:mb-10 gap-5 mb-5 bg-white pb-5 lg:pb-10 p-10 bg-opacity-30 rounded-lg text-justify items-center lg:items-start">
  <img class="h-60 w-40 object-cover rounded" src={img} alt={name} />
  <div class="flex flex-col h-60 gap-2 {showMore ? 'h-auto expanded' : ''}">
    <p class="text-2xl font-semibold text-center lg:text-left">{name}</p>
    <p bind:this={contentRef} class="flex text-lg h-48 overflow-hidden {showMore ? 'expanded' : ''}">
      {description}
    </p>
    {#if isOverflowing}
    <button class="text-blue-500 hover:underline" on:click={toggleShowMore}>{showMore ? 'Mostrar menos' : 'Mostrar más'}</button>
  {/if}
  </div>
</div>

<style>
  .expanded {
    height: auto;
    max-height: 100rem;
  }
</style>