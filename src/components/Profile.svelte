<script>
  export let name;
  export let institution;
  export let img;
  export let credit = "";
</script>

<div
  class="flex flex-col text-center bg-rose-700 bg-opacity-30 rounded-lg shadow">
  <img class="w-full h-60 object-cover rounded-t-lg" src={img} alt={name} />
  <div class="flex flex-col my-3 px-5">
    <p class=" font-medium text-2xl">{name}</p>
    <p class=" font-light">{institution}</p>
    <p class="text-base font-light">{credit}</p>
  </div>
</div>
