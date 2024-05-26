<script>
  import { onMount } from 'svelte';
  export let i18n;

  export let selectedLanguage = 'Español';
  let showDropdown = false;

  function selectLanguage(language) {
    selectedLanguage = language;
    localStorage.setItem('selectedLanguage', language);
    showDropdown = false;
  }

  function toggleDropdown() {
    showDropdown = !showDropdown;
  }

  onMount(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      selectedLanguage = savedLanguage;
    }
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.dropdown')) {
        showDropdown = false;
      }
    });
  });
</script>
  
<div class="dropdown flex mr-5">
    <button on:click={toggleDropdown}>
        <p class="text-white text-lg bg-white bg-opacity-15 rounded-lg px-3 py-1">{ i18n.language }: <b>{selectedLanguage}</b></p>
    </button>
    <div class="dropdown-content top-16 right-0.5 rounded-lg {showDropdown ? 'show' : ''}">
        <a href="/"><button on:click={() => selectLanguage('Español')}>Español</button></a>
        <a href="/en"><button on:click={() => selectLanguage('English')}>English</button></a>
        <a href="/it"><button on:click={() => selectLanguage('Italiano')}>Italiano</button></a>
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
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
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