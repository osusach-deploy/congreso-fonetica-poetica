<script lang="ts">
  import { InputChip, FileDropzone } from "@skeletonlabs/skeleton";

  const API_URL = import.meta.env.PUBLIC_API_URL;
  let nombre = "";
  let email = "";
  let institucion = "";
  let titulo = "";
  let areaTematica = "";
  let idioma = "";
  let areaOtro = "";
  let autoresYFiliacion = "";
  let presentadores = "";
  let pais = "";
  let resumen = "";
  let referencias = "";
  let tags: string[] = [];
  let files: FileList;

  export let i18n;

  const { form } = i18n;

  const areas = form.categories;

  function handleSubmit() {
    let area = areaTematica;
    if (
      areaTematica == "Otro" ||
      areaTematica == "Other" ||
      areaTematica == "Altro"
    )
      area = areaOtro;

    const formData = new FormData();
    formData.append("name", nombre);
    formData.append("email", email);
    formData.append("institution", institucion);
    formData.append("country", pais);
    formData.append("title", titulo);
    formData.append("lang", idioma);
    formData.append("theme", area);
    formData.append("abstract", resumen);
    formData.append("bibliography", referencias);
    formData.append("keywords", tags.join(";"));
    formData.append("authors", autoresYFiliacion);
    formData.append("affiliation", autoresYFiliacion);
    formData.append("hosts", presentadores);
    formData.append("pdf", files[0]);

    fetch(API_URL + "speaker", {
      method: "POST",
      body: formData,
    })
      .then((x) => {
        return x.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
</script>

<div
  id="form"
  class="flex flex-col lg:flex-row w-4/5 lg:w-[60%] lg:justify-between mx-10 mt-10 lg:mt-20 mb-20">
  <div class="flex flex-col lg:w-[45%] gap-3 text-center pt-16">
    <slot></slot>
  </div>
  <div class="lg:w-[40%] mt-10 text-lg">
    <form
      aria-label="form to get a invitation to participate"
      on:submit|preventDefault={handleSubmit}
      class="bg-white bg-opacity-50 p-5 rounded-lg">
      <div class="mb-4">
        <p class=" text-lg font-semibold mb-4">{form.personal_info_title}</p>
        <input
          aria-label="name"
          required
          type="text"
          bind:value={nombre}
          placeholder={form.name_placeholder}
          class="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div class="mb-4">
        <div class="mb-4">
          <input
            aria-label="email"
            required
            type="email"
            bind:value={email}
            placeholder={form.email_placeholder}
            class="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div class="mb-4">
          <input
            aria-label="institution"
            required
            type="text"
            bind:value={institucion}
            placeholder={form.institution_placeholder}
            class="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div class="mb-4">
          <p class=" text-lg font-semibold mb-4">
            {form.exposition_info_title}
          </p>
          <input
            aria-label="presentation title"
            required
            type="text"
            bind:value={titulo}
            placeholder={form.presentation_title_placeholder}
            class="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div class="mb-4">
          <input
            aria-label="authors"
            required
            type="text"
            bind:value={autoresYFiliacion}
            placeholder={form.authors}
            class="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div class="mb-4">
          <input
            aria-label="hosts"
            required
            type="text"
            bind:value={presentadores}
            placeholder={form.hosts}
            class="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div>
          <p class=" text-lg font-semibold mb-4">
            {form.input_chip_sub_label[0]}
            <kbd class="kbd bg-white font-normal">enter</kbd>
            {form.input_chip_sub_label[1]}
          </p>
          <InputChip
            class="border-none mb-4"
            chips="bg-white text-base rounded-lg"
            regionInput="bg-white border-none rounded-lg py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            regionChipList=""
            regionChipWrapper=""
            padding="p-0"
            name="keywords"
            bind:value={tags}
            placeholder={form.input_chip_placeholder}
            maxlength={16}
            max={5}
            allowUpperCase
            label="keyword chip list"
            required />
        </div>
        <div class="mb-4">
          <input
            aria-label="country"
            required
            type="text"
            bind:value={pais}
            placeholder={form.country}
            class="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <div class="mb-4">
          <select
            aria-label="category selector for the language of the presentation"
            required
            bind:value={idioma}
            class="block w-full bg-white border px-4 py-2 pr-8 rounded-lg leading-tight">
            <option hidden disabled value="">{form.language}</option>
            {#each ["English", "Español", "Italiano"] as language, index}
              <option value={index + 1}>{language}</option>
            {/each}
          </select>
        </div>

        <div>
          <select
            aria-label="category selector for the theme of the presentation"
            required
            bind:value={areaTematica}
            class="block w-full mb-4 bg-white border px-4 py-2 pr-8 rounded-lg leading-tight">
            <option disabled hidden value=""
              >{form.category_select_placeholder}</option>
            {#each areas as area}
              <option value={area}>{area}</option>
            {/each}
          </select>
        </div>
        {#if areaTematica == "Otro" || areaTematica == "Other" || areaTematica == "Altro"}
          <input
            aria-label="other category input"
            type="text"
            bind:value={areaOtro}
            placeholder={form.category_other_placeholder}
            class="appearance-none border mb-4 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        {/if}

        <textarea
          aria-label="sumary 250 words max"
          bind:value={resumen}
          class="w-full mb-4 px-2 py-1 rounded-lg focus:outline-none focus:shadow-outline"
          name="sumary"
          id="sumary"
          maxlength="250"
          placeholder={form.sumary}
          required />
        <textarea
          aria-label="bibliography 250 words max"
          bind:value={referencias}
          class="w-full mb-4 px-2 py-1 rounded-lg focus:outline-none focus:shadow-outline"
          name="bibliography"
          id="bibliography"
          placeholder={form.bibliography}
          required />
        <FileDropzone
          name="pdf"
          bind:files
          class="mb-4"
          aria-label="file dropzone to upload your presentation in pdf format">
          <svelte:fragment slot="lead"
            ><img
              src="/img/file_upload.svg"
              alt="file upload icon"
              class="h-14 mx-auto" /></svelte:fragment>
          <svelte:fragment slot="message">
            {#if files == undefined}
              <p>{form.file_pdf}</p>
              <p class="text-sm font-light">
                {form.file_subtitle}
              </p>
            {:else}
              <div>{files[0].name}</div>
            {/if}
          </svelte:fragment>
        </FileDropzone>

        <button
          aria-label="sumbit your information"
          type="submit"
          class="w-full bg-indigo-600 hover:bg-indigo-700 transition-all text-white font-semibold py-2 px-4 rounded">
          {form.submit_button}
        </button>
        <p class="mt-6 px-1 text-xs font-light text-center">
          {form.policy_privacy}
        </p>
      </div>
    </form>
  </div>
</div>
