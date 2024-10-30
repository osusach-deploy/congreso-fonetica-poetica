<script>
    export let name;
    export let description;
    export let img;
</script>

<div class="flex flex-col">
    <img class="w-full h-60 object-cover" src={img} alt={name}>
    <p class="text-2xl font-semibold">{name}</p>
    <p class="text-lg">{description}</p>
</div>