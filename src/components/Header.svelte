<script>
    import Dropdown from "./Dropdown.svelte";
    export let i18n;
    export let currentLocale;
</script>
<div class="flex flex-row justify-between bg-slate-700 w-full py-2 px-5">
  <img src="/img/UsachSB.avif" alt="usachlogo" class="h-20" />
  <Dropdown i18n={i18n} {currentLocale}/>
</div>
