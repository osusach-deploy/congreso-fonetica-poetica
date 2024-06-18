<script>
  import Dropdown from "./Dropdown.svelte";
  export let i18n;
  export let currentLocale;
  export let pathname;

  let langPath = currentLocale == "es" ? "" : "/" + currentLocale;
</script>

<div
  class="flex flex-row flex-wrap justify-between gap-y-4 bg-slate-700 w-full py-2 px-5"
>
  <img src="/img/UsachSB.avif" alt="usachlogo" class="h-20" />
  <Dropdown {i18n} {currentLocale} {pathname} />
</div>

<div
  class="flex flex-row flex-wrap justify-between bg-slate-700 w-full gap-y-4 py-4 px-5 text-white"
>
  <a class="hover:underline" href={langPath + "/"}>Congreso</a>
  <a class="hover:underline" href={langPath + "/group"}
    >Grupo de investigación</a
  >
  <a class="hover:underline" href={langPath + "/comitees"}>Comités</a>
  <a class="hover:underline" href={langPath + "/#form"}>Convocatoria</a>
  <a class="hover:underline" href={langPath + "/proposals"}>Propuestas</a>
</div>
