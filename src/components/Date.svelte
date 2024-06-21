<script>
  export let title;
  export let date;
  export let extra = "";
</script>

<div
  class="flex lg:flex-col flex-row gap-4 w-[95%] lg:gap-4 lg:w-64 lg:mt-20 lg:mb-10"
>
  <div class="flex flex-col lg:flex-row items-center">
    <p
      class="absolute h-5 w-5 rounded-full bg-indigo-500 transition-all hover:bg-indigo-600"
    ></p>
    <p class="h-24 w-1 lg:h-1 lg:w-72 bg-indigo-500"></p>
  </div>
  <div class="flex flex-col w-full lg:w-52">
    <h3 class="font-bold text-lg">{title}</h3>
    <p class="text-lg">{date}</p>
    {#if extra != ""}
      <p class="text-lg italic font-light">{extra}</p>
    {/if}
  </div>
</div>
