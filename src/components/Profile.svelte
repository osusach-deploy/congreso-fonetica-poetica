<script>
    export let name;
    export let institution;
    export let img;
    export let credit = "";
</script>

<div class="flex flex-col text-center">
    <img class="w-full h-60 object-cover rounded-lg mb-3" src={img} alt={name}>
    <p class=" font-medium text-2xl">{name}</p>
    <p>{institution}</p>
    <p class="text-base">{credit}</p>
</div>