<script>
  export let name;
  export let description;
  export let img;
</script>

<div class="flex flex-col">
  <hr class="my-2"/>
  <img class="h-60 object-contain" src={img} alt={name} />
  <p class="text-2xl font-semibold">{name}</p>
  <p class="text-lg">{description}</p>
</div>
