<script lang="ts">
  const API_URL = import.meta.env.PUBLIC_API_URL;
  let nombre = "";
  let email = "";
  let institucion = "";
  let titulo = "";
  let areaTematica = "";
  let areaOtro = "";

  export let i18n;

  const { form } = i18n;

  const areas = form.categories;

  function handleSubmit() {
    const body = {
      name: nombre,
      email: email,
      institution: institucion,
      title: titulo,
      theme: areaTematica,
    };
    console.log(body);

    fetch(API_URL + "forms", {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((x) => {
        console.log(x);
      })
      .catch((e) => {
        console.log(e);
      });
  }
</script>

<div
  class="flex flex-col md:flex-row md:w-[60%] md:justify-between mx-10 mt-10 md:mt-20 mb-20 md:mb-44"
>
  <div class="flex flex-col md:w-[35%] gap-3 text-center justify-center">
    <p class="font-bold text-4xl">{i18n.interest_declaration_title}</p>
    <p class="text-lg font-light">{i18n.interest_declaration_subtitle}</p>
  </div>
  <div class="md:w-[35%] mt-10 text-lg">
    <form
      on:submit|preventDefault={handleSubmit}
      class="bg-white bg-opacity-50 p-5 rounded-lg"
    >
      <div class="mb-4">
        <p class=" text-lg font-semibold mb-4">{form.personal_info_title}</p>
        <input
          type="text"
          bind:value={nombre}
          placeholder={form.name_placeholder}
          class="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="mb-4">
        <div class="mb-4">
          <input
            type="email"
            bind:value={email}
            placeholder={form.email_placeholder}
            class="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mb-4">
          <input
            type="text"
            bind:value={institucion}
            placeholder={form.institution_placeholder}
            class="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mb-4">
          <p class=" text-lg font-semibold mb-4">
            {form.exposition_info_title}
          </p>
          <input
            type="text"
            bind:value={titulo}
            placeholder={form.presentation_title_placeholder}
            class="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mb-4">
          <select
            bind:value={areaTematica}
            class="block w-full bg-white border px-4 py-2 pr-8 rounded-lg leading-tight focus:outline-none focus:shadow-outline"
          >
            <option disabled value="">{form.category_select_placeholder}</option
            >
            {#each areas as area}
              <option value={area}>{area}</option>
            {/each}
          </select>
        </div>
        {#if areaTematica == "Otro" || areaTematica == "Other" || areaTematica == "Altro"}
            <input type="text"
            bind:value={areaOtro}
            placeholder={form.category_other_placeholder}
            class="appearance-none border rounded-lg mb-6 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          {/if}
        <button
          type="submit"
          class="w-full bg-indigo-400 hover:bg-indigo-500 transition-all text-white font-semibold py-2 px-4 rounded"
        >
          {form.submit_button}
        </button>
      </div>
    </form>
  </div>
</div>

<style>
</style>
