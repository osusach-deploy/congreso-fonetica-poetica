<script lang="ts">
  import { InputChip, FileDropzone } from "@skeletonlabs/skeleton";
  import DynamicInput from "./DynamicInput.svelte";

  export let i18n;

  const { form } = i18n;

  const areas: string[] = form.categories;

  type autor = {
    id: Number;
    value: string;
  };

  type presentador = {
    id: Number;
    value: string;
  };

  type keyword = {
    id: Number;
    value: string;
  };

  const API_URL = import.meta.env.PUBLIC_API_URL;

  let loading = false;
  let formError = false;

  let nombre = "";
  let email = "";
  let institucion = "";
  let titulo = "";
  let areaTematica = "";
  let idioma = "";
  let areaOtro = "";
  let autoresYFiliacion: autor[] = [];
  let presentadores: presentador[] = [];
  let tags: keyword[] = [];
  let pais = "";
  let resumen = "";
  let referencias = "";
  let files: any;

  async function handleSubmit() {
    loading = true;
    let area = areaTematica;
    if (
      areaTematica == "Otro" ||
      areaTematica == "Other" ||
      areaTematica == "Altro"
    )
      area = areaOtro;

    let filesize = parseFloat((files[0].size / 1024 / 1024).toFixed(4)); // MB

    let file: any = files[0];
    let encoded: string = "";
    if (filesize >= 8) {
      file = "muy grande";
    } else {
      encoded = _arrayBufferToBase64(await file.arrayBuffer());
    }
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
    formData.append("keywords", tags.map((s) => s.value).join(";"));
    formData.append("authors", autoresYFiliacion.map((s) => s.value).join(";"));
    formData.append("affiliation", "");
    formData.append("hosts", presentadores.map((s) => s.value).join(";"));
    formData.append("raw_file", file);
    formData.append("encoded_file", encoded);

    fetch(API_URL + "speaker", {
      method: "POST",
      body: formData,
    })
      .then((x) => {
        return x.json();
      })
      .then((data) => {
        console.log(data);
        if (data.success && file == "muy grande") {
          alert(form.submit_file_error);
        }
        if (data.success) {
          formError = false;
          alert(form.submit_success);
          resetForm();
        }
        loading = false;
      })
      .catch((e) => {
        console.log(e);
        loading = false;
        formError = true;
      });
  }

  function autoresUpdate(event: any) {
    autoresYFiliacion = event.detail.inputs;
  }

  function presentadoresUpdate(event: any) {
    presentadores = event.detail.inputs;
  }
  function keywordsUpdate(event: any) {
    tags = event.detail.inputs;
  }

  function _arrayBufferToBase64(buffer: ArrayBuffer) {
    var binary = "";
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  function resetForm() {
    nombre = "";
    email = "";
    institucion = "";
    titulo = "";
    areaTematica = "";
    idioma = "";
    areaOtro = "";
    autoresYFiliacion = [];
    presentadores = [];
    tags = [];
    pais = "";
    resumen = "";
    referencias = "";
    files = void 0;
  }
  resetForm();
</script>

<div
  id="form"
  class="flex flex-col lg:flex-row lg:w-[60%] lg:justify-between mx-3 lg:mx-10 mt-10 lg:mt-20 mb-20">
  <div class="flex flex-col lg:w-[45%] gap-3 text-center pt-16">
    <slot></slot>
  </div>
  <div class="lg:w-[45%] mt-10 text-lg">
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

        <DynamicInput
          on:update={autoresUpdate}
          placeholder={form.authors}
          title={i18n.form.authors_label}
          label="authors-afiliation" />
        <DynamicInput
          on:update={presentadoresUpdate}
          placeholder={form.hosts}
          title={i18n.form.hosts_label}
          label="hosts" />
        <DynamicInput
          on:update={keywordsUpdate}
          placeholder={form.input_chip_label}
          title={i18n.form.input_chip_placeholder}
          label="keywords"
          maxInputs={5} />

        <div class="mb-4">
          <select
            aria-label="country selector"
            required
            bind:value={pais}
            class="block w-full bg-white border px-4 py-2 pr-8 rounded-lg leading-tight">
            <option hidden disabled value="">{form.country}</option>
            {#each i18n.countries.sort() as country, index}
              <option value={country}>{country}</option>
            {/each}
          </select>
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
          required
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
          disabled={loading}
          aria-label="sumbit your information"
          type="submit"
          class="w-full bg-indigo-600 hover:bg-indigo-700 transition-all text-white font-semibold py-2 px-4 rounded">
          {#if loading}
            <svg
              class="mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="28px"
              viewBox="0 0 24 24">
              <g>
                <circle cx="12" cy="3" r="1" fill="currentColor">
                  <animate
                    id="svgSpinners12DotsScaleRotate0"
                    attributeName="r"
                    begin="0;svgSpinners12DotsScaleRotate2.end-0.5s"
                    calcMode="spline"
                    dur="0.6s"
                    keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                    values="1;2;1" />
                </circle>
                <circle cx="16.5" cy="4.21" r="1" fill="currentColor">
                  <animate
                    id="svgSpinners12DotsScaleRotate1"
                    attributeName="r"
                    begin="svgSpinners12DotsScaleRotate0.begin+0.1s"
                    calcMode="spline"
                    dur="0.6s"
                    keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                    values="1;2;1" />
                </circle>
                <circle cx="7.5" cy="4.21" r="1" fill="currentColor">
                  <animate
                    id="svgSpinners12DotsScaleRotate2"
                    attributeName="r"
                    begin="svgSpinners12DotsScaleRotate4.begin+0.1s"
                    calcMode="spline"
                    dur="0.6s"
                    keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                    values="1;2;1" />
                </circle>
                <circle cx="19.79" cy="7.5" r="1" fill="currentColor">
                  <animate
                    id="svgSpinners12DotsScaleRotate3"
                    attributeName="r"
                    begin="svgSpinners12DotsScaleRotate1.begin+0.1s"
                    calcMode="spline"
                    dur="0.6s"
                    keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                    values="1;2;1" />
                </circle>
                <circle cx="4.21" cy="7.5" r="1" fill="currentColor">
                  <animate
                    id="svgSpinners12DotsScaleRotate4"
                    attributeName="r"
                    begin="svgSpinners12DotsScaleRotate6.begin+0.1s"
                    calcMode="spline"
                    dur="0.6s"
                    keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                    values="1;2;1" />
                </circle>
                <circle cx="21" cy="12" r="1" fill="currentColor">
                  <animate
                    id="svgSpinners12DotsScaleRotate5"
                    attributeName="r"
                    begin="svgSpinners12DotsScaleRotate3.begin+0.1s"
                    calcMode="spline"
                    dur="0.6s"
                    keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                    values="1;2;1" />
                </circle>
                <circle cx="3" cy="12" r="1" fill="currentColor">
                  <animate
                    id="svgSpinners12DotsScaleRotate6"
                    attributeName="r"
                    begin="svgSpinners12DotsScaleRotate8.begin+0.1s"
                    calcMode="spline"
                    dur="0.6s"
                    keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                    values="1;2;1" />
                </circle>
                <circle cx="19.79" cy="16.5" r="1" fill="currentColor">
                  <animate
                    id="svgSpinners12DotsScaleRotate7"
                    attributeName="r"
                    begin="svgSpinners12DotsScaleRotate5.begin+0.1s"
                    calcMode="spline"
                    dur="0.6s"
                    keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                    values="1;2;1" />
                </circle>
                <circle cx="4.21" cy="16.5" r="1" fill="currentColor">
                  <animate
                    id="svgSpinners12DotsScaleRotate8"
                    attributeName="r"
                    begin="svgSpinners12DotsScaleRotatea.begin+0.1s"
                    calcMode="spline"
                    dur="0.6s"
                    keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                    values="1;2;1" />
                </circle>
                <circle cx="16.5" cy="19.79" r="1" fill="currentColor">
                  <animate
                    id="svgSpinners12DotsScaleRotate9"
                    attributeName="r"
                    begin="svgSpinners12DotsScaleRotate7.begin+0.1s"
                    calcMode="spline"
                    dur="0.6s"
                    keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                    values="1;2;1" />
                </circle>
                <circle cx="7.5" cy="19.79" r="1" fill="currentColor">
                  <animate
                    id="svgSpinners12DotsScaleRotatea"
                    attributeName="r"
                    begin="svgSpinners12DotsScaleRotateb.begin+0.1s"
                    calcMode="spline"
                    dur="0.6s"
                    keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                    values="1;2;1" />
                </circle>
                <circle cx="12" cy="21" r="1" fill="currentColor">
                  <animate
                    id="svgSpinners12DotsScaleRotateb"
                    attributeName="r"
                    begin="svgSpinners12DotsScaleRotate9.begin+0.1s"
                    calcMode="spline"
                    dur="0.6s"
                    keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                    values="1;2;1" />
                </circle>
                <animateTransform
                  attributeName="transform"
                  dur="6s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="360 12 12;0 12 12" />
              </g>
            </svg>
          {:else}
            {form.submit_button}
          {/if}
        </button>
        {#if formError}
          <p class=" font-semibold text-lg text-red-500 text-center mt-6">
            {i18n.listener_alert_fail}
          </p>
        {/if}
        <p class="mt-6 px-1 text-xs font-light text-center">
          {form.policy_privacy[0]}
        </p>
        <p class="mt-2 px-1 text-xs font-light text-center">
          {form.policy_privacy[1]}
        </p>
      </div>
    </form>
  </div>
</div>
