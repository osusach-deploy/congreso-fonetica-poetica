<script>
  export let i18n;
  export let currentLocale;
  export let pathname;
  let selectedLanguage = "Español";
  let showDropdown = false;

  function changeLanguage(currentLocale) {
    if (currentLocale == "it") {
      selectedLanguage = "Italiano";
    }
    if (currentLocale == "es") {
      selectedLanguage = "Español";
    }
    if (currentLocale == "en") {
      selectedLanguage = "English";
    }
  }
  // no es necesario que sea reactivo, que se ejecute al cargar la pagina nomas
  changeLanguage(currentLocale);

  function toggleDropdown() {
    showDropdown = !showDropdown;
  }
</script>

<div
  class="dropdown h-fit my-auto flex lg:mr-2 lg:mr-5  sm:mx-0 bg-inherit rounded-lg z-20">
  <button
    class="flex flex-row h-fit my-auto items-center transition-all text-white text-base sm:text-lg hover:bg-opacity-25 bg-white bg-opacity-15 rounded-lg px-3 py-1"
    on:click={toggleDropdown}>
    {i18n.language}: <b>{selectedLanguage}</b>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ml-1"
      width="1em"
      height="1em"
      viewBox="0 0 1024 1024"
      ><path
        fill="white"
        d="M831.872 340.864L512 652.672L192.128 340.864a30.59 30.59 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.59 30.59 0 0 0-42.752 0z" /></svg>
  </button>
  <div
    class="dropdown-content top-[70px] right-0.5 rounded-lg {showDropdown
      ? 'show'
      : ''}">
    <a href={pathname} class="rounded-lg hover:bg-slate-100">Español</a>
    <a href={"/en" + pathname} class="rounded-lg hover:bg-slate-100">English</a>
    <a href={"/it" + pathname} class="rounded-lg hover:bg-slate-100"
      >Italiano</a>
  </div>
</div>

<style>
  .dropdown {
    position: relative;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: white;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-radius: 0.5rem; /* Agregado para border-radius */
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    cursor: pointer;
  }

  .show {
    display: block;
  }
</style>
