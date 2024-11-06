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
        href={langPath + "/schedule"}>{i18n.header.schedule}</a>
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
      <a
        class="flex items-center hover:bg-slate-600 px-7 py-1 transition-all"
        href={langPath + "/bibliography"}>{i18n.header.bibliography}</a>
        
    </div>
  </div>
  <div class="flex lg:flex-row h-full flex-col-reverse items-end lg:gap-16">
    <a href="/schedule.pdf" download="schedule.pdf" class="flex flex-row gap-1 h-fit m-auto p-1 px-2 lg:p-2 lg:px-3 text-center bg-pink-600 text-white hover:bg-pink-500 transition-all rounded-lg items-center">
      <p class="text-center w-full text-base lg:text-lg font-medium">{i18n.header.download_schedule}</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"/></svg>
    </a>
    <Dropdown {i18n} {currentLocale} {pathname} />
  </div>
</div>
