<script>
  export let i18n;
  export let currentLocale;
  export let pathname;
  let selectedLanguage = "Español";
  let showDropdown = false;

  // Comentar en dev, bug entre dev y build
  pathname.split("/").pop();
  let pathTo = "/" + (pathname.split("/").pop() ?? "");

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

<div class="dropdown flex lg:mr-5 mx-auto sm:mx-0">
  <button on:click={toggleDropdown}>
    <p
      class="text-white text-base sm:text-lg bg-white bg-opacity-15 rounded-lg px-3 py-1"
    >
      {i18n.language}: <b>{selectedLanguage}</b>
    </p>
  </button>
  <div
    class="dropdown-content top-16 right-0.5 rounded-lg {showDropdown
      ? 'show'
      : ''}"
  >
    <a href={pathTo} class="rounded-lg hover:bg-slate-100">Español</a>
    <a href={"/en" + pathTo} class="rounded-lg hover:bg-slate-100">English</a>
    <a href={"/it" + pathTo} class="rounded-lg hover:bg-slate-100">Italiano</a>
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
