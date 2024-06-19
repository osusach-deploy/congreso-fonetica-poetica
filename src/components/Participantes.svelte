<script>
  export let i18n;
</script>

<div
  class="flex flex-col gap-10 mt-14 mb-16 text-center animate-fade-up animate-delay-700"
>
  <p class="font-light text-2xl">{i18n.participant.organizers_title}</p>
  <div
    class="flex flex-col flex-wrap md:flex-row items-center justify-center gap-10 lg:gap-12 max-w-3xl"
  >
    <img src="/img/fonetica.png" class="h-20" alt="logo lab fonética usach" />
    <img src="/img/granada.png" class="h-16" alt="logo university of granada" />
    <img
      src="/img/conce.png"
      class="h-16"
      alt="logo university of concepcion"
    />
    <img src="/img/eu.png" class="h-16" alt="logo funded by european union" />
    <img src="/img/vhp.png" class="h-20" alt="logo voices of spanish poets" />
  </div>
</div>
