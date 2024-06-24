<script>
  export let i18n;
  export let currentLocale;
  //export let pathname;

  let langPath = currentLocale == "es" ? "" : "/" + currentLocale;
  let showMenu = false;

  function toggleMenu() {
    showMenu = !showMenu;
  }
</script>

<div class="block lg:hidden z-20">
  <button aria-label="open navigation menu for mobile" on:click={toggleMenu}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      class="flex lg:hidden mr-2"
      ><path fill="white" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" /></svg>
  </button>
  <div
    class="absolute gap-2 top-[96px] left-0 right-0 w-[100%] bg-slate-600 pt-1 pb-2 text-white text-lg divide-y divide-slate-500 {showMenu
      ? 'flex flex-col'
      : 'hidden'}">
    <a
      class="flex items-center hover:bg-slate-600 px-3 py-1 transition-all"
      href={langPath + "/"}>{i18n.header.congress}</a>
    <a
      class="flex items-center hover:bg-slate-600 px-3 py-1 transition-all"
      href={langPath + "/group"}>{i18n.header.investigation}</a>
    <a
      class="flex items-center hover:bg-slate-600 px-3 py-1 transition-all"
      href={langPath + "/comitees"}>{i18n.header.committees}</a>
    <a
      class="flex items-center hover:bg-slate-600 px-3 py-1 transition-all"
      href={langPath + "/announcement"}>{i18n.header.announcement}</a>
    <a
      class="flex items-center hover:bg-slate-600 px-3 py-1 transition-all"
      href={langPath + "/#form"}>{i18n.header.proposals}</a>
  </div>
</div>
