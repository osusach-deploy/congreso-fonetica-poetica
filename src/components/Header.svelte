<script>
  import Dropdown from "./Dropdown.svelte";
  import Menu from "./Menu.svelte";
  export let i18n;
  export let currentLocale;
  export let pathname;

  let langPath = currentLocale == "es" ? "" : "/" + currentLocale;
</script>

<div
  class="flex flex-row h-24 lg:h-24 flex-wrap justify-between gap-y-4 bg-slate-700 w-full px-2 lg:px-5 lg:py-0 py-2">
  <div class="flex flex-row lg:gap-7 h-full items-center">
    <Menu {currentLocale} {i18n} />
    <img
      src="/img/UsachSB.avif"
      alt="usachlogo"
      class="hidden lg:flex h-20 pb-1" />
    <img
      src="/img/Usach PB.webp"
      alt="usachlogo"
      class="flex lg:hidden h-20 pb-1" />
    <div
      class="hidden lg:flex flex-col lg:flex-row justify-between h-full text-lg w-full gap-y-4 px-5 text-white">
      <a
        class="flex items-center hover:bg-slate-600 px-7 py-1 transition-all"
        href={langPath + "/"}>{i18n.header.congress}</a>
      <a
        class="flex items-center hover:bg-slate-600 px-7 py-1 transition-all"
        href={langPath + "/group"}>{i18n.header.investigation}</a>
      <a
        class="flex items-center hover:bg-slate-600 px-7 py-1 transition-all"
        href={langPath + "/comitees"}>{i18n.header.committees}</a>
      <a
        class="flex items-center hover:bg-slate-600 px-7 py-1 transition-all"
        href={langPath + "/announcement"}>{i18n.header.announcement}</a>
      <a
        class="flex items-center hover:bg-slate-600 px-7 py-1 transition-all"
        href={langPath + "/#form"}>{i18n.header.proposals}</a>
    </div>
  </div>
  <Dropdown {i18n} {currentLocale} {pathname} />
</div>
